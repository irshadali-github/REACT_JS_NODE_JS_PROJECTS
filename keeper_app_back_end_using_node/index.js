import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const app=express();
const port=3000;
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
app.post("/register",async(req,res)=>{
    const email=req.body.email;
    console.log(email);
    const password=req.body.password;
    console.log(password);
    try{
        const checkResult=await db.query("SELECT * FROM users WHERE email = $1",[email]);
        console.log(checkResult.rows);
        if(checkResult.rows.length>0){
            res.send("Email is Already Exist Try Logging in...");
        }else{
            //password hashing
            console.log("hashing code entered")
            bcrypt.hash(password,saltRound,async(error,hash)=>{
                if(error){
                    res.statusCode(500).send("Some Error Happened.. ");
                }else{
                    const result=await db.query("INSERT INTO users(email,password) VALUES($1,$2) RETURNING *",[email,hash]);
                    console.log(result.rows);
                    res.send("Registration is Successfull..");
                }
            })
            

        }
    }catch(err){
        res.send(err);
    }
});
app.post("/login",async(req,res)=>{
    const email=req.body.email;
    const loginPassword=req.body.password;
    try{
        const checkResult=await db.query("SELECT * FROM users WHERE email=$1",[email]);
        if(checkResult.rows.length>0){
            const user=checkResult.rows[0];
            const storedPassword=user.password;
            //Comparing password
            bcrypt.compare(loginPassword,storedPassword,(err,result)=>{
                if(err){
                    res.send("Some Error Occured");
                }else{
                    if(result){
                        res.send("Valid User id and Password");
                    }else{
                        res.send("Incorrect Password");
                    }
                }
            })
        }else{
            res.send("USER NOT FOUND");
        }
    }catch(err){
        res.send(err);
    }
})
// app.use(express.json());

// app.use((req,res,next)=>{
//     res.setHeader("Access-Contorl-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Headers","*");
//     res.setHeader("Access-Control-Allow-Methods","*");
//     next();
// });
app.listen(port,()=>{
    console.log(`Server is running at port  ${port}`);
});