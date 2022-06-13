const { Signup } = require("../db");
// const bcrypt = require("bcrypt");

async function signup(newAccount) {
  // const saltPassword = await bcrypt.genSalt(10);
  // const hashPassword = await bcrypt.hash(newAccount.password, saltPassword);

  const SignedupUser = new Signup({
    username: newAccount.username,
    email: newAccount.email,
    password: newAccount.password,
  });

  SignedupUser.save()
    .then(() => console.log("Account created"))
    .catch((err) => console.log("Error! Account not created"));
}
async function checkEmail(Email) {
  console.log('model',Email);
    let doc = await Signup.findOne({ email: Email });
    if (doc){
      return true;
    }else {return false;}

}

async function checkLogin(username,email,password) {
  // const saltPassword = await bcrypt.genSalt(10);
  // const hashPassword = await bcrypt.hash(password, saltPassword);
 
  let doc = await Signup.findOne({ username: username, email: email,password: password });
  if (doc){
    return true;
  }else{return false;}
}

module.exports = { signup, checkEmail,checkLogin };
