import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../connect/getENV.js";

const getusertoken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please Login first" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (err) {
    res.status(401).send({ error: "Please Login first" });
  }
};

export default getusertoken;
