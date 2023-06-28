import React from 'react';
import './product-card.css'

const ProductCart = (props) => {
    const {title,imgUrl,price} = props.item
  return (
    <div className='single_product'>
                            <div className='product_img'>
                                 <img src={imgUrl} alt='' className='w-100'/>
                            </div>
                               <div className='product_content'>
                                     <div className='rating'>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                     </div>
                                     <h6>{title}</h6>
                                     <div className='d-flex align-item-center justify-content-between'>
                                         <span className='price d-flex align-item-center'>price:$<span>{price}</span>
                                         </span>
                                         <span className='shopping_icon'><i class="ri-shopping-cart-line"></i></span>
                                     </div>
                               </div>
                        </div>
  )
}

export default ProductCart
