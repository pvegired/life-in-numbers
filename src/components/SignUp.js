import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../firebase.js";

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
      /*firebaseConfig.database().ref('users/'+email).set({
          email : email
      })*/

      if (currentUser) {

        return <Redirect to="/dashboard" />;
      }
    } catch (error) {
    }
  };
  if (currentUser) {
      return <Redirect to="/dashboard" />;
  }
 
  return (
    <div className = "homecontainer">
      <img src={require("../images/todoimage.png")} alt="3d image for quantified todo" />
          <div id="divLogin" className="login_screen">
            <h3>Signup for ultimate Todo Experience!</h3>
            <div className="login-page">
              <div className="form">
                  <h3>Create A New Account</h3>
                  
                  <form className="login-form" onSubmit={handleSubmit}>
                    <label for="email"></label>
                    <input type="email" name="email" placeholder="Email" />
                    <label for="password"></label>
                    <input type="password" name="password" placeholder="Password" />
                    <button className = "homepagebutton" type="submit">Register</button>
                  </form>


              </div> 
            </div>
          </div>
    </div>  
    
  );
};

export default SignUp