import React, { useEffect, useState } from 'react';
import './UserInfo.css';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

const UserInfo = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('userData'));

      if (storedUser && storedUser.id) {
        const userId = storedUser.id;

        fetch(`http://localhost:5217/api/Users/${userId}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Failed to fetch data, status code: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            setUserData(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Fetch error:", error);
            setError("Failed to fetch user details.");
            setLoading(false);
          });
      } else {
        setError("User data not found. Please log in again.");
        setLoading(false);
      }
    } catch (err) {
      console.error("LocalStorage error:", err);
      setError("Error reading user data from storage.");
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Nav />
      <div className="user-info-container">
        <h2>User Information</h2>

        {loading && <p>Loading user data...</p>}
        {error && <p className="error-message">{error}</p>}

        {!loading && userData && (
          <ul>
          <ul>
  <li><strong>Name:</strong> {userData.name || userData.Name}</li>
  <li><strong>Email:</strong> {userData.email || userData.Email}</li>
  <li><strong>Phone:</strong> {userData.phone || userData.Phone}</li>
  <li><strong>Address Line 1:</strong> {userData.address || userData.Address}</li>
  <li><strong>Address Line 2:</strong> {userData.address2 || userData.Address2}</li>
  <li><strong>City:</strong> {userData.city || userData.City}</li>
  <li><strong>Zip:</strong> {userData.zip || userData.Zip}</li>
</ul>

          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default UserInfo;
