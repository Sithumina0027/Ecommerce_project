import { useState } from "react";
import { CreditCard, User, Calendar, Lock } from "lucide-react";
import "./payment.css"; 
import Footer from "../footer/Footer";
import Header from '../header/Header';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardType, setCardType] = useState("");

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    const formatted = input.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    setCardNumber(formatted.substring(0, 19));
    
    
    if (input.startsWith('4')) {
      setCardType("Visa");
    } else if (/^5[1-5]/.test(input)) {
      setCardType("Mastercard");
    } else if (/^3[47]/.test(input)) {
      setCardType("Amex");
    } else if (/^6(?:011|5)/.test(input)) {
      setCardType("Discover");
    } else {
      setCardType("");
    }
  };

  const handleExpiryChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length > 2) {
      setExpiry(input.substring(0, 2) + '/' + input.substring(2, 4));
    } else {
      setExpiry(input);
    }
  };

  const handleCvvChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    setCvv(input.substring(0, 4));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert("Payment Processed Successfully!");
 
    } catch (error) {
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
    <Header/>
    <div className="payment-container">
      <div className="payment-card">
        <div className="form-container">
         
         
          <div className="form-header">
            <h2 className="header-title">Secure Payment</h2>
            <p className="header-subtitle">Enter your payment details below</p>
          </div>
          
         
         
          <form onSubmit={handlePayment} className="payment-form">
            
            
            <div className="input-group">
              <label htmlFor="cardNumber" className="form-label">
                <CreditCard />
                Card Number {cardType && <span className="card-type-badge">{cardType}</span>}
              </label>
              <div className="input-wrapper">
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  className="form-input"
                  required
                  maxLength={19}
                />
              </div>
            </div>

          
            <div className="input-group">
              <label htmlFor="cardName" className="form-label">
                <User />
                Name on Card
              </label>
              <input
                id="cardName"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required
              />
            </div>

            
            <div className="row">
              <div className="col-half input-group">
                <label htmlFor="expiry" className="form-label">
                  <Calendar />
                  Expiry Date
                </label>
                <input
                  id="expiry"
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={handleExpiryChange}
                  className="form-input"
                  required
                  maxLength={5}
                />
              </div>

              <div className="col-half input-group">
                <label htmlFor="cvv" className="form-label">
                  <Lock />
                  CVV
                </label>
                <input
                  id="cvv"
                  type="password"
                  placeholder="•••"
                  value={cvv}
                  onChange={handleCvvChange}
                  className="form-input"
                  required
                  maxLength={4}
                />
              </div>
            </div>

            
            <button
              type="submit"
              className="submit-button"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Pay Now"
              )}
            </button>

            

            <div className="security-note">
              <Lock />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </form>
        </div>
        
        
        
        <div className="cards-accepted">
          <div className="card-badge">
            <span className="card-badge-text">Visa</span>
          </div>
          <div className="card-badge">
            <span className="card-badge-text">Mastercard</span>
          </div>
         
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Payment;