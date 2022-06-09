const express = require("express");
const app = express();
const PORT = 3001;
const router = require("./router");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening...${PORT}`);
});