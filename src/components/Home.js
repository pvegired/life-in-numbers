import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import {auth , provider}  from '../firebase.js';
import { Redirect } from "react-router-dom";


const Home = () => {
  const { currentUser } = useContext(AuthContext);
    // Sign in with google
    const signin = () => {
      auth.signInWithPopup(provider).catch(alert);
  }
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className = "homecontainer">
      <img src={require("../images/todoimage.png")} alt="3d image for quantified todo" />
      <div id="divLogin" class="login_screen">
      <h3>Experience the Magic of Quantifiying your Day!</h3>
      <br></br>
      <br></br>
      {currentUser ? (
        <p>
          You are logged - <Link to="/dashboard">View Dashboard</Link>
        </p>
      ) : (
        <p>


          <div>
          <Link to="/login" className="homepagebutton">Log In</Link> 
          <br></br>
          <Link to="/signup" className="homepagebutton">Sign Up</Link> 
          </div>
          <br></br>
          <div>
          {<button onClick={signin} className="homepagebutton" id="specialbutton">Sign In with Google</button> }
          </div>
        </p>
      )}
      </div>
    </div>
  );
};

export default Home;