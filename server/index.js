import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Connection } from "./connect/db.js";
import { db_port } from "./connect/getENV.js";
import auth from "./routes/auth.js";

const app = express();
app.use(cors()); // allow api to fetch from other ports as well
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// login check api
app.use("/auth", auth);

Connection().then(() => {
  console.log("Database Connected Successfully");
  app.listen(db_port, () => {
    console.log(`Server started on port ${db_port}`);
  });
});

// npm run devStart
