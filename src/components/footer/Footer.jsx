import React from 'react';
import React from 'react';
import './footer.css';
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap';

const footerQuickLinks =[
    {
        display:'Terms & Conditions',
        url:"#"
    },
    {
        display:'Privancy Policy',
        url:"#"
    },
    {
        display:'Return & Refund',
        url:"#"
    },
    {
        display:'Payment Method',
        url:"#"
    },
]
const footerLinks =[
    {
        display:'About Us',
        url:"#"
    },
    {
        display:'Menu',
        url:"#"
    },
    {
        display:'Recipes',
        url:"#"
    },
    {
        display:'Contact',
        url:"#"
    },
]

const Footer = () => {
  return( <footer className='footer'>
      <div className='footer_top'>
          <Container>
             <Row>
                <Col lg='3' md='4' sm='6'>
                <div className='logo'>
                <h2 className='d-flex align-items-center gap-1 mb-4'>
                <span><i class="ri-restaurant-2-line"></i></span>{""} Chef Juce
                </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
                </Col>
                <Col lg='2' md='4' sm='6'>
                   <h5 className='footer_link-title'>
                       Info Link
                   </h5>
                   <ListGroup>
                      {
                        footerQuickLinks.map((item,index)=><ListGroupItem key={index} className='link_item'>
                        <a href={item.url}>{item.display}</a>
                     </ListGroupItem>
                        )
                      }
                     
                   </ListGroup>
                </Col>

                <Col lg='2' md='4' sm='6'>
                   <h5 className='footer_link-title'>
                       Quick Link
                   </h5>
                   <ListGroup>
                      {
                        footerLinks.map((item,index)=><ListGroupItem key={index} className='link_item'>
                        <a href={item.url}>{item.display}</a>
                     </ListGroupItem>
                        )
                      }
                     
                   </ListGroup>
                </Col>
                <Col lg='2' md='4' sm='6'>
                <h5 className='footer_link-title'>
                Contact
            </h5>
              <ListGroup>
                 <ListGroupItem className='link_item d-flex align-item-center gap-3'><i class="ri-map-pin-line"></i>Sri Lanka,India{""}</ListGroupItem>
              </ListGroup>
              <ListGroup>
                 <ListGroupItem className='link_item d-flex align-item-center gap-3'><i class="ri-mail-line"></i>example@gmail.com{""}</ListGroupItem>
              </ListGroup>
              <ListGroup>
                 <ListGroupItem className='link_item d-flex align-item-center gap-3'><i class="ri-phone-line"></i>+94 766433517{""}</ListGroupItem>
              </ListGroup>
                </Col>
             </Row>
          </Container>
      </div>
      <div className='footer_bottom'>
         <Container>
            <Row>
               <Col lg='12'>
                   <p>copyright 2023,developed by nimmi. All rights reserved</p>
               </Col>
            </Row>
         </Container>
      </div>
  </footer>
 );
};

export default Footer
