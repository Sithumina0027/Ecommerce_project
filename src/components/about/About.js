import React from 'react';
import './About.css'; 
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import image1 from '../../image/about/image1.jpg';
import image2 from '../../image/about/image2.jpg';
import image3 from '../../image/about/image3.jpg';

function About() {
  return (
    <>
      <Header />
      <Nav />
      <div className="about-container">
        <h1 className="about-title">About Us</h1>

        <p className="about-description">
          Welcome to Green Mart! We provide fresh, organic, and locally-sourced products to promote healthy living and sustainable practices. Our commitment is to deliver high-quality items directly to your doorstep with exceptional service.
        </p>

        <div className="about-images">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
        </div>

        <h2 className="about-section-title">Our Mission</h2>
        <p className="about-description">
          To make healthy and sustainable products accessible to everyone while supporting local farmers and promoting environmentally-friendly practices in our community.
        </p>

        <h2 className="about-section-title">Our Values</h2>
        <ul className="about-values">
          <li>Environmental Sustainability</li>
          <li>Community Support</li>
          <li>Product Quality</li>
          <li>Customer Care</li>
          <li>Transparency</li>
        </ul>

        <h2 className="about-section-title">Our Story</h2>
        <p className="about-description">
          Founded in 2020, Green Mart began with a simple idea: to connect consumers with local farmers and sustainable products. What started as a small operation has grown into Sri Lanka's trusted source for eco-friendly goods and fresh produce, serving thousands of customers nationwide.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
