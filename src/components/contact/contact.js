import React from 'react';
import { MdLocationOn, MdEmail, MdPhone, MdAccessTime } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css'; 
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';


const Contact = () => {
  return (

    <>
    <Header/>
    <Nav/>
    <section className="contact-section" id="contact">
      <h2 className="section-title1">Contact Us</h2>
      <div className="section-content">
        <ul className="contact-info-list">

          <li className="contact-info1">
            <MdLocationOn size={24} />
            <p>No 9 Dharmashrama mawatha, Borupana Rd, 10390</p>
          </li>
          <li className="contact-info1">
            <MdEmail size={24} />
            <p>speedcabsmatara@gmail.com</p>
          </li>
          <li className="contact-info1">
            <MdPhone size={24} />
            <p>075 409 1113</p>
          </li>
          <li className="contact-info1">
            <MdAccessTime size={24} />
            <p>Monday - Sunday 9:00 AM - 9:00 PM</p>
          </li>
          <li className="contact-info1">
            <FaWhatsapp size={24} />
            <p>WhatsApp Messages: +94 71 729 7519</p>
          </li>
        </ul>

        <form 
          action="https://api.web3forms.com/submit" 
          className="contact-form" 
          method="POST"
        >
       

          <input 
            type="hidden" 
            name="access_key" 
            value="9f3741a9-9997-499e-a8a5-99a6d2a473a3"
          />

       
          <input 
            type="text" 
            name="name" 
            placeholder="Your name" 
            className="form-input" 
            required 
          />

          <input 
            type="email" 
            name="email" 
            placeholder="Your email" 
            className="form-input" 
            required 
          />

          <textarea 
            name="message" 
            placeholder="Your message" 
            className="form-input" 
            required
          >

          </textarea>

  
  
          <button type="submit" className="button submit-button1">Submit</button>
        </form>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default Contact;
