const mongoose = require('mongoose');
const Notion =mongoose.connect("mongodb://localhost:27017/Notion")

const EntrySchema = new mongoose.Schema(
  {
    title:String,
    date:Date,
    entry:String,
    favourite:Boolean,

  },{collection:'Entry'}
);

// const UserSchema = new mongoose.Schema(
//   {
//     firstName:String,
//     lastName:String,
//     email:String,
//     password:String,
//     entries:[EntrySchema]
//   }
// )

const Entries = mongoose.model('Entries',EntrySchema);

const dataBase = mongoose.connection;

dataBase.on("error", (err) => console.log(err));
dataBase.once("connected", () => console.log("database connected"));

module.exports = Entries;