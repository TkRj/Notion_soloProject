const model = require("../model/model.entry");

async function getAll(req, res) {
  try {

    const entries = await model.getAll();
    res.status(200);

    res.send(entries);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function postEntry(req,res){
  try {
    if (
      req.body.title === "" ||
      req.body.date === "" ||
      req.body.entry === ""
    ) {
      res.status(400); //Bad request

    } else {
      const entry = req.body;
      const newEntry = await model.postEntry(entry);
      res.status(201);



      const entries= await model.getAll()

      res.send(entries);
    }
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function updateFav(req,res){
  try {
    const id = req.params.id;
    await model.updateFav(id)

    const entries= await model.getAll()

    res.send(entries);

    res.status(200);

  } catch (error) {

    res.send(error);
    res.status(500);
  }
}

async function deleteEntry(req,res){
  try {
    const id = req.params.id;
    await model.deleteEntry(id)

    const entries= await model.getAll()
    res.send(entries);

    res.status(200);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}


module.exports = { getAll,postEntry,updateFav,deleteEntry };