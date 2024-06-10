import React from 'react';
import './Footer.css';
import { AiOutlineMail, AiOutlinePhone, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='row position-relative container m-auto'>
        <div className='footer-item col-12 col-md-6 col-lg-3'>
          <h2>Categories</h2>
          <p>Main Dishes</p>
          <p>Starters</p>
          <p>Desserts</p>
          <p>Drinks</p>
          <p>Sides</p>
        </div>
        <div className='footer-item col-12 col-md-6 col-lg-3'>
          <h2>Our Locations</h2>
          <p>Martian Street 345, 523369</p>
          <p>Red Planet Avenue 262, 654321</p>
          <p>Crater Boulevard 333, 987654</p>
        </div>
        <div className='footer-item col-12 col-md-6 col-lg-3'>
          <h2>Opening Hours:</h2>
          <p>Monday to Friday: 24Hrs</p>
          <p>Saturday: 24Hrs</p>
          <p>Sunday: Also 24Hrs</p>
        </div>
        <div className='footer-item col-12 col-md-6 col-lg-3'>
          <h2>Contact Us</h2>
          <p><AiOutlineMail /> contact@astraleats.com</p>
          <p><AiOutlinePhone /> 515269 5161 333225</p>
          <p>We will respond to you promptly.</p>
        </div>
        <div className='footer-item col-12'>
          <h2>Follow Us</h2>
          <div className='social-icons'>
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
