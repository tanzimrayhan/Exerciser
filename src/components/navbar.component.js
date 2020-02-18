import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { Nav,  Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


class Navigation extends Component {
    render() {
        return (
            
            // <nav className = "navbar-dark bg-dark navbar-expand-lg" >
            // <Link to="/" className="navbar-brand">Exerciser</Link>
            // <div className="collapse navbar-collapse">
            //     <ul className="navbar-nav mr-auto">
            //         <li className="navbar-item">
            //             <Link to="/" className="nav-link">Exercises</Link>
            //         </li>
            //         <li className="navbar-item">
            //             <Link to="/create" className="nav-link">Create Exercise Log</Link>
            //         </li>
            //         <li className="navbar-item">
            //             <Link to="/user" className="nav-link">Create User</Link>
            //         </li>
            //     </ul>
            // </div>
            // </nav >

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