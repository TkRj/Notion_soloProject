import Entry from "./entry";
import './allEntries.css'

const AllEntries = ({entries,setEntries}) => {
  console.log('allentries',entries);
  return (
    <ul className="ul-box">
      {entries.map((entry) => {
        return (
          <li className="entryList" key={entry._id}>
            <Entry entry={entry} setEntries={setEntries} />
          </li>
        );
      })}
    </ul>
  );
};

export default AllEntries;
