import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase";
import React, { useState, useRef, useEffect, useContext, Component } from "react";
import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";
import { nanoid } from 'nanoid';
import Timer from "./Timer.js";
import { getDatabase, ref, onValue, set } from 'firebase/database';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Maintenance from "./maintenance.js";
import Bareminimum from "./bareminimum.js";
import Exceed from "./exceed";
import Personal from "./personal";

// import {calendar} from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar} from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faCalendar} />

// class Like extends Component {
//   render() {
//     return <calendar />  
//   }
// }

// const calendaricon = <Like />




// const PERSONAL = [
//   { id: "todo-0", name: "Call David", completed: true },
//   { id: "todo-1", name: "Submit Registration Form", completed: false },
//   { id: "todo-2", name: "Meet Linda", completed: false }
// ];

// const MAINTENANCE = [
//   { id: "todo-0", name: "6 hrs of Sleep", completed: true },
//   { id: "todo-1", name: "40 mins of Exercise", completed: false },
//   { id: "todo-2", name: "15 mins of Meditation", completed: false }
// ];

// const BAREMINIMUM = [
//   { id: "todo-0", name: "Attend All Classes", completed: true },
//   { id: "todo-1", name: "3hrs of Assignments", completed: false },
//   { id: "todo-2", name: "1hr of Job Search Efforts", completed: false }
// ];

// const EXCEED = [
//   { id: "todo-0", name: "Publish a Blog", completed: true },
//   { id: "todo-1", name: "1 hr of Coursera", completed: false },
// ];

// const masterList = [PERSONAL, MAINTENANCE, BAREMINIMUM, EXCEED];

// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

// const FILTER_MAP = {
//   All: () => true,
//   Active: task => !task.completed,
//   Completed: task => task.completed
// };

// const FILTER_NAMES = Object.keys(FILTER_MAP);

const Dashboard = () =>  {

const [date, setDate] = useState(new Date());
const [scoreP, setScoreP] = useState(0);
const [scoreM, setScoreM] = useState(0);
const [scoreB, setScoreB] = useState(0);
const [scoreE, setScoreE] = useState(0);
const [finalScore, setFinalScore] = useState(0);

//const { count, setCount } = personal();
//onsole.log("count" +count);
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
/* onValue(reference, (snapshot) => {
    console.log(snapshot.val())
    snapshot.forEach(snapshot1 => {
      if (snapshot1.val().exists === true) {
        var id = snapshot1.val().percentage
        var score = Number(id)
        totalScore = totalScore + (25*score)
        console.log(score)
      }
      //setFinalScore(totalScore)
    });   
    setFinalScore(totalScore)
    handlescore(totalScore)
  
  });*/
}

function CalculatePersonalScore() {
  const db = getDatabase();
  var user = firebaseConfig.auth().currentUser
  var d = new Date();
  var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
  const reference = ref(db, 'users/' + user.uid +'/'+ datestring+ '/');

  onValue(reference, (snapshot) => {
    var highscore = 0;
    var totalpercentage = 0
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
    
    totalpercentage = totalpercentage + percentage
  });   
 highscore = Math.floor(totalpercentage/4);
 console.log("score " + highscore)
 setFinalScore(highscore)
  });
 
}
// const [tasks, setTasks] = useState(PERSONAL);
// // const [tasks, setTasks] = useState(masterList);
// const [filter, setFilter] = useState('All');

// function toggleTaskCompleted(id) {
//   const updatedTasks = tasks.map(task => {
//     // if this task has the same ID as the edited task
//     if (id === task.id) {
//       // use object spread to make a new obkect
//       // whose `completed` prop has been inverted
//       return {...task, completed: !task.completed}
//     }
//     return task;
//   });
//   setTasks(updatedTasks);
// }


// function deleteTask(id) {
//   const remainingTasks = tasks.filter(task => id !== task.id);
//   setTasks(remainingTasks);
// }


// function editTask(id, newName) {
//   const editedTaskList = tasks.map(task => {
//   // if this task has the same ID as the edited task
//     if (id === task.id) {
//       //
//       return {...task, name: newName}
//     }
//     return task;
//   });
//   setTasks(editedTaskList);
// }

// const taskList = tasks
// .filter(FILTER_MAP[filter])
// .map(task => (
//   <Todo
//     id={task.id}
//     name={task.name}
//     completed={task.completed}
//     key={task.id}
//     toggleTaskCompleted={toggleTaskCompleted}
//     deleteTask={deleteTask}
//     editTask={editTask}
//   />
// ));

// const filterList = FILTER_NAMES.map(name => (
//   <FilterButton
//     key={name}
//     name={name}
//     isPressed={name === filter}
//     setFilter={setFilter}
//   />
// ));

// const score = () => {
//   console.log(FILTER_MAP[1]);
//   console.log(((tasks.filter(FILTER_MAP[1])).length));
  // const score = ((((tasks.filter(FILTER_MAP[1])).length) / ((tasks.filter(FILTER_MAP[0])).length) * 100 ));



// function addTask(name) {
//   const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
//   setTasks([...tasks, newTask]);
// }


// const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
// const headingText = `${taskList.length} ${tasksNoun} remaining`;

// const listHeadingRef = useRef(null);
// const prevTaskLength = usePrevious(tasks.length);

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
        <h3>Est. time to finish remaining tasks - 04:30:16</h3>
        {/* <Timer /> */}
        {/* <h3>Time Left for today                                - 08:24:44 <Timer /></h3> */}

      </div>
      <div className="taskcontainer">
      
        {/* <section className="todoapp stack-large">
          <h1>Personal</h1>
        <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">
          {filterList}
        </div>
        <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
          {headingText}
        </h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </section> */}
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



