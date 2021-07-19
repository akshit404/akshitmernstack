import React from 'react';
import akshitpic from "../images/akshit.jpeg";
import aboutpic from"../images/about.png";
import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";



function About() {
  const history =useHistory();
  const [userData,setUserData]=useState({});
  
  const callAboutpage = async()=>{
    try{
      const res = await fetch('/about',{
        method: 'GET',
        headers:{
        Accept:"appllication/json",
        "Content-Type":"application/json"
        },
        credentials:"include"


      });
      console.log("hine");
      const data = await res.json();
      console.log("gar");
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
      history.push("/login");

    }
  }

  useEffect(()=>{
    callAboutpage();
  },[]);
  


  return (
    <>
      <div className="container emp-profile " id="aboutbox">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img" >
                <img id="about-img" src={akshitpic} alt="akshit" />
              </div>


            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h3>{userData.name}</h3>
                <h6>Web devloper</h6>
                <p className="profile-rating mt-3 mb-5">RANKING  <span>6/10</span></p>
                <ul className="nav nav-tabs" role="tablist" >
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                  </li>
                  

                </ul>

              </div>

            </div>
            <div className=" col-md-2">
              <input type="submit" id="profile-edit-btnn" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />

            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>About Me</p><br />
                <p> I am a  mern devloper </p><br />
                <p>Skills :Web Devloper,Coder </p><br />
                <p>Backend : nodejs,django </p><br />



              </div>


            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className=" tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label > PROGRAMMING :       :</label>
                    </div>
                    <div className="col-md-6">
                      <p>cpp,python</p>

                    </div>


                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 ">
                    <label > NAME:</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.name}</p>

                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 ">
                    <label > DEGREE:</label>
                  </div>
                  <div className="col-md-6">
                    <p>btech cse</p>

                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 ">
                    <label > EMAIL:</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.email}</p>

                  </div>
                </div>
                <div className="row mt-3">
                  
                </div>





              </div>
            </div>



          </div>
        </form>
      </div>


    </>

  )
}
export default About;
