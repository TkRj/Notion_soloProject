const Entries = require("./db");

function getAll() {
  return Entries.find({})
}

function postEntry(entry){
  const newEntry = new Entries(entry);
  newEntry.save();

  return newEntry;
}

module.exports = { getAll,postEntry };