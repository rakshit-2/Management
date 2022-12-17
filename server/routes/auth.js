import express from "express";
import db from "../connect/db.js";
import { Connection } from "../connect/db.js";
import { JWT_SECRET } from "../connect/getENV.js";
import bcyrpt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();
import getusertoken from "../middleware/getusertoken.js";
import { body } from "express-validator";
import { validationResult } from "express-validator";

const app = express();
const saltRounds = 10; // the cost factor which calculate a single BCrypt hash

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

      const sql = "select * from manage_profile where email=? and pass=?;";

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
    } catch (err) {
      res.status(500).json({ error: err, success });
    }
  }
);

// get user endpoint
router.get("/getuser", getusertoken, (req, res) => {
  let success = false;
  try {
    var sql = "select * from manage_profile where id=?;";
    db.query(sql, [req.user.id], (err, result) => {
      if (err) {
        res.status(400).send({ err, success });
      }
      success = true;
      res.status(200).send({ result, success });
    });
  } catch (err) {
    res.status(500).json({ error: err, success });
  }
});

export default router;

/*
should not send credos in body in get request. so user post request.
Avoid sending post token in body . send it in header
The common and best practice is too add it to the request header as authorization header. Its basically just to maintain session like the cookie based system. Yes you have to. if you send token through body or as a query then the attacker will see through your URL and go inside your database.
*/
