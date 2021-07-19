const mongoose = require("mongoose");
const express = require("express");
const app =express();
const dotenv=require("dotenv");
const cors = require('cors')

const cookieparser=require("cookie-parser");
app.use(cookieparser());

dotenv.config({path:"./config.env"});
require('./db/conn');
const User=require('./model/userSchema');
app.use(express.json());
// app.use(require('./router/auth'));
const router=require('./router/auth');

app.use(cors());
app.use(router);

app.get("/login",(req,res)=>{res.send(`hello to login world`);}
);
app.get("/contact",(req,res)=>{res.send(`hello to contact world`);}
);
app.get("/signin",(req,res)=>{res.send(`hello to signin world`);}
);
app.get("/signup",(req,res)=>{res.send(`hello to signup world`);}
);










app.listen(3000,()=>{console.log(`server is running`);});