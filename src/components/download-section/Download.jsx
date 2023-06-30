import React from 'react'
import './download.css'
import appImg from '../../assets/images/mobile.jpg'
import { Container,Row,Col } from 'reactstrap'

const Download = () => {
  return (
     <section>
        <Container className='app_container'>
            <Row>
                <Col lg='6' md='6'>
                   <div className='app_img'>
                     <img src={appImg} alt=''></img>
                   </div>
                </Col>
                <Col lg='6' md='6'>
                   <div className='app_content'>
                       <h5>Download our app</h5>
                       <h2 className='mb-4'>Never Feel Hungry! Download Our Mobile App Order Delicious Juce</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                         <div className='app_btns d-flex align-item-center gap-5 mt-4'>
                            <button className='btn_apple d-flex align-item-center gap-3'>
                            <i class="ri-apple-line"></i><a href='#'>Apple Store</a>
                            </button>
                            <button className='btn_google d-flex align-item-center gap-3'>
                            <i class="ri-google-play-line"></i><a href='#'>Google Play</a>
                            </button>
                         </div>
                   </div>
                </Col>
            </Row>
        </Container>
     </section>
  )
}

export default Download
