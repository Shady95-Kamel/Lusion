import React, { Fragment } from 'react'
import DataContext from './DataContext'
import'../Style/fifthH.css'

function FifthHome() {
  return (
    <Fragment>
      <DataContext.Consumer>
        {({fifthInfo})=>(
                  <div className='container mt-5'>
                  <div className='row'>
                      <div className='col-8'>
                      {fifthInfo.map(e=>(
                      <div key={e.id} style={{display:'inline-block'}}>
                          <img className='fifthImages' src={e.photo} alt="logo" />
                      </div>
                        ))}                    
                      </div>
                      <div className='col-4'>
                          <h1 className='fw-bold mt-5'>
                              Vintage 
                          </h1>
                          <h1 className='fw-bold'>
                              Style 
                          </h1>
                          <h4 className='mt-5 text-muted'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                          </h4>
                          <h1 className='pose fw-bold mt-5'>
                              #Lusiontheme
                          </h1>
                      </div>
                  </div>
              </div>  
        )}
        </DataContext.Consumer>
    </Fragment> 
  )
}

export default FifthHome