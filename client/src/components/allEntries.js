import "./allEntries.css";
import Entry from "./entry";
import SideView from "./sideView";
import EditForm from "./editForm";
import KeyboardDoubleArrowUpSharpIcon from '@mui/icons-material/KeyboardDoubleArrowUpSharp';
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';

const AllEntries = ({
  entries,
  setEntries,
  sideView,
  setSideView,
  sideViewEntry,
  setSideViewEntry,
  editView,
  setEditView,
  editViewEntry,
  setEditViewEntry,
  sortHandler,
  sort
}) => {
  console.log("allentries", entries);
  return (
    <div className="allentries-mainbox">
      <div>
        <div className="sortBtn">
      {sort?<KeyboardDoubleArrowDownSharpIcon onClick={sortHandler}  />:<KeyboardDoubleArrowUpSharpIcon onClick={sortHandler} />}</div>
        <div>
        <ul className="ul-box">
          {entries.map((entry) => {
            return (
              <li className="entryList" key={entry._id}>
              
                <Entry
                  entry={entry}
                  setEntries={setEntries}
                  setSideView={setSideView}
                  sideViewEntry={sideViewEntry}
                  setSideViewEntry={setSideViewEntry}
                  editView={editView}
                  setEditView={setEditView}
                  setEditViewEntry={setEditViewEntry}
                />

              </li>
            );
          })}
        </ul>
        </div>
      </div>
      {/* {editView && <EditForm editViewEntry={editViewEntry} />} */}
      {sideView && <SideView  sideViewEntry={sideViewEntry} />}
    </div>
  );
};

export default AllEntries;
