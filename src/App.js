import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

//Components
import Navbar from './components/navbar.component';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <br /> */}
      {/* <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} /> */}
      <div className="App">
        <header className="App-header">
          Hello World!
      </header>
      </div>
    </Router>
  );
}

export default App;
