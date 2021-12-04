import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase.js";
import './LogIn.css';
import { Link } from "react-router-dom";


// making sure that the email address and password provided are registered in our database
const LogIn = () => {
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
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }


  return (
    <div className = "homecontainer">
          {/* 3d mockup image of todo */}
          <img src={require("../images/todoimage.png")} alt="3d image for quantified todo" />
          <div id="divLogin" className="login_screen">
            <h3>Experience the Magic of Quantifiying your Day!</h3>
              <div className="login-page">
            <div className="form">
              <h3>Log In</h3>

              {/* Link to submit the details with handlesubmit taking to the login arrow function above */}

              <form onSubmit={handleSubmit}>
            <label for="email"></label>
            <input type="email" name="email" placeholder="Email" />
            <label for="password"></label>
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Log In</button>
            <p class="message">Not registered? <Link to="/signup">Create an account</Link></p>
      </form>

            </div>
          </div>
          </div>
          
    </div>
  );
};

export default LogIn;