import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../product/Product.css'; 


import Product from '../product/Product';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

const VegiFruits = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from the backend
    axios.get('http://localhost:5217/api/Product/all')
      .then(response => {
        // Log the full response to check if everything is correct
        console.log("Response Data:", response.data); // Log the raw response data
        console.log("Response Status:", response.status); // Log the status of the response

        if (Array.isArray(response.data)) {
          setProducts(response.data); // Set products from the backend if it's an array
        } else {
          setError('Unexpected data format received');
        }
        
        setLoading(false); // Stop loading once data is fetched
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      });
  }, []);

  // Slice products into batches after data is fetched
  const firstFifteen = products.slice(0, 15);
  const secondFifteen = products.slice(15, 30);
  const thirdFifteen = products.slice(30, 45);

  return (
    <>
      <Header />
      <Nav />
      {loading ? (
        <div className="loading-spinner">Loading...</div> // Add a loading message or spinner
      ) : error ? (
        <div className="error-message">{error}</div> // Show error message if fetching fails
      ) : (
        <>
          <Product title="First Batch of Products" products={firstFifteen} />
          <Product title="Second Batch of Products" products={secondFifteen} />
          <Product title="Third Batch of Products" products={thirdFifteen} />
        </>
      )}
      <Footer />
    </>
  );
};

export default VegiFruits;
