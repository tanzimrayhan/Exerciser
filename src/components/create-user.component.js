import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
            
        }

    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: this.state.username.trim(),
        }
        

        console.log(user);

        axios.post('https://exercizer.herokuapp.com/users/add',user).then(res=>{
            console.log(res);
            console.log(res.data);
            alert(user.username+" is added");
            window.location = '/';
        })
        this.setState({
            username:''
        }
        )

        //window.location = '/';
    }

    render() {
        return (
            <div className="App" style={{ height: '100%' }}>
                <header className="App-header" >
                    <div>
                        <h3> Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username: </label>
                                <input type="text"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create User" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>

                You are on CreateUser list page!
                </header>
            </div>
        )
    }
}

export default CreateUser;