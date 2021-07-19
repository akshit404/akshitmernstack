const express =require("express");
const User = require("../model/userSchema");
const router =express.Router();
const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken");
//const authenticate =require("../middleware/authenticate");
const cookieparser=require("cookie-parser");



const cookieParser = require('cookie-parser');
router.use(cookieParser());




require('../db/conn');


router.get("/",(req,res)=>{res.send(`hello to my registration world`);}
);

//regitsration
router.post("/signup",(req,res)=>{
    const { name,email,phone,password,cpassword}=req.body;
     console.log(name);
    if(!name||!email||!phone||!password||!cpassword){
        return res.status(422).json({error:"missing one field"});
    }
    if(password!=cpassword){
        return res.status(422).json({error:"password and cpassword not same"});
    }
    User.findOne({email}).then((userexist)=>{
        if(userexist){
            return res.status(422).json({error:"email exist"});
        }
        const user =new User({name,email,phone,password,cpassword});
        
        user.save().then(()=>{res.status(201).json({message:"sucessfull"});}).catch((err)=>res.status(500).json({error:"fail"}));
    }).catch(err=>{console.log(err);});
});

//login route
router.post('/signin',async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({error:"plz filled the data"});
        }
        console.log(password);
        const userlogin= await User.findOne({email});
        const isMatch =await bcrypt.compare(password,userlogin.password);
        const token= await userlogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken",token,
        {
            expires: new Date(Date.now()+25892000000),
           // httpOnly:true
        });

        if(!userlogin || !isMatch){
           return  res.json({error:"user error wrong credential"});
        }
       console.log(userlogin);
      // console.log("fired");
       res.json({message:"login succesfully"});

    }
    catch(err){
        console.log(err);

    }
});

//router.get(authenticate).get('/about',(req,res)=>{
   // console.log(`hello about`);
    // res.send(req.rootUser);
    //console.log("yes me");
 // });
 // middleware
 const authenticate =  async(req,res,next)=>{
    console.log("mine");
    try{
        const token =req.cookies.jwtoken;
        const verifyToken =jwt.verify(token,process.env.SECRET_KEY);
        const rootUser =await User.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){
            
            throw new Error("user not found");
        }
        console.log("here bro");
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
       // response.end();
       console.log(" i am new");
      next();
    }
    catch(err){
        res.status(401).send("unauthorised token ");
        console.log(err);
    }
};

 
  router.get("/about", authenticate, async (req, res) => {
    res.send(req.rootUser)
})
router.get("/getdata", authenticate, async (req, res) => {
    res.send(req.rootUser)
})
router.get("/logout",  async (req, res) => {
    console.log("logout hogya kya");
    res.clearCookie('jwtoken');
    res.status(200).send("user logout");
})


module.exports = router;


