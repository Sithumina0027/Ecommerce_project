import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to Our E-Market</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
