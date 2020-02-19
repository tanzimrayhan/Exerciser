import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";


class CreateExercise extends Component {
    constructor(props){
        super(props);

        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeDuration = this.onChangeDuration.bind(this);
        // this.onChangeDate = this.onChangeDate.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state={
            username:'',
            description:'',
            duration:'',
            date:new Date(),
            users:[]
        }
    }


    componentDidMount=()=>{
        this.setState({
            users:['test user'],
            username:'test user'
        })
    }

    onChangeUsername=(e)=>{
        this.setState({
            username:e.target.value,
        })
    }

    onChangeDescription=(e)=>{
        this.setState({
            description:e.target.value,
        })
    }

    onChangeDuration=(e)=>{
        this.setState({
            duration:e.target.value,
        })
    }

    onChangeDate=(date)=>{
        this.setState({
            date:date,
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const exercise={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }

        console.log(exercise);

        window.location='/';
    }

    render() {
        return (
            <div className="App" style={{ height: '100%' }}>
                <header className="App-header" >

                    You are on CreateExercise page!
                    
                    <div>
                    <br/>
                        <h3>Create New Exercise Log</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username: </label>
                                <select ref="userinput"
                                    required
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}>
                                    {
                                        this.state.users.map
                                    }
                                    </select>

                            </div>
                        </form>
                    </div>
                </header>
            </div>
        )
    }
}

export default CreateExercise;