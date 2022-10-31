import React, { Fragment } from 'react'
import DataContext from './DataContext'
import FourthHome from './FourthHome'
import ThirdHome from './ThirdHome'
import'../Style/thirdH.css'
import'../Style/secondH.css'

function SecondHome() {
  return (
    <Fragment>
      <DataContext.Consumer>
        {({secondInfo,thirdInfo})=>(
          <div className="container mt-5 ms-5">
          {secondInfo.map(e=>(
              <div key={e.id} style={{display:"inline-block"}}>
              <img className='secondImages' src={e.photo} alt="Logo" style={{width:"15.5pc"}} ></img>
              <h1 className='fw-bold'>{e.type}</h1>
              <h3>items {e.items}</h3>
            </div>  
          ))}
        <h1 className='mt-5 ms-5 fw-bold'>Best Selling</h1>
        <div className="thirdCard mt-3 ms-5">
          {thirdInfo.map(e=>(
            <ThirdHome
            key={e.id}
            data={e}/>
          ))}
          <div className="thirdPage">
         <h4 className='textRotate'>All Products</h4>
         </div>
        </div>
        </div>
        )}
        </DataContext.Consumer>
        <FourthHome/>
    </Fragment>
  )
}

export default SecondHome