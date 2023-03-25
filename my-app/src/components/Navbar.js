import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
  
 <nav className="navbar">
  <div className="navbar-container">
    <Link to='/' className='navbar-logo'>
      <a class="cursor-pointer px-1 text-5xl font-medium text-off-white hover:underline md:text-2xl">Home</a>
    </Link>
    <div className='register'>
      <Link to='/register' className='navbar-logo'>
      Register
      </Link>
    </div>
    <div className='Help'>
      <Link to='/help' className='navbar-logo'>
      Help
      </Link>
    </div>
    
     <div className='rides
      <Link to='/rides' className='navbar-logo'>
      rides
      </Link>
    </div>

    <div className='Login'>
      <Link to='/Login' className='navbar-logo'>
      Login
      </Link>
    </div>
     
  </div>
  </nav>
  )
}

export default Navbar