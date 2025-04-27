import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

function Return() {
  return (
    <>
      <Header />
      <Nav />
      <div className="about-container">
        <h1 className="about-title">Return Policy</h1>

        <p className="about-description">
        At Green Mart Online, we are dedicated to crafting an exceptional online shopping experience that is seamless and enjoyable for our customers, ensuring they return to shop with us and utilize our services repeatedly. We do recognize, though, that occasionally, you might inadvertently order the wrong items or receive damaged or unusable products. In such cases, kindly follow the instructions and adhere to the specified conditions outlined below. Feel free to reach out to us with the relevant details via email at info@greenmart.lk or call us at 0768652468, and our team will gladly assist you.
        </p>
        

        <h2 className="about-section-title">How can you get a refund</h2>
        <p className="about-description">
        Rest assured, we are committed to providing you with a seamless refund process if you decide to cancel your order before it is dispatched from our warehouse. Your eligible refund will be promptly credited to your chosen payment method within 3 days of your cancellation.
        </p>

       
        <h2 className="about-section-title">How can you return a item</h2>
        <p className="about-description">
        No need to be concerned. If you wish to return a damaged or unusable item to our delivery agent, we strongly advise conducting a quality check when receiving goods from our delivery partners. In case you identify any issues after the delivery, please get in touch with our customer support team within 2 hours of receiving your order.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Return;
