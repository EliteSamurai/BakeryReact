import React from 'react';
import './';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Order from './components/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
      <div>
       <BrowserRouter>
          <div className='container'>
          <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Order" element={<Order />} />
            </Routes>
            <Footer />
          </div> 
       </BrowserRouter> 
      </div>
  )
}

export default App;
