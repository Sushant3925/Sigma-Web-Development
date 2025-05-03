import React from 'react';
import './main.css'
const Navbar = () => {
  return (
    <nav className='my-3'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/main">Main</a></li>
        {/* Add more navbar items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
