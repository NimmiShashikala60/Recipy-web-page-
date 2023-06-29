import React,{useState,useEffect} from 'react'
import { Container } from 'reactstrap'
import {ProductCart} from '../product.cart/ProductCart'
import {popularMenuFood,specialJuce} from '../../assets/fake-data/product'
import './menuPack.css'

const MenuPack = () => {
    const [filter,setFilter]=useState('RICE-MENU')
    const [products,setProducts]=useState(specialJuce)
    useEffect(()=>{
         if(filter === 'RICE-MENU'){
            setProducts(specialJuce)
    }
    if(filter === 'DESSERT'){
        setProducts(desSertProduct)
}
    },[])
        
    
  return <section>
      <Container>
         <col lg='12' className='text-center mb-4'><h3 className='menu_title'>Our Menu Pack</h3></col>
         <col lg='12' className='text-center mb-5'>
         <button className='filter-btn' onClick={()=>setFilter('FAST-FOOD')}>Fast Food</button>
         <button className='filter-btn active_btn' onClick={()=>setFilter('FAST-FOOD')}>Rice Menu</button>
         <button className='filter-btn' onClick={()=>setFilter('FAST-FOOD')}>Pizza</button>
         <button className='filter-btn' onClick={()=>setFilter('FAST-FOOD')}>Juce</button>
         <button className='filter-btn' onClick={()=>setFilter('FAST-FOOD')}>Desert</button>
         </col>
         {
            popularMenuFood.map(item =>(
                <col lg='3' key={item.id} className='mb-4'>
                {""}
                <ProductCart item={item}/></col>
                
            ))
         }
      </Container>
  </section>
       
}

export default MenuPack
