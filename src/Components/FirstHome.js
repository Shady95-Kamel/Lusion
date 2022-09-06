import React,{ useState } from 'react'
import LogoOne from "../Photos/logoOne.png"
import LogoTwo from '../Photos/logoTwo.png'
import Carousel from 'react-bootstrap/Carousel';
import '../Style/firstH.css'
import SecondHome from './SecondHome';

export default function FirstHome(){

    const [logoOne]=useState(LogoOne);
    const [logoTwo]=useState(LogoTwo);
    
    return (
    <div>
     <Carousel>
      <Carousel.Item >
        <img
          className="cover"
          src={logoOne}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="cover"
          src={logoTwo}
          alt="Second slide"
        />
      </Carousel.Item>
      </Carousel>

        <SecondHome />
     </div>
    )
}
