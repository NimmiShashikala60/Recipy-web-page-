import React, { Component } from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About';
import Menu from '../pages/Menu';
import Contact from '../pages/Contact';
import Login from '../pages/Login';

export default class content extends Component {
  render() {
    return (
      <div>
      <Routes>
      <Route path="/home" element={ <Home/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
      </div>
    )
  }
}
