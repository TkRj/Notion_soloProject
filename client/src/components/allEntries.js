import Entry from "./entry";
import SideView from "./sideView";
import "./allEntries.css";

const AllEntries = ({
  entries,
  setEntries,
  sideView,
  setSideView,
  sideViewEntry,
  setSideViewEntry,
}) => {
  console.log("allentries", entries);
  return (
    <div className="allentries-mainbox">
      <div>
        <ul className="ul-box">
          {entries.map((entry) => {
            return (
              <li className="entryList" key={entry._id}>
                <Entry
                  entry={entry}
                  setEntries={setEntries}
                  setSideView={setSideView}
                  setSideViewEntry={setSideViewEntry}
                />
              </li>
            );
          })}
        </ul>
      </div>
      {sideView && <SideView  sideViewEntry={sideViewEntry} />}
    </div>
  );
};

export default AllEntries;
