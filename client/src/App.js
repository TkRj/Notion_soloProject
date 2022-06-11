import "./App.css";
import Footer from "./components/footer";
import Favourites from "./components/favEntries";

import Entryform from "./components/entryForm";
import SidebarButton from "./components/sidebar_button";
import AllEntries from "./components/allEntries";

import { useState, useEffect } from "react";
import { postEntry,addAccount, getAllEntries } from "./utils/services";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Navbar from "./components/navbar";


function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((error) => console.log(error));
  }, []);

  // const [entryFormDisplay, setEntryFormDisplay] = useState(false);
  // const [allEntriesDisplay, setAllEntriesDisplay] = useState(false);
  // const [favEntriesDisplay, setFavEntriesDisplay] = useState(false);
  // //For new entry
  // function newEntryHandler() {
  //   setEntryFormDisplay(true);
  //   setAllEntriesDisplay(false);
  //   setFavEntriesDisplay(false);
  // }
  // //For All Entries display
  // function allEntriesHandler() {
  //   //turn only all entries display ON
  //   setEntryFormDisplay(false);
  //   setAllEntriesDisplay(true);
  //   setFavEntriesDisplay(false);

  //   getAllEntries().then((entries) => setEntries(entries));
  // }
  // //For all Favourites display
  // function allFavHandler() {
  //   setEntryFormDisplay(false);
  //   setAllEntriesDisplay(false);
  //   setFavEntriesDisplay(true);
function loginHandler(e){
  e.preventDefault();
  //if username and password match, set login to true
  const user={
    username:e.target.username.value,
    email:e.target.email.value,
    password:e.target.password.value
  }
  addAccount(user);
  setLoggedIn(true);
}


  function onSubmitHandler(e) {
    e.preventDefault();

    const entry = {
      title: e.target.title.value,
      date: e.target.date.value,
      entry: e.target.entry.value,
      favourite: false,
    };
    //clear values
    e.target.title.value = "";
    e.target.date.value = "";
    e.target.entry.value = "";

    postEntry(entry)
      .then((entries) => {
        setEntries(entries);
      })
      .catch((error) => console.log(error));
  }

  //RENDER
  if (!loggedIn) {
    return <LoginForm loginHandler={loginHandler}/>;
  }

  return (
    <Router>
      <Navbar  setLoggedIn={setLoggedIn}/>
    <div className="App">
       <div className="App-wrapper">
        <div className="sidebar">
          <Link to="/newEntry"><SidebarButton name ="new Entry"/></Link>
          <Link to="/allEntries"><SidebarButton name ="All Entries"/></Link>
          <Link to="/favourites"><SidebarButton name ="Favourites"/></Link>

        </div>
        <div>
        <Routes>
          <Route path="/newEntry"  element ={<Entryform onSubmitHandler={onSubmitHandler}/>} ></Route>
          <Route path="/allEntries"  element ={<AllEntries entries={entries} setEntries={setEntries}/>} ></Route>
          <Route path="/favourites"  element ={<Favourites entries={entries} setEntries ={setEntries}/>} ></Route>
        </Routes>
      </div>
    </div>
      <Footer />
    </div>
    </Router>
  );
}






export default App;
