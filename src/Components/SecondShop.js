import React from 'react'
import Card from 'react-bootstrap/Card';
import '../Style/shopTwo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import DataContext from './DataContext';


function SecondShop() {
  return (
    <DataContext.Consumer>
      {({shopData,addToCart})=>(
            <div className='container' >
            {shopData.map(e=>(
            <Card  className="cardWidth mt-5 ms-4" key={e.id} style={{ width: '18rem' ,display:"inline-block", border:"0",}}>
              <Card.Img variant="top" src={e.photo} />
                  <Card.Body>
                    <div className='row'>
                        <div className='col-9'>
                        <h6 className='text-muted'>
                             {e.type}
                       </h6>
                         <h3 className='fw-bold'> ${e.price}.00</h3>
                        </div>
                        <div className='col-3 mt-5'>
                        <button type='button' className="cartBtn btn btn-outline-dark fw-bold " onClick={()=>addToCart(e.id)} >
                        <FontAwesomeIcon icon={faBasketShopping} size="lg" />
                         </button>
                        </div>
                    </div>
                  </Card.Body>
             </Card>
            ))}
        </div>
      )}
    </DataContext.Consumer>
  )
}

export default SecondShop