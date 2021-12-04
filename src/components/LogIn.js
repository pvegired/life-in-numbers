import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase.js";
import './LogIn.css';
import { Link } from "react-router-dom";

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
          <img src={require("../images/todoimage.png")} alt="3d image for quantified todo" />
          <div id="divLogin" className="login_screen">
            <h3>Experience the Magic of Quantifiying your Day!</h3>
              <div className="login-page">
            <div className="form">
              <h3>Log In</h3>
              {/* <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button className = "homepagebutton" type="submit">login</button>
                <p class="message">Not registered? <Link to="/signup">Create an account</Link></p>
              </form> */}
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