


// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(""); // State to track selected language
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status

  // Function to handle option selection
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value); // Update selected language state
    navigate(`/${event.target.value.toLowerCase()}`); // Navigate to the selected language route
  };

  useEffect(() => {
    // Check if the user is logged in by looking for currentUser in localStorage
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]); // Include isLoggedIn in the dependency array

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/home">
          <img src="./img/logo.png" alt="Logo" />
        </Link>
        <h2>EduKids Learning App</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/"> Courses </Link>
        </li>
        {/* Render Register only if user is not logged in */}
        {!isLoggedIn && (
          <li>
            <Link to="/register"> Register </Link>
          </li>
        )}
        {/* Render Logout and Select Language only if user is logged in */}
        {isLoggedIn && (
          <>
            <li>
              <Link to="/" onClick={() => { localStorage.removeItem("currentUser"); setIsLoggedIn(false); }}> Logout </Link>
            </li>
            <li>
              <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="Malayalam">Malayalam</option>
              </select>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;


