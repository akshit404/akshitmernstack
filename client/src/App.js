import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Logout from "./components/Logout"

import "./App.css"
import "./login.css"
import "./contact.css"
import "./about.css"
import "./sinup.css"
import "./home.css"
import{Route,Switch} from "react-router-dom";
import Erorpage from './components/Erorpage';

 
function App() {
  return (
    <>
    
    <Navbar/>
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/about">
    <About/>
    </Route>
    <Route path="/login">
    <Login/>
    </Route>
    <Route path="/signup">
    <Signup/>
    </Route>
    <Route path="/contact">
    <Contact/>
    </Route>
    <Route path="/logout">
    <Logout/>
    </Route>
    
    <Route>
      <Erorpage/>
    </Route>
    </Switch>
    
      
    </>

  )
}
export default App;






