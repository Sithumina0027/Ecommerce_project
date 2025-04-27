import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../product/Product'; // Assuming Product component is in this path
import Header from '../header/Header'; // Assuming Header component is in this path
import Footer from '../footer/Footer'; // Assuming Footer component is in this path
import Nav from '../nav/Nav'; // Assuming Nav component is in this path

const Grocery = () => {
  const [groceryProducts, setGroceryProducts] = useState([]); // State to store grocery products
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to track any error during fetch

  useEffect(() => {
    // Fetch all products from the backend API
    axios
      .get('http://localhost:5217/api/Product/all') // Replace with your actual API endpoint
      .then((response) => {
        console.log('API Response:', response); // Log the full API response for debugging
        
        // Filter products by 'Grocery' category
        const filteredProducts = response.data.filter(
          (product) => product.ProductCategory === 'Grocery'
        );
        
        console.log('Filtered Grocery Products:', filteredProducts); // Log the filtered products
        
        setGroceryProducts(filteredProducts); // Store filtered products
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error('Error fetching data:', err); // Log the error for debugging
        setError('Failed to fetch products. Please try again later.');
        setLoading(false); // Set loading to false if an error occurs
      });
  }, []); // Empty array means this effect will run only once when the component mounts

  // Divide the products into batches of 15 for pagination
  const firstFifteen = groceryProducts.slice(0, 15);
  const secondFifteen = groceryProducts.slice(15, 30);
  const thirdFifteen = groceryProducts.slice(30, 45);

  return (
    <>
      <Header /> {/* Render Header */}
      <Nav /> {/* Render Navigation */}

      {loading && <p>Loading products...</p>} {/* Display loading message while data is being fetched */}
      {error && <p>{error}</p>} {/* Display error message if there's an issue fetching data */}
      
      {/* Display the product batches once data is loaded */}
      {!loading && !error && (
        <>
          <Product title="Grocery Products - Batch 1" products={firstFifteen} />
          <Product title="Grocery Products - Batch 2" products={secondFifteen} />
          <Product title="Grocery Products - Batch 3" products={thirdFifteen} />
        </>
      )}

      <Footer /> {/* Render Footer */}
    </>
  );
};

export default Grocery;
