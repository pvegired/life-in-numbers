import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import {auth , provider}  from '../firebase.js';
import { Redirect } from "react-router-dom";

import LinkButton from "./LinkButton";
import Emoji from "./Emoji";


import firebaseConfig from "../firebase.js";

// import './LogIn.css';




// //primary code for homepage of where the user enters the app for first time

// const Home = () => {
//   const { currentUser } = useContext(AuthContext);
//     // Sign in with google
//     const signin = () => {
//       auth.signInWithPopup(provider).catch(alert);
//   }
//   //redirecting to dashbaord only when we are sure that this user is in our database
//   if (currentUser) {
//     return <Redirect to="/dashboard" />;
//   }

// making sure that the email address and password provided are registered in our database
const LogIn = () => {

  const { currentUser } = useContext(AuthContext);
    // Sign in with google
    const signin = () => {
      auth.signInWithPopup(provider).catch(alert);
  }
  //redirecting to dashbaord only when we are sure that this user is in our database
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }


  const handleSubmit = (e) => {
    
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
        var errorMessage = error.message;
        window.alert(errorMessage);
      });
    } catch (error) {
    }
  };
  // const { currentUser } = useContext(AuthContext);
  // if (currentUser) {
  //   return <Redirect to="/dashboard" />;
  // } 






  return (
    // <div className = "homecontainer">
    <div className = "row no-gutters">
      <div class ="col md-6 no-gutters">
        <div className = "leftside d-flex justify-content-center align-items-center">
          <img src={require("../images/todoimage.png")} alt="3d image for quantified todo" />
          <br></br>
          <br></br>
          <h1>Experience the Magic <br></br> of Quantifiying your Day!</h1>
        </div>
      </div>

      <div class ="col md-6 no-gutters" id="divlogin">
        <div className = "rightside d-flex justify-content-center align-items-center ">
          <div className = "solidborder">
          <div>
            <h2>Log In!<Emoji symbol="✌️" label="peace"/></h2>
            <br></br>
                    <div className="form">

                      <form onSubmit={handleSubmit}>
                        <label for="email"></label>
                        <input type="email" name="email" placeholder="Email" />
                        <label for="password"></label>
                        <input type="password" name="password" placeholder="Password" />
                        <button type="submit">Log In</button>
                        <p class="message">Not registered? <Link to="/signup">Create an account</Link></p>
                      </form>



{/* 
                      <LinkButton to='/login' className="homepagebutton">Log In</LinkButton>
                      <LinkButton to='/signup'className="homepagebutton" id="specialbutton">Sign Up</LinkButton> */}
                      <LinkButton onClick={signin} className="homepagebutton" id="specialbutton">Sign In with Google</LinkButton>


                    </div>
                
            

          </div>
        </div>
        </div>
      </div>  
    </div>
    // </div>
  );
};

export default LogIn;