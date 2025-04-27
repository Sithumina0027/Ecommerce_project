import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail } from 'lucide-react';
import './footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
   
            
   
   
      <div className="footer-content">


     
     
        <div className="footer-column">
          <h3>Products</h3>
          <ul className="footer-links">
            <li><Link to="/allproduct">All Products</Link></li>
            <li><Link to="/vegifruits">Vegitebles & Fruits</Link></li>
            <li><Link to="/grocery">Grocery Products</Link></li>
          </ul>
        </div>


       
       
        <div className="footer-column">
          <h3>Website</h3>
          <ul className="footer-links">
            <li><Link to="/Terms">Terms & Conditions</Link></li>
            <li><Link to="/Return">Return Policy</Link></li>
            <li><Link to="/Terms">FAQ</Link></li>
          </ul>
        </div>


      
        <div className="footer-column">
          <h3>Company</h3>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li>
            <a href="https://maps.app.goo.gl/fpGDzCVwLWVHZ2UT7" target="_blank" rel="noopener noreferrer">
            Locations
          </a>
        </li>

            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        

       
        <div className="footer-column newsletter">
          <h3>Send your Request</h3>
          <p>Through this you can express your opinions instantly.</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="kamal@example.com" 
              className="newsletter-input"
            />
            <button className="newsletter-button">
              Submit
            </button>
          </div>
        </div>
      </div>


      <div className="top-bar">
        <div className="contact-info">
          <div className="contact-item">
            <Phone className="icon" size={20} />
            <span>075 409 1113</span>
          </div>
          <div className="contact-item">
            <Mail className="icon" size={20} />
            <span>info1@greenmart.lk</span>
          </div>
          </div>


   
           <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Instagram size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Youtube size={20} />
          </a>
        </div>
        </div>
</footer>
  );
};

export default Footer;