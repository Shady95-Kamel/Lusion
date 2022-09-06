import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom'
import "../Style/navBar.css"
import DataContext from './DataContext';


 function Navi(){

    return(
      <DataContext.Consumer>
        {({count})=>(
                  <div className='row'>
                  <div className=" navbar navbar-expand-lg shadow bg-light rounded">
                      <div className='container'>
                      <div className='col-6'>
                      <NavLink to="/" className="navbar-brand fw-bold" href="#">Home</NavLink>
                      <NavLink to="/Shop" className="navbar-brand fw-bold" href="#">Shop</NavLink>
                      </div>
                <div className="col-5">
                  <h1 style={{fontFamily:"Athiti",fontSize:"50px"}} className="fw-bold">Lusion</h1>
                </div>
                <div className='position-realtive col-1'>
                  <NavLink to="/Cart" href="#" style={{color:"black"}}>
                  <FontAwesomeIcon icon={faBasketShopping} size="lg" />
                  </NavLink>
                  <span className='position-absolute badge rounded-pill bg-dark' style={{top:"20px"}} >{count}</span>
                  </div>
                  </div>
                  </div>
                  </div>
                   )}
      </DataContext.Consumer>
    )
}
export default Navi;
