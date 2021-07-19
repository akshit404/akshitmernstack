import React from 'react';
import {useState,useEffect} from 'react'

 
function Home() {

  
  const [userData,setUserData]=useState({});
  
  const callHomepage = async()=>{
    try{
      const res = await fetch('/about',{
        method: 'GET',
        headers:{
        Accept:"appllication/json",
        "Content-Type":"application/json"
        },
        credentials:"include"


      });
      //console.log("hine");
      const data = await res.json();
      //console.log("gar");
      setUserData(data);
      //console.log(data);
      //console.log("fand");
      if(!res.status===200){
        const error =new Error (res.error);
        throw error;
      }
    }
    catch(err){
      console.log(err);

    }
  }

  useEffect(()=>{
    callHomepage();
  },[]);
  
  return (
    <>
      <div className="home-page">
        <div className="home-div">
        
           <p className="pt-5">Welcome to home ,</p>
             <br></br>
             <h1 className="h1-home" > We Are MERN Developer
             <h1 className="h1name"> { userData.name}</h1>
             
             </h1>

        </div>
      </div>
      
    </>

  )
}
export default Home;
