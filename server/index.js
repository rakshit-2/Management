const express=require('express');
const app=express();
const dotenv=require("dotenv");
const mysql=require("mysql");
const bodyParser=require('body-parser');
const cors=require('cors');



app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config();

const db_host=process.env.HOST;
const db_user=process.env.USER;
const db_pass=process.env.PASSWORD;
const db_database=process.env.DATABASE;

const db=mysql.createPool({
    host:db_host,
    user:db_user,
    password:db_pass,
    database:db_database,
});







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






const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`listning on port ${port}`);
});


// npm run devStart