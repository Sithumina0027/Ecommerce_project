import React from 'react';
import './MainContent.css';
import firstImage from '../image/first.jpg';
import secondImage from '../image/second.jpg';
import add1 from '../image/adds/add1.jpg';
import add2 from '../image/adds/add2.jpg';
import add3 from '../image/adds/add3.jpg';

import product1 from '../image/products/product1.jpg';
import product2 from '../image/products/product2.jpg';
import product3 from '../image/products/product3.jpg';
import product4 from '../image/products/product4.jpg';
import product5 from '../image/products/product5.jpg';
import product6 from '../image/products/product6.jpg';
import product7 from '../image/products/product7.jpg';
import product8 from '../image/products/product8.jpg';
import product9 from '../image/products/product9.jpg';
import product10 from '../image/products/product10.jpg';
import product11 from '../image/products/product11.jpg';
import product12 from '../image/products/product12.jpg';
import product13 from '../image/products/product13.jpg';
import product14 from '../image/products/product14.jpg';
import product15 from '../image/products/product15.jpg';

import product16 from '../image/products/product16.jpg';
import product17 from '../image/products/product17.jpg';
import product18 from '../image/products/product18.jpg';
import product19 from '../image/products/product19.jpg';

import product20 from '../image/products/product20.jpg';
import product21 from '../image/products/product21.jpg';
import product22 from '../image/products/product22.jpg';
import product23 from '../image/products/product23.jpg';
import product24 from '../image/products/product24.jpg';
import product25 from '../image/products/product25.jpg';
import product26 from '../image/products/product26.jpg';
import product27 from '../image/products/product27.jpg';
import product28 from '../image/products/product28.jpg';
import product29 from '../image/products/product29.jpg';
import product30 from '../image/products/product30.jpg';



import ProductSection from './product/Product';
import Footer from './footer/Footer';
import Header from './header/Header';
import Nav from './nav/Nav';


const MainContent = () => {
  const greenproduct = [
    { name: 'Carrot 250g', price: 123.80, originalPrice: 137.50, image: product1, inStock: true },
    { name: 'LIME 100G', price: 30.60, image: product2, inStock: true },
    { name: 'LONG BEANS 250g', price: 76.50, originalPrice: 85.00, image: product3, inStock: true },
    { name: 'MINT LEAVES 100G', price: 46.80, image: product4, inStock: false },
    { name: 'SNAKE GOURD 250g', price: 85.50, originalPrice: 96.00, image: product5, inStock: true },
    { name: 'NIVITHI 250g', price: 60.75, image: product6, inStock: true },
    { name: 'SWEET POTATO 250G', price: 67.50, originalPrice: 75.00, image: product7, inStock: true },
    { name: 'ELA BATU 250g', price: 60.75, image: product8, inStock: true },
    { name: 'RADDISH LONG 500G', price: 130.50, originalPrice: 145.00, image: product9, inStock: true },
    { name: 'ANODA 500g', price: 182.25, image: product10, inStock: true },
    { name: 'BANANA ABUL 500g', price: 90.00, originalPrice: 100.00, image: product11, inStock: true },
    { name: 'BANANA AMBUN 500g', price: 96.75, originalPrice: 107.68, image: product12, inStock: true },
    { name: 'ASH PLANTAINS', price: 76.50, originalPrice: 85.00, image: product13, inStock: true },
    { name: 'BANANA-ANAMALU 100g', price: 112.50, image: product14, inStock: true },
    { name: 'BANANA-KOLITUTTU', price: 105.75, originalPrice: 117.50, image: product15, inStock: false },

    { name: 'Ritzbury Fruit & Nut Chocolate 170G', price: 580.00, image: product16, inStock: true },
    { name: 'Ritzbury Peanut Chocolate 170G', price: 460.00, image: product17, inStock: true },
    { name: 'Ritzbury Chunky Choc 200G', price: 450.00,  image: product18, inStock: true },
    { name: 'Ritzbury Chocolate Bubbles 170g', price: 400.00, image: product19, inStock: false },
    { name: 'MD Orange Cordial 750ml', price: 850.00,  image: product20, inStock: true },
    { name: 'MD Mixed Fruit Cordial 750ml', price: 950.00, image: product21, inStock: true },
    { name: 'Passion Cordial 750ml', price: 1300.00,  image: product22, inStock: true },
    { name: 'Kist Mixed Fruit Nectar 1L', price: 580.00, image: product23, inStock: true },
    { name: 'Kist Mixed Fruit Nectar 200Ml', price: 140.00, image: product24, inStock: true },
    { name: 'Kist Mango Nectar 1L', price: 580.00, image: product25, inStock: true },
    { name: 'Elephant House Necto 1.5L', price: 300.00, originalPrice: 350.00, image: product26, inStock: true },
    { name: 'Elephant House EGB,1.5L',  price: 300.00, originalPrice: 350.00, image: product27, inStock: true },
    { name: 'Coca Cola, 2l', price: 420.00, originalPrice: 460.00, image: product28, inStock: false },
    { name: 'Elephant House Fito Flavoured Mango Drink 200ml', price: 120.00, image: product29, inStock: true },
    { name: 'Elephant House Fito Flavoured Mixed Fruit Drink 200ml', price: 120.00, image: product30, inStock: false },
  ];

  const groceryproduct = [...greenproduct, ...greenproduct]; 


  const firstFifteen = groceryproduct.slice(0, 15);
  const secondFifteen = groceryproduct.slice(15, 30);

  

  return (
    <>
    <Header/>
    <Nav />
      <main>
        <div className="image-container">
          <img src={firstImage} alt="First " className="main-image" />
          <img src={secondImage} alt="Second " className="main-image" />
        </div>
        
        <ProductSection title="Green Products" products={ firstFifteen} />
      
        <div className="adds-container">
          <img src={add1} alt="Ad 1" className="add1" />
          <img src={add2} alt="Ad 2" className="add2" />
          <img src={add3} alt="Ad 3" className="add3" />
        </div>
      
        <div className="grocery-container">
          <div className="grocery-column">
            <ProductSection title="Grocery Products" products={secondFifteen} />
            
            
            
          </div>
        </div>
      </main>
      { <Footer />}
    </>
  );
};

export default MainContent;