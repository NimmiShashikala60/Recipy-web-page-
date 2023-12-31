import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import {sliderData} from '../../assets/fake-data/slider'
import './slider.css'
const HeroSlider = () => {
  const settings = {
    infinity:true,
    speed:500,
    sliderToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplayspeed:3000
  }
  return( 
    <section>
       <Container>
          <Slider {...settings}>
             {sliderData.map(item=>(
          <div key={item.id}>
        <div className='slider_wrapper d-flex align-item-center justify-content-between pt-5'>
        <div className='slider_content w-50 ps-2'>
        <h2 className='mb-3'>{item.title}</h2>
        <p>{item.desc}</p>
        <button className='btn'>Explore Juce</button>
        </div>
           <div className='slider_img w-50'>
               <img src={item.imgUrl} alt='' className='w-100'/>
           </div>
        </div>
        </div>
    
        ))
  }
  </Slider>
  </Container>
  </section>
  );

};

export default HeroSlider;
