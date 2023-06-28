// import React, { Component, Fragment } from 'react'
import React, {Fragment} from "react";
import Header from '../../../components/Header/Header'
import HeroSlider from "../../Hero-Slider/HeroSlider";
// // export default class Home extends Component {
// //   render() {
// //     return (
// //       <div>
        
// //       </div>
// //     )
// //   }
// // }
const Home = ()=>{
  return( <Fragment>
      <Header/>
      <HeroSlider/>
  </Fragment>
  );
};
export default Home;

