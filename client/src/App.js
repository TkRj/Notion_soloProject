import "./App.css";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Entryform from "./views/entryForm";
import Entry from "./views/entry";
import { useState, useEffect } from "react";
import {postEntry,getAllEntries} from './utils/services'

function App() {
  const [entries, setEntries] = useState([]);

  const [entryFormDisplay, setEntryFormDisplay] = useState(false);
  const [allEntriesDisplay, setAllEntriesDisplay]=useState(false);

  function newEntryHandler() {
    setEntryFormDisplay(true);
    setAllEntriesDisplay(false);
  }
  function onSubmitHandler(e){
    e.preventDefault();

    const entry = {
      title: e.target.title.value,
      date: e.target.date.value,
      entry: e.target.entry.value,
      favourite:false

    }
    //clear values
    e.target.title.value='';
    e.target.date.value='';
    e.target.entry.value='';

    postEntry(entry)
      .then((entries)=>{
        setEntries(entries);
      })
      .catch(error=>console.log(error))

  }
  function allEntriesHandler() {
    //turn only all entries display ON
    setEntryFormDisplay(false);
    setAllEntriesDisplay(true);

     getAllEntries().then(entries=>setEntries(entries))

  }

  return (
    <div className="App">
      <div className="App-wrapper">
        <div>
          <Sidebar
            newEntryHandler={newEntryHandler}
            allEntriesHandler={allEntriesHandler}

          ></Sidebar>
        </div>

        {entryFormDisplay && (
          <div className="entryForm" >
            <Entryform onSubmitHandler={onSubmitHandler} />
          </div>
        )}
                {allEntriesDisplay && (
                  <ul>
                 { entries.map((entry)=> {
                    return (
                        <li className ="entryList "key={entry._id} >
                           <Entry entry={entry}/>
                        </li>
                  )
                  })}

                  </ul>

        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
