import React, { Fragment,useState } from 'react'
import '../Style/shopOne.css'
import SecondShop from './SecondShop'
import shop1 from '../Photos/Shop1.jpg'

function FirstShop() {
  const[shopImg]=useState(shop1)
  return (
    <Fragment>
        <div className='shopLogo' style={{ backgroundImage: `url(${shopImg})` }}>
        <div className='d-flex flex-column justify-content-center' style={{height:"100vh"}}>
          <div className='firstShop'>
          <h1 className='text-center fw-bold display-1' >
               Shop
            </h1>
            <h4 className='shopText text-muted text-center'>
               Home
            </h4>
          </div>
          </div>
        </div>
        <SecondShop/>
    </Fragment>
  
  )
}

export default FirstShop