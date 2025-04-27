import React, { useEffect, useState } from 'react';
import '../product/Product.css';

const Product = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5217/api/Product/all');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched products:", data); // Debug log
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err); // Debug error log
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
            ? `http://localhost:5217/${product.productImage}` // Adjust if your image path includes "images/"
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
              <p><strong>Price:</strong> ${formattedPrice}</p>
              <p><strong>Category:</strong> {product.productCategory}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
