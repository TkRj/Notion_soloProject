import "./App.css";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Entryform from "./components/entryForm";
import { useState, useEffect } from "react";

function App() {
  const [entryFormDisplay, setEntryFormDisplay] = useState(false);

  function newEntryHandler() {
    setEntryFormDisplay(!entryFormDisplay);
  }
  function calenderHandler() {
    alert("calender");
  }

  return (
    <div className="App">
      <div className="App-wrapper">
        <div>
          <Sidebar
            newEntryHandler={newEntryHandler}
            calenderHandler={calenderHandler}
          ></Sidebar>
        </div>

        {entryFormDisplay && (
          <div className="entryForm">
            <Entryform />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
