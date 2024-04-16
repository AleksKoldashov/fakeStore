import './carusel.css'
import React, { useEffect, useState, createContext } from "react";
import { Carousel } from 'antd';
import img1 from './img/electronics.jpg'
import img2 from './img/juvelir.jpg'
import img3 from './img/men.jpg'
import img4 from './img/woman.jpg'
import { NavLink } from 'react-router-dom';

const contentStyle = {
    margin: 0,
    height: '560px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


export default function Carusel(params) {
    const [cold, setCold] = useState(3)

      const onChange = (currentSlide) => {
    setCold(currentSlide);
  };
    console.log(cold);
    return(
        <Carousel 
        afterChange={onChange}
        autoplay={true}
        effect='fade'
        >
        <div>
          <h3 style={contentStyle}>
            <NavLink to={'/market/electronics'}><img src={img1} className='img' alt='Electro'/></NavLink>
            </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          <NavLink to={'/market/jewelery'} ><img src={img2}  className='img' alt='jewelery' /></NavLink>
            </h3>
        </div>
        <div>
          <h3 style={contentStyle} >
          <NavLink to={'/market/mens-clothing'}><img src={img3} className='img' alt='mens-clothing'/></NavLink>
            </h3>
        </div>
        <div>
          <h3 style={contentStyle} >
          <NavLink to={'/market/womens-clothing'}><img src={img4} className='img' alt='womens-clothing'/></NavLink>
            </h3>
        </div>
      </Carousel>
    )
}