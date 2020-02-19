import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { Nav } from 'react-bootstrap'


class Navigation extends Component {
    render() {
        return (

            <header className="hamburger" >

            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>

                <Nav className="mr-auto">
                    <Nav.Link ><Link to="/" style={{ color: "grey" }}>Home </Link></Nav.Link>
                    <Nav.Link ><Link to="/create" style={{ color: "grey" }}>Create Exercises </Link></Nav.Link>
                    <Nav.Link><Link to="/user" style={{ color: "grey" }}>Create User</Link></Nav.Link>


                </Nav>

            </nav>

            
            </header>



        )
    }
}

export default Navigation;