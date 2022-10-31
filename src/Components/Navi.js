import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../Style/navBar.css"
import DataContext from './DataContext';


 function Navi(){

    return(
      <DataContext.Consumer>
        {({count})=>(
           <div className='row'>
              <Navbar bg="light" expand="lg">
              <Container>
                      <div className='col-4'>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                       <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="me-auto">
                          <Nav.Link href="#" className='fw-bold' as={NavLink} to="/">Home</Nav.Link>
                          <Nav.Link href="#" className='fw-bold' as={NavLink} to="/Shop">Shop</Nav.Link>
                           </Nav>
                            </Navbar.Collapse>
                      </div>
                <div className="col-6">
                  <h1 style={{fontFamily:"Athiti",fontSize:"50px"}} className="fw-bold">Lusion</h1>
                </div>
                <div className="position-relative col-2 ">
                  <NavLink to="/Cart" href="#" style={{color:"black"}}>
                  <FontAwesomeIcon icon={faBasketShopping} size="lg" />
                  </NavLink>
                  <span className='count position-absolute badge rounded-pill bg-dark' style={{bottom:"15px"}}>{count}</span>
                  </div>
                  </Container>
                  </Navbar>
                  </div>
                   )}
      </DataContext.Consumer>
    )
}
export default Navi;
