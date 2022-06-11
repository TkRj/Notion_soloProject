import Entry from "./entry";

const Favourites = ({ entries, setEntries }) => {
  return (
    <ul>
      {entries
        .filter((entry) => entry.favourite === true)
        .map((entry) => {
          return (
            <li className="entryList" key={entry._id}>
              <Entry entry={entry} setEntries={setEntries} />
            </li>
          );
        })}
    </ul>
  );
};

export default Favourites;
