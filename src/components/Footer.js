import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/Eagan Bakery Shop Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <footer>
        <a href="/"><img className='logo' src={logo} alt='Bakery logo'/></a>

        <section>
          <div className="footer-links">
              <Link to="/">Home</Link>
              <Link style={{marginLeft: "1rem", }} to="/About">About</Link>
              <Link style={{marginLeft: "1rem", }} to="/Order">Order Now</Link>
          </div>

          <div className="social-media">
              <a href="https://www.instagram.com/ummyahyabakery/"><FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#fff", }} /></a>
              <a href="mailto:omar.aden2324@gmail.com"><FontAwesomeIcon icon={faGoogle} size="xl" style={{color: "#fff", }} /></a>
              <a href="https://www.youtube.com/@UmmYahyaKitchen"><FontAwesomeIcon icon={faYoutube} size="xl" style={{color: "#fff",}} /></a>
          </div>
          <p className="copyright"><FontAwesomeIcon icon={faCopyright} size="2xs"/>Umm Yahya Bakery. All Rights Reserved.</p>
          <p>Made by <a className="plug" href="https://www.omaraden.tech/">Omar Aden</a></p>
        </section>
        </footer>
    )
}