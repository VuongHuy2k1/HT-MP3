const express = require("express");
require("dotenv").config();

const db = require("./config/db");

db.connect();

// const { engine } = require ('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
