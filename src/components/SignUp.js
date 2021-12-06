import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../firebase.js";
import {auth , provider}  from '../firebase.js';
import { Link } from "react-router-dom";

import LinkButton from "./LinkButton";
import Emoji from "./Emoji";

// adding email address and password provided to our database and when done then leading them to the dashboard
const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error){
        var errorMessage = error.message;
        window.alert(errorMessage);
      });      
      setCurrentUser(true);

      if (currentUser) {

        return <Redirect to="/dashboard" />;
      }
    } catch (error) {
    }
  };
    //redirecting to dashbaord only when we are sure that this user is in our database
  if (currentUser) {
      return <Redirect to="/dashboard" />;
  }

  const signin = () => {
      auth.signInWithPopup(provider).catch(alert);
  }
 
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
            <h2>Create a New Account!<Emoji symbol="✌️" label="peace"/></h2>
            <br></br>
                    <div className="form">

              <form className="login-form" onSubmit={handleSubmit}>
                    <label for="email"></label>
                    <input type="email" name="email" placeholder="Email" />
                    <label for="password"></label>
                    <input type="password" name="password" placeholder="Password" />
                    <button className = "homepagebutton" type="submit">Sign Up</button>
                    <p class="message">Have an account?  <Link to="/">LogIn</Link></p>
                  </form>



{/* 
                      <LinkButton to='/login' className="homepagebutton">Log In</LinkButton>
                      <LinkButton to='/signup'className="homepagebutton" id="specialbutton">Sign Up</LinkButton> */}
                      <LinkButton to='/login' onClick={signin} className="homepagebutton" id="specialbutton">Sign Up with Google</LinkButton>


                    </div>
                
            

          </div>
        </div>
        </div>
      </div>  
    </div>


    
    // <div className = "homecontainer">
    //   {/* 3d mockup image of todo */}
    //   <img src={require("../images/todoimage.png")} alt="3d image for quantified todo" />
    //       <div id="divLogin" className="login_screen">
    //         <h3>Signup for ultimate Todo Experience!</h3>
    //         <div className="login-page">
    //           <div className="form">
    //               <h3>Create A New Account</h3>

    //               {/* Link to submit the details with handlesubmit taking to the signup arrow function above */}

    //               <form className="login-form" onSubmit={handleSubmit}>
    //                 <label for="email"></label>
    //                 <input type="email" name="email" placeholder="Email" />
    //                 <label for="password"></label>
    //                 <input type="password" name="password" placeholder="Password" />
    //                 <button className = "homepagebutton" type="submit">Register</button>
    //               </form>


    //           </div> 
    //         </div>
    //       </div>
    // </div>  
    
  );
};

export default SignUp