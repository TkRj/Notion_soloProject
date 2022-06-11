import Entry from "./entry";

const AllEntries = ({entries,setEntries}) => {
  console.log('allentries',entries);
  return (
    <ul>
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
