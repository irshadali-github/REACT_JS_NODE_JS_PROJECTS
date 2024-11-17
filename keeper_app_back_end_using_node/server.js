import express from "express";
import bodyParser from "body-parser";
import pg, { Client } from "pg";
const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"keeper_db",
    password:"root",
    port:5432
})
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
db.connect();


app.listen(port,()=>{
    console.log(`Server is running at port  ${port}`);
});