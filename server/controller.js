const model = require("./model");

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


module.exports = { getAll };