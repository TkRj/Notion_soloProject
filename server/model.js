const Entries = require("./db");

function getAll() {
  return Entries.find({})
}

// function postEvent(event){
//   const newEvent = new Events(event);
//   newEvent.save();

//   return newEvent;
// }

module.exports = { getAll };