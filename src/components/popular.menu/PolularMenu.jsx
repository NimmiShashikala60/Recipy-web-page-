import React from 'react';
import { Container,Row,col } from 'reactstrap';
import { popularMenuFood } from '../../assets/fake-data/product';
import StarIcon from '@mui/icons-material/Star';

const PolularMenu = () => {
  return <section>
      <Container>
         <Row>
           <col lg ='12' className='mb-5'>
             <h2>Popular Food Menu</h2>
             </col>
             {
                popularMenuFood.map(item=>(
                    <col lg='3' key={item.id}>
                        <div className='single_product'>
                            <div className='product_img'>
                                 <img src={item.imgUrl} alt=''/>
                            </div>
                               <div className='product_content'>
                                     <div className='rating'>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                     </div>
                                     <h6>{item.title}</h6>
                                     <div className='d-flex align-item-center justify-content-between'></div>
                               </div>
                        </div>
                    </col>
                ))
             }
         </Row>
      </Container>
  </section>
    
  
};

export default PolularMenu
