import Entry from "./entry";
import "./favEntries.css";
import SideViewFav from "./sideViewFav";
const Favourites = ({
  entries,
  setEntries,
  setSideView,
  sideViewFav,
  setSideViewFav,
  sideViewFavEntry,
  setSideViewFavEntry,
}) => {
  return (
    <div className="allentries-mainbox">
      <div>
        <ul className="ul-box">
          {entries
            .filter((entry) => entry.favourite === true)
            .map((entry) => {
              return (
                <li className="entryList" key={entry._id}>
                  <Entry
                    entry={entry}
                    entries={entries}
                    setEntries={setEntries}
                    setSideView={setSideView}
                    setSideViewFav={setSideViewFav}
                    sideViewFavEntry={sideViewFavEntry}
                    setSideViewFavEntry={setSideViewFavEntry}
                  />
                </li>
              );
            })}
        </ul>
      </div>
      
      {sideViewFav && <SideViewFav sideViewFavEntry={sideViewFavEntry} />}
    </div>
  );
};

export default Favourites;
