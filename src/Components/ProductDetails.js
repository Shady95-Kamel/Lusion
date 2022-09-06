import React from 'react'
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom'

function ProductDetails() {
    const location=useLocation()
  return (
      <div className="d-flex justify-content-center mt-5 ">
          <Card style={{ width: '22rem'}}>
            <Card.Img variant="top" src={location.state.photo} />
            <Card.Body>
               <h3 className='fw-bold'>Type : {location.state.type}</h3>
              <h3 className='fw-bold'> Price : ${location.state.price}.00</h3>
              <h3 className='fw-bold'>Available : {location.state.invQty}</h3>
            </Card.Body>
          </Card>
      </div>
  )
}

export default ProductDetails