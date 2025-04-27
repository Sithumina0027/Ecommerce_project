import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import About from './components/about/About';
import Contact from './components/contact/contact'; 
import TermsAndConditions from './components/T&C/t&c';
import Register from './components/register/register';
import Login from './components/login/login';
import UserInfo from './components/user/UserInfo';
import Cart from './components/cart/Cart';
import VegiFruits from'./components/vegifruits/VegiFruits';
import Grocery from './components/grocery/Grocery';
import Return from './components/return policy/Return Policy';
import Allproduct from './components/allproduct/Allproduct';
import BillModal from './components/bill/Bill';
import Payment from './components/payment/payment';
import Home from '../src/components/pages/Home' 



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/home" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/Terms" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/vegifruits" element={<VegiFruits/>}/>
        <Route path="/grocery" element={<Grocery/>}/>
        <Route path="/grocery" element={<Grocery/>}/>
        <Route path="/Return" element={<Return/>}/>
        <Route path="/allproduct" element={<Allproduct/>}/>
        <Route path="/bill" element={<BillModal/>}/>
        <Route path="/payment" element={<Payment/>}/>


      </Routes>
    </Router>
  );
}

export default App;

