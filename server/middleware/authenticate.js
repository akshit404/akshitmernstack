const jwt =require("jsonwebtoken");
const User = require("../model/userSchema");




const authenticate =  async(req,res,next)=>{
    console.log("mine");
    try{
        const token =req.cookies.jwtoken;
        const verifyToken =jwt.verify(token,process_env.SECRET_KEY);
        const rootUser =await User.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){
            
            throw new Error("user not found");
        }
        consol.log("here bro");
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
//module.export=authenticate;