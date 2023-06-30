import React from 'react';
import { Container,Row,col } from 'reactstrap';
import { popularMenuFood } from '../../assets/fake-data/product';
import ProductCart from '../product.cart'
import './popular-menu.css'

const PolularMenu = () => {
  return(
     <section className='pt-0'>
      <Container>
         <Row>
           <col lg ='12' className='mb-5'>
             <h2 className='popular_menu-title'>Popular Food Menu</h2>
             </col>
             {popularMenuFood.map((item) => (
                    <col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                        <ProductCart item={item}/>
                    </col>
                ))}
         </Row>
      </Container>
  </section>
  );
};

export default PolularMenu;
