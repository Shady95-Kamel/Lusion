import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


export default function ThirdHome(props) {
  const navigate=useNavigate();
  const direct=()=>{
    navigate('/ProductDetails',{state:props.data})
  }
  return (
    <Fragment>
            <Card  className=" thirdInfo mt-3 ms-5" style={{ width: '18rem' ,display:"inline-block", border:"0",}}>
            <Card.Img variant="top" src={props.data.photo} />
            <Card.Body>
             <div className='row'>
               <div className='col-9'>
               <h6 className='text-secondary'>
                 {props.data.type}
              </h6>
              <h3 className='fw-bold'> ${props.data.price}.00</h3>
               </div>
              <div className='col-2 mt-4'>
              <button type='button' style={{border:"none",background:"white"}} onClick={direct} >
                     <FontAwesomeIcon icon={faEye} size="lg" />
              </button>
              </div>
              </div>
            </Card.Body>
          </Card>
      </Fragment>
  )
}
