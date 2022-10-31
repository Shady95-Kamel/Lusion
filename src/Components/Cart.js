import React, { Fragment } from 'react'
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import '../Style/cart.css'

function Cart(props) {
  // console.log(props.data);
  return (
    <Fragment>
             <Card className='mt-3'>
             <Card.Body className='cardSize'>
              <img className='imgSize' src={props.data.photo} alt="Logo"/>
              <h3>
                {props.data.type}
              </h3>
              <h3>
                ${props.data.price*props.data.buyQty}
              </h3>
              <h3 >
                x{props.data.buyQty}
              </h3>
          <button type='button'  className='Btn'>
          <FontAwesomeIcon icon={faPlus} size="lg" style={{color:"green"}} onClick={()=>props.inc(props.data.id)}/>
          </button>
          <button type='button' className='Btn'>
          <FontAwesomeIcon icon={faMinus} size="lg" style={{color:"	goldenrod"}} onClick={()=>props.dec(props.data.id)} />
          </button>
          <button type='button' className='Btn'>
          <FontAwesomeIcon icon={faTrash} size="lg" style={{color:"red"}} onClick={()=>props.del(props.data.id)} />
          </button>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default Cart