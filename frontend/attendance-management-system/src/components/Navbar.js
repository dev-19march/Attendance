
import React from 'react';
import logo from '../Images/logo.svg'
import '../Css/Navbar.css'
const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="right">
        {isLoggedIn ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <button>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;




