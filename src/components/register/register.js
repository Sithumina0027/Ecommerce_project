import React, { useState } from "react";
import './register.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    address2: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
    password: "",
  
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password" || name === "confirmPassword") {
      setPasswordMatch(
        name === "password"
          ? value === formData.confirmPassword
          : formData.password === value
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordMatch) {
      setFormError("Passwords do not match!");
      return;
    }

    setIsSubmitting(true);
    setFormError("");
    setFormSuccess("");

    try {
      const response = await fetch('http://localhost:5217/api/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        console.log("Registration successful:", data);
        setFormSuccess("Account created successfully! You can now log in.");
        setFormData({
          name: "",
          address: "",
          address2: "",
          city: "",
          zip: "",
          phone: "",
          email: "",
          password: "",
         
        });
        // Optional: redirect to login page after a delay
        // setTimeout(() => window.location.href = '/login', 2000);
      } else {
        console.error("Registration failed:", data);
        setFormError(data || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setFormError("An error occurred during registration. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Header/>
    <Nav/>
    <div className="register-section">
      <div className="register-container">
        <h1 className="register-title">Creating a New Account</h1>
        <p className="register-subtitle">
          When you are new you can create your account here. Enter your details below.
        </p>

        {formError && (
          <div className="error-alert">
            <p>{formError}</p>
          </div>
        )}

        {formSuccess && (
          <div className="success-alert">
            <p>{formSuccess}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-grid">
            {/* Left Side - Personal Data */}
            <div className="form-section">
              <h2 className="section-title">Personal Data</h2>
              
              <div className="form-group">
                <label className="form-label required">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="form-input" 
                  value={formData.name} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label required">Address</label>
                <input 
                  type="text" 
                  name="address" 
                  required 
                  className="form-input" 
                  value={formData.address} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Address 2</label>
                <input 
                  type="text" 
                  name="address2" 
                  className="form-input" 
                  value={formData.address2} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label required">City</label>
                <input 
                  type="text" 
                  name="city" 
                  required 
                  className="form-input" 
                  value={formData.city} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label required">Zip code</label>
                <input 
                  type="text" 
                  name="zip" 
                  required 
                  className="form-input" 
                  value={formData.zip} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  className="form-input" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>
            </div>

            {/* Right Side - Login Data */}
            <div className="form-section">
              <h2 className="section-title">Login Data</h2>
              
              <div className="form-group">
                <label className="form-label required">E-mail address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="form-input" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label required">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  required 
                  className="form-input" 
                  value={formData.password} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label required">Confirm password</label>
                <input 
                  type="password" 
                  name="confirmPassword" 
                  required 
                  className="form-input" 
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                />
                {!passwordMatch && <span className="error-message">Passwords do not match</span>}
              </div>

              <button 
                type="submit" 
                className="submit-button2" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Register;