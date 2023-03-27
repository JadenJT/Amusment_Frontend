import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../icons/Umazing.svg';
import "./Navbar.css";

function Navbar() {
  return (
  
 <nav className="navbar">
  <div className="navbar-container">
    
    <div className='logo'>
      <img src={Logo} alt="um-logo"/>
    </div>

       <div className='nav-tabs'>
          <Link to='/' className='navbar-logo'>
            <a class="cursor-pointer px-1 text-5xl font-medium text-off-white hover:underline md:text-2xl">Home</a>
          </Link>

          <div className='Zones'>
            <Link to='/zone' className='navbar-logo'>
            Zones
            </Link>
          </div>

          <div className='Rides'>
            <Link to='/rides' className='navbar-logo'>
            Rides
            </Link>
          </div>
       
          <div className='Help'>
            <Link to='/help' className='navbar-logo'>
            Help
            </Link>
          </div>

          <div className='register'>
            <Link to='/register' className='navbar-logo'>
            Register
            </Link>
          </div>

         
      
    
       </div>

    <div className="login" >
    <Link to='/Login' className='navbar-logo'>
      Login
      </Link>
    </div>

    
     
  </div>
  </nav>
  )
}

export default Navbar