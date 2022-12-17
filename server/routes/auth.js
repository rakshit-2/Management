const express = require("express");
const dotenv = require("dotenv");
// const db = require("../index");
const app = express();
const bcyrpt = require("bcrypt");
const saltRounds = 10; // the cost factor which calculate a single BCrypt hash
const mysql = require("mysql");
const router = express.Router();
const getusertoken = require("../middleware/getusertoken");
const { body, validationResult } = require("express-validator");

var jwt = require("jsonwebtoken");
dotenv.config();
var JWT_SECRET = process.env.JWT_SECRET;
const db_host = process.env.HOST;
const db_user = process.env.USER;
const db_pass = process.env.PASSWORD;
const db_database = process.env.DATABASE;

router.post(
  "/login",
  body("email", "Not a valid email").isEmail(), //middleware- express validation
  body("pass", "Password should be of min 5 lenght").isLength({ min: 5 }),
  async (req, res) => {
    let success = false;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), success }); //will send flag later on to tell the res status
      }

      // // const encryptedPassword = await bcyrpt.hash(password, saltRounds);

      var db = mysql.createConnection({
        host: db_host,
        user: db_user,
        password: db_pass,
        database: db_database,
      });

      db.connect(async (err) => {
        if (err) return res.status(400).send({ err, success });

        const sql = "select * from manage_profile where email=? and pass=?;";

        // const sql = `select * from manage_profile where email=${req.body.email} and pass=${req.body.pass};`;

        db.query(sql, [req.body.email, req.body.pass], (err, result) => {
          if (err) {
            res.status(400).json({ error: err, success });
          } else {
            success = true;
            const payload = {
              user: {
                id: result[0].id,
              },
            };
            const authtoken = jwt.sign(payload, JWT_SECRET);
            res.status(200).json({ result, success, authtoken });
          }
        });
      });
    } catch (err) {
      res.status(500).json({ error: err, success });
    }
  }
);

// get user endpoint
router.get("/getuser", getusertoken, (req, res) => {
  let success = false;
  try {
    var db = mysql.createConnection({
      host: db_host,
      user: db_user,
      password: db_pass,
      database: db_database,
    });

    db.connect(async (err) => {
      if (err) return res.status(400).send({ err, success });
      var sql = "select * from manage_profile where id=?;";
      db.query(sql, [req.user.id], (err, result) => {
        if (err) {
          res.status(400).send({ err, success });
        }
        success = true;
        res.status(200).send({ result, success });
      });
    });
  } catch (err) {
    res.status(500).json({ error: err, success });
  }
});

module.exports = router;

/*
should not send credos in body in get request. so user post request.
Avoid sending post token in body . send it in header
The common and best practice is too add it to the request header as authorization header. Its basically just to maintain session like the cookie based system. Yes you have to. if you send token through body or as a query then the attacker will see through your URL and go inside your database.
*/
