import React,{ useState }from 'react';
import { useHistory} from "react-router-dom";





function Login() {
  const history=useHistory();
  const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const loginUser=async(e)=>{
  e.preventDefault();
  
  const res =await fetch("/signin",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({email,password})
  });
  const data=await res.json();

    
    console.log(data);
    if(data.status===400 || !data){
      
      window.alert("invalid registration");
      console.log("invalid registration");
   
    }
    else{
      
      window.alert("succsefully registred");
      console.log("sucessfully registration");
      
      history.push("/about");
    }
}

  return (
    <>





      <div className="signup">
  <div className="signup-connect">
    <h1>Create your account</h1>
    <a to="#" className="btn btn-social btn-facebook"><i className="fa fa-facebook"></i> Sign in with Facebook</a>
    <a to="#" className="btn btn-social btn-twitter"><i className="fa fa-twitter"></i> Sign in with Twitter</a>
    <a to="#" className="btn btn-social btn-google"><i className="fa fa-google"></i> Sign in with Google</a>
   
  </div>
  <div className="signup-classic">
    <h2>Use the classical way</h2>
    <form method="POST" className="form">
      <fieldset className="email">
        <input type="email" placeholder="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />
      </fieldset>
      <fieldset className="password">
        <input type="password" placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />
      </fieldset>
      <button type="submit" className="btn" onClick={loginUser}>log in</button>
    </form>
  </div>
</div>
      









    </>

  )
}
export default Login;
