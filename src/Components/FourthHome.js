import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import banner from '../Photos/f1.png'
import'../Style/fourthH.css'
import FifthHome from './FifthHome'


function FourthHome() {

    const[fourthPhoto]=useState(banner)

  return (
    <Fragment>
    <div className='container mt-5'>
        <div className='row'>
        <div  className="banner col-6" style={{ backgroundImage: `url(${fourthPhoto})` }}>
            <div className='d-flex flex-column justify-content-center' style={{height:"100vh"}}>
            <h1 className='text-center display-1' >
                MERRY
            </h1>
            <h1 className='text-center display-1 fw-bold' >
                Christmas 40% Off
            </h1>
            <div className='d-flex justify-content-center'>
                <NavLink to="/Shop" type="button" className="btn btn-outline-dark fw-bold">Shop Now</NavLink>
            </div>
            </div>
        </div>
        <div className='secondBanner col-6 ms-5'>
        <h1 className='text-center display-2' >
              Your Next
            </h1>
            <h1 className='text-center display-1 fw-bold' >
                Purchase 10% Off
            </h1>
            <div className='d-flex justify-content-center'>
                <NavLink to="/Shop" type="button" className="btn btn-outline-dark fw-bold">Shop Now</NavLink>
            </div>
        </div>
        </div>
    </div>
    <FifthHome/>
    </Fragment>
  )
}

export default FourthHome
