const model = require("../model/model.login");


async function signup(req,res){
  const newSignup = req.body
  const newAccount = await model.signup(res,newSignup)

  res.send(newAccount);
  res.status(201)
}



module.exports={signup};