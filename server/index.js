import express from 'express';
import db from './connect/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import  { Connection } from "./connect/db.js";
import {db_port} from './connect/getENV.js';


const app=express();
// middlewares cors, body-parser, express
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))







// HOME API on port
app.get("/",(req,res)=>{
    res.send("hello api..!!");
});






// login check api
app.get('/login-get',(req,res)=>{
    var email=req.query.email;
    var pass=req.query.pass;
    const ele="select * from manage_profile where email=? and pass=?;";
    db.query(ele,[email,pass],(err,result)=>{
        if(result.length===0)
        {
            res.send(false)
        }
        else
        {
            res.send(true)
        }
    })
})


app.get('/profile-get-all',(req,res)=>{
    var user_id=req.query.user_id;
    const ele="select * from manage_profile where user_ID=?;";
    db.query(ele,[user_id],(err,result)=>{
        res.send(result)
    })
})


Connection().then(() => {
    console.log("Database Connected Successfully");
    app.listen(db_port, () => {
        console.log(`Server started on port ${db_port}`);
    });
});


// npm run devStart