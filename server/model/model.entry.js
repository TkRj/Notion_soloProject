const {Entries} = require("../db");

async function getAll(email) {
  return await Entries.find({}).sort({date:-1});
}

async function postEntry(entry) {
  const newEntry = new Entries(entry);
  await newEntry.save();

  return newEntry;
}

async function updateFav(id) {
  const entry = await Entries.findById(id);
  const value = entry.favourite;

  Entries.findByIdAndUpdate(
    id,
    { $set: { favourite: !value } },
    function (err, doc) {
      if (err) console.log(err);
    }
  );
  return await Entries.find({}).sort({date:-1});
}

async function deleteEntry(id) {
  await Entries.findByIdAndDelete(id);

  return await Entries.find({}).sort({date:-1});
}

module.exports = { getAll, postEntry, updateFav, deleteEntry };
