import {React, useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/Eagan Bakery Shop Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){

const [isNavOpen, setIsNavOpen] = useState(false);

const [isModalOpen, setModalOpen] = useState(true);

const closeModal = () => {
  setModalOpen(false);
};

const toggleNav = () => {
  setIsNavOpen(!isNavOpen);
};

useEffect(() => {
  if (isNavOpen) {
    document.body.style.overflow = "hidden";
  }
  
  return () => {
    document.body.style.overflow = "visible";
  };
}, [isNavOpen]);

const closeNav = () => {
  setIsNavOpen(false);
};

    return(
        <div>
        {isModalOpen && (
            <div className='modal'>
              <p>These products are homemade and not subject to state inspection (home-based business). No shipping due to Cottage Food Laws.</p>
              <FontAwesomeIcon className='x-modal' onClick={closeModal} icon={faXmark} size='xl' style={{ color: "#111111" }} />
            </div>
            )}
                <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
                <NavLink to="/"><img className='logo' src={logo} alt='Bakery logo'/></NavLink>
                  <div className='hamburger' onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <ul className={`menu ${isNavOpen ? 'active' : ''}`}>
                    <li>
                      <NavLink to="/" activeclassname="active" onClick={closeNav}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/About" activeclassname="active" onClick={closeNav}>About Us</NavLink>
                    </li>
                    <li>
                     <NavLink to="/Order" activeclassname="active" onClick={closeNav}>Order Now</NavLink>
                    </li>
                  </ul>
                </nav>
                </div>
    )
}