import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
// const app=express.Router();
const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"keeper_db",
    password:"root",
    port:"5432"
})
db.connect();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
const saltRound=10;

app.post("/",async(req,res)=>{
    debugger;
    const email=req.body.email;
    const password=req.body.password;
    try{
        const checkResult=await db.query("SELECT * FROM user WHERE email = $1",[email]);
        if(checkResult.rows.length>0){
            res.send("Email is Already Exist Try Logging in...");
        }else{
            //password hashing
            bcrypt.hash(password,saltRound,async(error,hash)=>{
                if(error){
                    res.statusCode(500).send("Some Error Happened.. ");
                }else{
                    const result=await db.query("INSERT INTO users(email,password) VALUES($1,$2)"[email,hash]);
                    res.send("Registration is Successfull..");
                }
            })
            

        }
    }catch(err){
        res.send(err);
    }
});
export default app;