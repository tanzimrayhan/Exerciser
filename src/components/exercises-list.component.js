import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


class ExercisesList extends Component {
    render() {
        return (
            <div className="App" style={{ height: '100%' }}>
                <header className="App-header" >
                You are on exercise list page!
                </header>
            </div>
        )
    }
}

export default ExercisesList;