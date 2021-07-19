import React,{ useEffect, useState }from 'react';
import { useHistory} from "react-router-dom";





function Logout() {
const history=useHistory();
 useEffect(()=>{
    fetch('/logout',{
        method: 'GET',
        headers:{
        Accept:"appllication/json",
        "Content-Type":"application/json"
        },
        credentials:"include"
    }).then((res)=>{ 
        history.push('/login');
        if(res.status!==200){
            const error=new Error(res.error);
            throw error;
        }
    }).catch((err)=>{
        console.log(err);
    })


 });

  return (
    <>
     <h1>logout page</h1>
    </>

  )
}
export default Logout;
