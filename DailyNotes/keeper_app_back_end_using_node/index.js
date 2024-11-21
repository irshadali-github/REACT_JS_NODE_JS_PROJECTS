import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session"
import passport from "passport";
import { Strategy } from "passport-local";

const app=express();
const port=4000;
const saltRound=10;
const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"keeper_db",
    password:"root",
    port:"5432"
})
db.connect();
app.use(express.static("public"))
//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use((request,response,next)=>{
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Headers","*");
    response.setHeader("Access-Control-Allow-Methods","*");
    next();
});
app.get("/data",async(req,res)=>{
    try{
        debugger;
        const result=await db.query("SELECT * FROM users");
        if(result.rows.length>0){
            console.log(result.rows);
            res.send(result.rows);
        }else{
            res.send("Data not found");
        }

    }catch(err){
        res.send(err);
    }
})
// app.use(session({
//     secret:"TOPSECRET",
//     resave:false,
//     saveUninitialized:true
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.post("/register",async(req,res)=>{
//     const email=req.body.email;
//     console.log(email);
//     const password=req.body.password;
//     console.log(password);
//     try{
//         const checkResult=await db.query("SELECT * FROM users WHERE email = $1",[email]);
//         console.log(checkResult.rows);
//         if(checkResult.rows.length>0){
//             res.send("Email is Already Exist Try Logging in...");
//         }else{
//             //password hashing
//             console.log("hashing code entered")
//             bcrypt.hash(password,saltRound,async(error,hash)=>{
//                 if(error){
//                     res.statusCode(500).send("Some Error Happened.. ");
//                 }else{
//                     const result=await db.query("INSERT INTO users(email,password) VALUES($1,$2) RETURNING *",[email,hash]);
//                     console.log(result.rows);
//                     res.send("Registration is Successfull..");
//                 }
//             })
            

//         }
//     }catch(err){
//         res.send(err);
//     }
// });
// app.post("/login",passport.authenticate("local"))
    // const email=req.body.email;
    // const loginPassword=req.body.password;
    

// passport.use(new Strategy(async function verify(email,password,cb){
//     try{
//         const checkResult=await db.query("SELECT * FROM users WHERE email=$1",[email]);
//         if(checkResult.rows.length>0){
//             const user=checkResult.rows[0];
//             const storedPassword=user.password;
//             //Comparing password
//             bcrypt.compare(password,storedPassword,(err,result)=>{
//                 if(err){
//                     res.send("Some Error Occured");
//                     return cb(err);
                    
//                 }else{
//                     if(result){
//                         res.send("Valid User id and Password");
//                         return cb(null,user);
//                     }else{
//                         res.send("Incorrect Password");
//                         return cb(null,false);
                        
//                     }
//                 }
//             })
//         }else{
//             res.send("USER NOT FOUND ");
//             return cb("USER NOT FOUND");
//         }
//     }catch(err){
//         res.send(err);
//         return cb(err);
//     }
// }))
// passport.serializeUser((user,cb)=>{
//     cb(null,user);
// })
// passport.deserializeUser((user,cb)=>{
//     cb(null,user);
// })
app.listen(port,()=>{
    console.log(`Server is running at port  ${port}`);
});


