import React, { useState, useEffect } from "react";
import './Cart.css';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cart items from API
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:5217/api/Cart');  // Adjust the API endpoint as necessary
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCartItems(data);  // Set cart data from backend
      } catch (err) {
        setError('Failed to load cart items');
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.product.productPrice * item.quantity, 0);

  return (
    <>
      <Nav />
      <div className="cart-container1">
        <h2>Your Cart</h2>
        {loading && <p>Loading cart items...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={`http://localhost:5217/${item.product.productImage}`} alt={item.product.productName} />
                  <div className="item-details">
                    <h4>{item.product.productName}</h4>
                    <p>Price: රු{item.product.productPrice.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3>Total: රු{totalAmount.toFixed(2)}</h3>
              <Link
                to={{
                  pathname: "/bill",
                  state: { billDetails: { cartItems, totalAmount, transactionTime: new Date().toLocaleString() } }
                }}
              >
                <button className="checkout-btn">Bill Items</button>
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
