import "./App.css";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Entryform from "./views/entryForm";
import Entry from "./views/entry";
import { useState, useEffect } from "react";
import { postEntry, getAllEntries } from "./utils/services";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  const [entryFormDisplay, setEntryFormDisplay] = useState(false);
  const [allEntriesDisplay, setAllEntriesDisplay] = useState(false);
  const [favEntriesDisplay, setFavEntriesDisplay] = useState(false);
  //For new entry
  function newEntryHandler() {
    setEntryFormDisplay(true);
    setAllEntriesDisplay(false);
    setFavEntriesDisplay(false);
  }
  //For All Entries display
  function allEntriesHandler() {
    //turn only all entries display ON
    setEntryFormDisplay(false);
    setAllEntriesDisplay(true);
    setFavEntriesDisplay(false);

    getAllEntries().then((entries) => setEntries(entries));
  }
  //For all Favourites display
  function allFavHandler() {
    setEntryFormDisplay(false);
    setAllEntriesDisplay(false);
    setFavEntriesDisplay(true);
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

  return (
    <div className="App">
      <div className="App-wrapper">
        <div>
          <Sidebar
            newEntryHandler={newEntryHandler}
            allEntriesHandler={allEntriesHandler}
            allFavHandler={allFavHandler}
          ></Sidebar>
        </div>

        {entryFormDisplay && (
          <div className="entryForm">
            <Entryform onSubmitHandler={onSubmitHandler} />
          </div>
        )}
        {allEntriesDisplay && (
          <ul>
            {entries.map((entry) => {
              return (
                <li className="entryList" key={entry._id}>
                  <Entry entry={entry} />
                </li>
              );
            })}
          </ul>
        )}
        {favEntriesDisplay && (
          <ul>
            {entries
              .filter((entry) => entry.favourite === true)
              .map((entry) => {
                return (
                  <li className="entryList" key={entry._id}>
                    <Entry entry={entry} />
                  </li>
                );
              })}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
