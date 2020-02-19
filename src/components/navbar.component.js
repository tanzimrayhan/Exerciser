import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { Nav,  Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


class Navigation extends Component {
    render() {
        return (
          
            <Navbar bg="light" expand="lg">
     
        <Nav className="mr-auto">
          <Nav.Link ><Link to="/" style={{ color: "grey" }}>Home </Link></Nav.Link>
          <Nav.Link ><Link to="/create" style={{ color: "grey" }}>Create Exercises </Link></Nav.Link>
          <Nav.Link><Link to="/user" style={{color:"grey"}}>Create User</Link></Nav.Link>

         
        </Nav>

        
      
    </Navbar>



        )
}
}

export default Navigation;