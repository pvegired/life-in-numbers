import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase";
import React, { useState, useRef, useEffect, useContext, Component } from "react";
// import Form from "./Form";
// import FilterButton from "./FilterButton";
// import Todo from "./Todo";
// import { nanoid } from 'nanoid';
import Timer from "./Timer.js";
import { getDatabase, ref, onValue, set } from 'firebase/database';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Maintenance from "./maintenance.js";
import Bareminimum from "./bareminimum.js";
import Exceed from "./exceed";
import Personal from "./personal";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar} from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faCalendar} />



const Dashboard = () =>  {

const [date, setDate] = useState(new Date());
const [scoreP, setScoreP] = useState(0);
const [scoreM, setScoreM] = useState(0);
const [scoreB, setScoreB] = useState(0);
const [scoreE, setScoreE] = useState(0);
const [finalScore, setFinalScore] = useState(0);


let personal = 0;
const handlescore = (score) => {
  let a = (score/100)
  setFinalScore(Math.floor(a))
} 

const BasicEffect = () => {


  return <div>
    <p> Look at the title of the current tab in your browser </p>
  </div>
}

function Datemagic() {
  const datepicker = <DatePicker
  selected={date} 
  onChange={date => {
    setDate(date)
  }} />;

  let newDate = date;
  console.log(newDate)
  var datestring = newDate.getDate() + "-" + (newDate.getMonth()+1) + "-" + newDate.getFullYear();
  return datepicker;
}

function GetAverageScoreForDay() {
  const db = getDatabase();
  var user = firebaseConfig.auth().currentUser
  var d = new Date();
  var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
  var i = 0;
  var totalScore = 0;
  var reference = ref(db, 'users/' + user.uid +'/'+ datestring+ '/score/');
  console.log("hiii")
  CalculatePersonalScore();
}

function CalculatePersonalScore() {
  const db = getDatabase();
  var user = firebaseConfig.auth().currentUser
  var d = new Date();
  var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
  const reference = ref(db, 'users/' + user.uid +'/'+ datestring+ '/');

  onValue(reference, (snapshot) => {
    var highscore = 0;
    var totalpercentage = 0;
    snapshot.forEach(snapshot1 => {
      var completedTasks = 0;
      var totalTaskCount = 0 ;
      var percentage = 0;
      snapshot1.forEach(snapshot2 => {
      var id = snapshot2.val().todoid
      var todoid = String(id)
      const completed = snapshot2.val().completed
     
      if (todoid.includes("todo") === true) {
        if (completed === true) {
          completedTasks++
        }
        totalTaskCount++
      }
    });
    var per = 0
   
    if (totalTaskCount > 0) {
      per = (completedTasks/totalTaskCount) * 100
      percentage = Math.floor(per)
    }
    
    totalpercentage = totalpercentage + percentage;

  });   
 highscore = Math.floor(totalpercentage/4);
 console.log("score " + highscore)
 setFinalScore(highscore)
  });
 
}

 useEffect(() => {
 CalculatePersonalScore()
; }, []);

const { currentUser } = useContext(AuthContext);
if (!currentUser) {
  return <Redirect to="/" />;
}
console.log(date)
return (
    <div className="container">

      {/* html for logo and navigation options */}
      <div className = "navigation">
          <div>
              <a id="logo">Day Quantifier</a>
          </div>
          <nav>
          <ul className = "navlist">
              <li><a>To do</a></li>
              <li><a>Insights</a></li>
              <li><a onClick={() => firebaseConfig.auth().signOut()}>Sign Out</a></li>
          </ul>
          </nav>
      </div>
      {/* html for body text */}
      <div className="text">
        {element}
        
        <p><strong>Date:</strong></p>
         {Datemagic()}
       
        <br></br>
        <br></br>
        <br></br>
        <h1>Your Current score for the day is {finalScore}/100</h1>
        <br></br>
        <h3>Est. time to finish remaining tasks - 00:00:00</h3>
        <Timer />
      </div>

      {/* html for Task or todo containers */}
      <div className="taskcontainer">
      <Personal />
      <Maintenance />
      <Bareminimum />
      <Exceed />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Developed With Music and Love by Pradeep</p>
      <br></br>
      <br></br>
      <br></br>
  </div>
  );
}

export default Dashboard;



