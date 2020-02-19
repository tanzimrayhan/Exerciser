import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

//Components
import Navigation from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/create-exercises.component';
import  CreateExercise from './components/create-exercises.component';
import CreateUser from './components/create-user.component'


function App() {
  return (
    <Router  >
      <div className="container"  style={{backgroundColor:"#1f1c47"}} >
      <Navigation />
      
      {/* <br /> */}
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
