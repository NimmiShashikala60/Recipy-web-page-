import React,{useRef} from 'react';
import '../Header.css';
import "remixicon/fonts/remixicon.css";
import { Container } from 'reactstrap'
import Home from '../pages/Home/Home';
// import {NavLink} from 'react-router-dom';

const navLinks =[
  {
    display:'Home',
    url:'#'
  },

  {
    display:'About',
    url:'#'
  },

  {
    display:'Menu',
    url:'#'
  },

  {
    display:'Contact',
    url:'#'
  },
]

const Header = () => {
  const menuRef=useRef()

  const menuToggle = () => menuRef.current.classList.toggle('active_menu')
  return
  <header className='header'>
  <Container>
      <div className='navigation'>
      <div className='logo'>
         <h2 className='d-flex align-items-center gap-5'>
         <span><i class="ri-restaurant-2-line"></i></span>{""} Chef Juce
         </h2>
      </div>
      <div className='nav_menu'  ref={menuRef}>
      <div className='nav_list_wrapper d-flex align-items-center justify-content-between'>
      <ul className='nav list'>
      {
        navLinks.map((item,index)=>(
          <li className='nav_item' key={index}>
          <a href={item.url} onClick={menuToggle}>{item.display}</a>
          </li>
        ))}
        </ul>
        
        <div className='menu_right'>
        <div className='custom_serach'>
        <input type='text' placeholder='serach item....' />
        <span><i class="ri-search-line" onClick={menuToggle}></i>
        </span>
        </div>
    </div>
        </div>
        </div>
        <div>

        <span className='cart_icon'>
        <i class="ri-shopping-cart-line"></i>
        <span className='badge'>2</span>
        </span>
        </div>
      // <li className='nav_item'><a href='#'>Home</a></li>
      

     

     
      <div className='mobile_menu'>
      <span ><i class="ri-menu-line"></i></span>
      </div>
      </div>
  </Container>
  </header>
}
export default Home;

// export default class header extends Component {
//   render() {
//     const activeLink = "border-b-2 cursor-pointer";
//     const normalLink = "cursor-pointer";
//     return (
//       <div className="bg-accent-navy-200 h-20 w-full text-white fixed top-0 p-4 z-10">
//       <div className="w-full h-full">
//         <div className="flex w-full h-full items-center">
//           <div className="w-1/2">
//             <h1 className="font-babylonica">MyFeed.com</h1>
//           </div>
//           <div className="w-1/2">
//           <nav className="flex w-full justify-between items-center font-heading">
//             <NavLink
//               to={"/home"}
//               className={({ isActive }) =>
//                 isActive ? activeLink : normalLink
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to={"/about"}
//               className={({ isActive }) =>
//                 isActive ? activeLink : normalLink
//               }
//             >
//               About
//             </NavLink>
//             <NavLink
//               to={"/contact"}
//               className={({ isActive }) =>
//                 isActive ? activeLink : normalLink
//               }
//             >
//               Contact
//               </NavLink>
//             <NavLink to={"/"} className="cursor-pointer">
//               <LogoutIcon />
//             </NavLink>
//           </nav>
//         </div>
//       </div>
//     </div>
//   </div>
// );

  

