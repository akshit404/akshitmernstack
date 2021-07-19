import React, { useState } from 'react';
import {NavLink, useHistory} from "react-router-dom";

function Signup() {
  const history=useHistory();

  const[user,setUser]=useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  });
  let name,value;
  const handleInputs =(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  }
  const PostData =async(e)=>{
   
    e.preventDefault();
    const {name,email,phone,password,cpassword}=user;
    console.log(name);
    console.log(email);
    const res =await fetch("/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({name,email,phone,password,cpassword})
    });
    
    

    
    const data=await res.json();

    
    
    if(data.status===422 || !data){
      
      window.alert("invalid registration");
      console.log("invalid registration");
   
    }
    else{
      
      window.alert("succsefully registred");
      console.log("sucessfully registration");
      
      history.push("/login");
    }
    
    


  }




  return (
    <>




<div id="login-box">
  <div className="left">
    <h1>Sign up</h1>

    <form  action="/signup" method="POST" className="singup-form" id="signform">

        <input type="text" name="name" placeholder="Username"
        value={user.name}
        onChange={handleInputs}
        />
        <input type="text" name="email" placeholder="E-mail"
        value={user.email}
        onChange={handleInputs}
        />
        <input type="text" name="phone" placeholder="phone no"
        value={user.phone}
        onChange={handleInputs}
        />
        <input type="password" name="password" placeholder="Password"
        value={user.password}
        onChange={handleInputs}
        />
        <input type="password" name="cpassword" placeholder="Retype password"
        value={user.cpassword}
        onChange={handleInputs}
        />

        <input type="submit" name="signup_submit" value="signup" id="signupbutton" onClick={PostData}
         />
 
  </form>
  </div>

  <div className="right">
    <span className="loginwith">Sign in with<br />social network</span>

    <button className="social-signin facebook">Log in with facebook</button>
    <button className="social-signin twitter">Log in with Twitter</button>
    <button className="social-signin google">Log in with Google+</button>
    <NavLink to="/login" className="signup-image-link">"Already login"</NavLink>
  </div>
  
  <div className="or">OR</div>
</div>




      
    </>

  )
}
export default Signup;
