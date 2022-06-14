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
    <div className="favourites-mainbox">
      <div>
        <ul>
          {entries
            .filter((entry) => entry.favourite === true)
            .map((entry) => {
              return (
                <li className="entryList" key={entry._id}>
                  <Entry
                    entry={entry}
                    setEntries={setEntries}
                    setSideView={setSideView}
                    setSideViewFav={setSideViewFav}
                    setSideViewFavEntry={setSideViewFavEntry}
                  />
                </li>
              );
            })}
        </ul>
      </div>
      AAAA
      {sideViewFav && <SideViewFav sideViewFavEntry={sideViewFavEntry} />}
    </div>
  );
};

export default Favourites;
