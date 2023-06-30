import React from 'react'
import { Container, Row } from 'reactstrap'
import './choose-Us.css'
import fruitImg  from '../../assets/images/fresh-fruit-smoothie.jpg';

const ChooseUs = () => {
  return <section>
      <Container>
         <Row>
           <col lg='6' md='6'>
              <img src={fruitImg} alt='' className='w-100'/>
           </col>
             <col lg='6' md='6'>
               <div className='choose_content'>
                 <h4>Who we are?</h4>
                 <h2>Take a look at the benefits we offer you</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                 sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
                 <div className='features mt-4'>
                 <div className='feature1 d-flex align-items-center gap-5'>
                 <div className='single_feature'>
                 <span><i class="ri-truck-line"></i></span>
                 <h6>Free Home Delivery</h6>
                 <p>Lorem Lorem ipsum dolor sit amet </p>
                 </div>

                 <div className='single_feature'>
                 <span className='feature_icon-two'><i class="ri-exchange-dollar-line"></i></span>
                 <h6>Return & Refunt</h6>
                 <p>Lorem Lorem ipsum dolor sit amet </p>
                  </div>
                    </div>
                    <div className='feature1 mt-3 d-flex align-items-center gap-5'>
                 <div className='single_feature'>
                 <span className='feature_icon-3'><i class="ri-secure-payment-fill"></i></span>
                 <h6>Secure Payment</h6>
                 <p>Lorem Lorem ipsum dolor sit amet </p>
                 </div>

                 <div className='single_feature'>
                 <span className='feature_icon-4'><i class="ri-24-hours-line"></i></span>
                 <h6>24/7 Hours Support</h6>
                 <p>Lorem Lorem ipsum dolor sit amet </p>
                  </div>
                    </div>
                      </div>
             </col>
         </Row>
      </Container>
  </section>
  

};

export default ChooseUs;
