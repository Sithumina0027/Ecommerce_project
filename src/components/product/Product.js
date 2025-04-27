import React, { useEffect, useState } from 'react';
import '../product/Product.css';

const Product = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const storedProducts = localStorage.getItem('products');

        // If products are already stored in localStorage, use them
        if (storedProducts) {
          console.log("Loaded products from localStorage:", JSON.parse(storedProducts)); // Debug log
          setProducts(JSON.parse(storedProducts));
          setLoading(false);
          return;
        }

        // Fetch products from API if not in localStorage
        const response = await fetch('http://localhost:5217/api/Product/all');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched products from API:", data); // Debug log

        // Store the fetched data in localStorage
        localStorage.setItem('products', JSON.stringify(data));

        // Set the products in the state
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err); // Error log to console
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Increase the quantity if already in cart
    } else {
      cart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.productName} added to cart!`);
  };

  return (
    <div>
      <h2>{title}</h2>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div className="product-list">
        {products.map((product, index) => {
          const formattedPrice =
            typeof product.productPrice === 'number' ? product.productPrice.toFixed(2) : 'N/A';

          // Construct full image URL
          const imageUrl = product.productImage
            ? `http://localhost:5217/${product.productImage}` // Ensure the correct path here
            : null;

          return (
            <div
              key={product.id || index}
              className="product-item"
              style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={product.productName}
                  style={{ width: '150px', height: 'auto', marginTop: '10px' }}
                />
              )}
              <h3>{product.productName}</h3>
              <p><strong>Price:</strong> Rs.{formattedPrice}</p>
              <p><strong>Category:</strong> {product.productCategory}</p>
              <button 
                onClick={() => handleAddToCart(product)} 
                style={{
                  padding: '10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
