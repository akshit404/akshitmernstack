import React from 'react';
import {useState,useEffect} from 'react';


function Contact() {
  
  const [ userData ,setUserData]=useState({});
  
  const callContactpage = async()=>{
    try{
      const res = await fetch('/getdata',{
        method: 'GET',
        headers:{
        "Content-Type":"application/json"
        },
        credentials:"include"


      });
     // console.log("hine");
      const data = await res.json();
      //console.log("gar");
      setUserData(data);
      //console.log(data);
      console.log("fand");
      if(!res.status===200){
        const error =new Error (res.error);
        throw error;
      }
    }
    catch(err){
      console.log(err);
      console.log("hello ash");
      

    }
  }

  useEffect(()=>{
    callContactpage();
  },[]);
  
  return (
    <>


<div id="login-box">
  <div className="left">
    <h1>Contact Us</h1>

    <input type="text" name="username"  value={userData.name} placeholder="Username" />
    <input type="text" name="email"  value={userData.email} placeholder="E-mail" />
    <input type="text" name="phone" value={userData.phone} placeholder="phone no" />
    <span></span>
    <input type="text" name="querry" placeholder="type your querry "/>

    <input type="submit" name="signup_submit" value="Submit" />
  </div>

</div>

      
    </>

  )
}
export default Contact;
