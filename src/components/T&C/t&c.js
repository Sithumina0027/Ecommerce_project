/*import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./terms.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

import tc1 from '../image/terms/tc1.jpg';
import tc2 from '../image/terms/tc2.jpg';
import tc3 from '../image/terms/tc3.jpg';
import tc4 from '../image/terms/tc4.jpg';
import tc5 from '../image/terms/tc5.jpg';
import tc6 from '../image/terms/tc6.jpg';
import tc7 from '../image/terms/tc7.jpg';

const termsData = [
  {
    image: "images/tc1.jpg",
    title: "Client Responsibility for Content",
    feedback:
      "The client assumes full responsibility for the legality and authenticity of the content provided for marketing.",
  },
  {
    image: "images/tc2.jpg",
    title: "Third-Party Access and Misuse",
    feedback:
      "The client agrees not to share account access or marketing materials with unauthorized third parties.",
  },
  {
    image: "images/tc3.jpg",
    title: "Accuracy of Information",
    feedback:
      "The client agrees to provide accurate business details, including contact information, product details, and licensing (if applicable).",
  },
  {
    image: "images/tc4.jpg",
    title: "Payment and Service Coverage",
    feedback:
      "The client agrees to pay all service fees in full as per the selected package. In case of delayed payment, services may be paused or terminated.",
  },
  {
    image: "images/tc5.jpg",
    title: "Performance Disclaimer",
    feedback:
      "The company does not guarantee specific outcomes (such as sales increases or follower growth) and is not liable for any business loss resulting from the marketing campaign.",
  },
  {
    image: "images/tc6.jpg",
    title: "System Downtime or Delays",
    feedback:
      "The company is not responsible for interruptions due to technical failures, server issues, or third-party platform downtimes.",
  },
  {
    image: "images/tc7.jpg",
    title: "Refunds and Disputes",
    feedback:
      "Any refunds will only be processed after a thorough review of service records. Deductions may be applied for completed work or incurred platform costs.",
  },
];

const TermsAndConditions = () => {
  return (
    <>
   <Header />
   <Nav />
    <section className="testimonials-section2" id="testimonials">
      <h2 className="section-title2">Terms & Condition</h2>
      <div className="section-content2">
        <div className="slider-container2">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper"
          >
            {termsData.map((term, index) => (
              <SwiperSlide key={index}>
                <li className="testimonial swiper-slide">
                  <img src={term.image} alt="User" className="user-image" />
                  <h3 className="name">{term.title}</h3>
                  <i className="feedback">"{term.feedback}"</i>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default TermsAndConditions;*/

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./terms.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

import tc1 from '../../image/terms/tc1.jpg';
import tc2 from '../../image/terms/tc2.jpg';
import tc3 from '../../image/terms/tc3.jpg';
import tc4 from '../../image/terms/tc4.jpg';
import tc5 from '../../image/terms/tc5.jpg';
import tc6 from '../../image/terms/tc6.jpg';
import tc7 from '../../image/terms/tc7.jpg';


const termsData = [
  {
    image: tc1,
    title: "Client Responsibility for Content",
    feedback:
      "The client assumes full responsibility for the legality and authenticity of the content provided for marketing.",
  },
  {
    image: tc2,
    title: "Third-Party Access and Misuse",
    feedback:
      "The client agrees not to share account access or marketing materials with unauthorized third parties.",
  },
  {
    image: tc3,
    title: "Accuracy of Information",
    feedback:
      "The client agrees to provide accurate business details, including contact information and product details.",
  },
  {
    image: tc4,
    title: "Payment and Service Coverage",
    feedback:
      "The client agrees to pay all service fees as per the package. Delays may pause or cancel the service.",
  },
  {
    image: tc5,
    title: "Performance Disclaimer",
    feedback:
      "We do not guarantee specific results and are not liable for any business loss from the marketing campaign.",
  },
  {
    image: tc6,
    title: "System Downtime or Delays",
    feedback:
      "We are not responsible for issues due to technical failures, server downtime, or third-party platforms.",
  },
  {
    image: tc7,
    title: "Refunds and Disputes",
    feedback:
      "Refunds will be processed after reviewing service records. Deductions apply for completed work or costs.",
  },
];

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <Nav />
      <section className="testimonials-section2" id="testimonials2">
        <h2 className="section-title2">Terms & Conditions</h2>
        <div className="section-content2">
          <div className="slider-container2">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="mySwiper"
            >
              {termsData.map((term, index) => (
                <SwiperSlide key={index}>
                  <li className="testimonial swiper-slide">
                    <img src={term.image} alt={term.title} className="user-image" />
                    <h3 className="name">{term.title}</h3>
                    <i className="feedback">"{term.feedback}"</i>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
