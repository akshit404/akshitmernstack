const mongoose =require("mongoose");

const DB= process.env.DATABASE;

mongoose.connect(DB,{
    userNewUrlParser:true,
    userUnifiedTopology:true,

}).then(()=>{
    console.log(`connection sucesful`);
}).catch((err)=>console.log(`no connection`));
