const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors()); // allow api to fetch from other ports as well
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

const db_host = process.env.HOST;
const db_user = process.env.USER;
const db_pass = process.env.PASSWORD;
const db_database = process.env.DATABASE;

// const db = mysql.createPool({
//   host: db_host,
//   user: db_user,
//   password: db_pass,
//   database: db_database,
// });

const connectToDb = () => {
  const db = mysql.createPool({
    host: db_host,
    user: db_user,
    password: db_pass,
    database: db_database,
  });
  return db;
};

app.get("/", (req, res) => {
  res.send("hello api..!!");
});

// login check api
app.use("/auth", require("./routes/auth"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});

module.exports = connectToDb();
// npm run devStart
