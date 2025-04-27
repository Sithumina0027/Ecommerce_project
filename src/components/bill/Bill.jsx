import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Receipt.css";
import Footer from "../footer/Footer";
import Header from '../header/Header';

const Receipt = () => {
  const navigate = useNavigate();

  const items = [
    { name: "MD Orange Cordial 750ml", qty: 1, price: 850.0 },
    { name: "Araliya Rice White Nadu 5Kg", qty: 2, price: 1100.0 },
    { name: "Tiara Sponge Layer Cake Vanilla", qty: 1, price: 550.0 },
  ];

  const subTotal = items
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  const [transactionTime] = useState(new Date());

  const handlePay = () => {
    
    navigate("/payment");
  };

  const handleBack = () => {
    
    navigate(-1); 
  };

  return (
    <>
    <Header/>
      <div className="receipt-container">
        <div className="receipt-header">Green Market</div>
        <div className="receipt-subheader">
          Phone Number: 075 409 1113<br />
          Address: No 9 Dharmashrama Mawatha, Borupana Rd, 10390
        </div>

        <hr className="receipt-divider" />

        <div className="receipt-row">
          <span>Date:</span>{" "}
          <span>{transactionTime.toLocaleDateString()}</span>
        </div>
        <div className="receipt-row">
          <span>Time:</span>{" "}
          <span>{transactionTime.toLocaleTimeString()}</span>
        </div>

        <hr className="receipt-divider" />

        <div className="receipt-row receipt-row-bold">
          <span>Name</span> <span>Qty</span> <span>Price</span>
        </div>

        {items.map((item, index) => (
          <div key={index} className="receipt-row">
            <span>{item.name}</span>
            <span>{item.qty}</span>
            <span>රු{item.price.toFixed(2)}</span>
          </div>
        ))}

        <hr className="receipt-divider" />

        <div className="receipt-row receipt-row-bold">
          <span>Sub Total</span>
          <span>රු{subTotal}</span>
        </div>

        <hr className="receipt-divider" />

        <div className="receipt-footer">
          <div className="receipt-barcode"></div>
          <div className="receipt-row-bold">THANK YOU!</div>
          <div>Buy the goods again!</div>
        </div>

        <div className="button-group">
          <button className="receipt-button back" onClick={handleBack}>
            Back
          </button>
          <button className="receipt-button pay" onClick={handlePay}>
            Pay
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Receipt;
