// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
  //  login logic 
    setLoggedIn(true);
  };
  const handleLogout = () => {
    //  logout logic 
    // authentication state and redirect to login page
    setLoggedIn(false);
    // clearing tokens, etc.
  };

  const handleSignout = () => {
    // logout logic here
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="content">
        <Sidebar />
        {/* Add other components for the main content area */}
      </div>
    </div>
  );
};

export default App;

