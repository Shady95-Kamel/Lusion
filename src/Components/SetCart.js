import React, { Fragment } from 'react'
import Cart from './Cart'
import DataContext from './DataContext'

function SetCart() {
  return (
    <DataContext.Consumer>
      {({cart,inc,dec,del,totalCartPrice})=>(
        <Fragment>
        {cart.length === 0?(
             <h1 bg="danger" className="text-center text-danger mt-5">
             Your Cart Is Empty
              </h1>
        ):(
            ""
        )}
        {cart.map(e=>(
            <Cart 
            key={e.id}
            data={e} 
            inc={inc}
            dec={dec}
            del={del}/>
        ))}
    </Fragment>
      )}
    </DataContext.Consumer>  
  )
}

export default SetCart