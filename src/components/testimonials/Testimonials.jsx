import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import './testimonials.css'
import TestingImg from '../../assets/images/testing.jpg'
import Slider from 'react-slick'

const testimonials = () => {
    const settings={
        infinite:true,
        speed:500,
        slideToShow:1,
        slideToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,

    }
  return (
        <section>
          <Container>
             <Row>
                <Col lg='8' sm='12' md='12' className='m-auto'>
                      <div className='slider__wrapper d-flex align-item-center gap-5'>
                         <div className='slider__content w-50'>
                         <h2 className='mb-4'>What our Customers are saying</h2>
                         <Slider {...settings}>
                            <div>
                              <div className='single_testimonials'>
                                  <p className='review_content'>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                   sunt in culpa qui officia deserunt mollit anim id est laborum.
                                  </p>
                                  <h6>Jone Dem</h6>
                                  <p>Web Developer</p>
                              </div>
                            </div>
  
                            <div>
                            <div className='single_testimonials'>
                                <p className='review_content'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                 sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <h6>Jone Dem</h6>
                                <p>Web Developer</p>
                            </div>
                          </div>
  
                          <div>
                              <div className='single_testimonials'>
                                  <p className='review_content'>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                   sunt in culpa qui officia deserunt mollit anim id est laborum.
                                  </p>
                                  <h6>Jone Dem</h6>
                                  <p>Web Developer</p>
                              </div>
                            </div>
                       </Slider>
                       </div>
                         <div className='slider__img w-50'></div>
                         <img src={TestingImg} alt='' className='w-100'/>
                       </div>
                </Col>
             </Row>
          </Container>
        </section>
  )
}

export default testimonials
