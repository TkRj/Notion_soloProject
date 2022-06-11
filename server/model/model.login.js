const { Signup } = require("../db");
const bcrypt = require("bcrypt");



async function signup(res, newAccount) {

  const saltPassword = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(newAccount.password, saltPassword);

  const SignedupUser = new Signup({
    username: newAccount.username,
    email: newAccount.email,
    password: hashPassword,
  });

  SignedupUser.save()
    .then(() =>  console.log("Account created"))
    .catch((err) => console.log("Error! Account not created"));
}

module.exports = { signup };
