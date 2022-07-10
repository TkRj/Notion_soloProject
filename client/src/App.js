import "./App.css";

import Footer from "./components/footer";
import Favourites from "./components/favEntries";
import Entryform from "./components/entryForm";
import SidebarButton from "./components/sidebar_button";
import AllEntries from "./components/allEntries";
import SignupForm from "./components/signupForm";
import LoginForm from "./components/loginForm";
import Navbar from "./components/navbar";
import SearchForm from "./components/searchForm";
import KeyboardDoubleArrowUpSharpIcon from '@mui/icons-material/KeyboardDoubleArrowUpSharp';
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';

import { useState, useEffect } from "react";
import {
  postEntry,
  addAccount,
  checkEmail,
  checkLogin,
} from "./utils/services";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [logging, setLogging] = useState(false);
  const [email, setEmail] = useState("");
  const [sort,setSort]=useState(true);//flag to display newest entries first

  const [entries, setEntries] = useState([]);
  const [sideView, setSideView] = useState(false);
  const [sideViewEntry, setSideViewEntry] = useState(null);
  const [sideViewFav, setSideViewFav] = useState(false);
  const [sideViewFavEntry, setSideViewFavEntry] = useState(null);

  const [editView,setEditView]=useState(false);
  const [editViewEntry,setEditViewEntry]=useState(null);

  useEffect(() => {
    //if email exists
    fetch(`http://localhost:3001/entries`)
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((error) => console.log(error));
  }, []);


  async function signUpHandler(e) {
    e.preventDefault();

    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    //if email exists in database, refuse signup
    const email = e.target.email.value;

    const emailExists = await checkEmail(email);
    if (emailExists) {
      alert("Email already exists.\nPlease login.");
      return;
    }

    //check if password and confirmPassword matches
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password === confirmPassword) {
      addAccount(user);
      setLoggedIn(true);
      setEmail(email);
    } else {
      e.target.password.value = "";
      e.target.confirmPassword.value = "";
      alert("Passwords do not match.\nPlease try again.");
    }
  }

  function loginHandler(e) {
    e.preventDefault();
    setLogging(true);
  }
  async function LOGIN(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //If username,email & password matches in DB, allow login
    const loginExists = await checkLogin(username, email, password);
    if (loginExists) {
      setLoggedIn(true);
      setEmail(email);
      setLogging(false);
    } else {
      alert("Username, email or password is incorrect.\nPlease try again.");
      return;
    }
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let date = e.target.date.value;
    let entry = e.target.entry.value;
    if (title && date && entry) {
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
          console.log({ entries });
          setEntries(entries);
        })
        .catch((error) => console.log(error));
    } else {
      alert("Please fill in all fields");
      return;
    }
  }

  function BackHandler(e) {
    e.preventDefault();
    setLogging(false);
  }

  function searchHandler(e){
    e.preventDefault();
    const year = e.target.year.value;
    const month = e.target.months.value;
    console.log(month, year);
  }

  function sortHandler(e){
    e.preventDefault();
    if(sort){
      setEntries(entries.sort((a,b)=>{
        return new Date(a.date) - new Date(b.date);
      }))
      setSort(false);
    }else{
        setEntries(entries.sort((a,b)=>{
        return new Date(b.date) - new Date(a.date);
      }))
      setSort(true);
    }
  }

  if (logging) {
    return (
      <div>
        <LoginForm
          BackHandler={BackHandler}
          setEmail={setEmail}
          LOGIN={LOGIN}
        />
      </div>
    );
  }
  // if (!loggedIn) {
  //   return (
  //     <SignupForm loginHandler={loginHandler} signUpHandler={signUpHandler} />
  //   );
  // }

  return (
    <Router>
      <Navbar setLogging={setLogging} />
      <div className="App">
        <div className="App-wrapper">
          <div className="sidebar">
            <Link to="/newEntry">
              <SidebarButton name="Create" />
            </Link>

            <Link to="/allEntries">
              <SidebarButton name="All Entries" />
            </Link>
            <Link to="/favourites">
              <SidebarButton name="Favourites" />
            </Link>
          

            {/* <SearchForm searchHandler={searchHandler}/> */}
          </div>
          <div>
            <Routes>
              <Route
                path="/newEntry"
                element={<Entryform onSubmitHandler={onSubmitHandler} />}
              ></Route>
              <Route
                path="/allEntries"
                element={
                  <AllEntries
                    entries={entries}
                    setEntries={setEntries}
                    sideView={sideView}
                    sideViewEntry={sideViewEntry}
                    setSideView={setSideView}
                    setSideViewEntry={setSideViewEntry}
                    setEditView={setEditView}
                    editViewEntry={editViewEntry}
                    setEditViewEntry={setEditViewEntry}
                    sortHandler={sortHandler}
                    sort={sort}


                  />
                }
              ></Route>
              <Route
                path="/favourites"
                element={
                  <Favourites
                    entries={entries}
                    setEntries={setEntries}
                    sideViewEntry={sideViewEntry}
                    sideViewFav={sideViewFav}
                    setSideViewFav={setSideViewFav}
                    sideViewFavEntry={sideViewFavEntry}
                    setSideViewFavEntry={setSideViewFavEntry}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
