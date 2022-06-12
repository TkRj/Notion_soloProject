const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Notion")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Something went wrong", err));

const EntrySchema = new mongoose.Schema(
  {
    title: String,
    date: Date,
    entry: String,
    favourite: Boolean,
  },
  { collection: "Entry" }
);

const SignupSchema = new mongoose.Schema({
  username: { type:String, required: true },
  email:{ type:String, required: true },
  password: { type:String, required: true },
  entries:[EntrySchema],
  date:{
    type: Date,
    default:Date.now
  }

});

// const UserSchema = new mongoose.Schema(
//   {
//     email: { type:String, required: true },

//   }
// )

const Entries = mongoose.model("Entries", EntrySchema);
const Signup = mongoose.model("Accounts", SignupSchema);


module.exports = {Entries,Signup};
