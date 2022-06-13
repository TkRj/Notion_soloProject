const model = require("../model/model.login");


async function signup(req,res){
  const newSignup = req.body
  const newAccount = await model.signup(newSignup)

  res.send(newAccount);
  res.status(201)
}

async function checkEmail(req,res){
  const email = req.body.email
  const checkEmail = await model.checkEmail(email)
  console.log('controller', checkEmail);
  res.send(checkEmail);
  res.status(200)
}

async function checkLogin(req,res){
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  const checkLogin = await model.checkLogin(username,email,password)
  res.send(checkLogin);
  res.status(200)
}


module.exports={signup,checkEmail,checkLogin};