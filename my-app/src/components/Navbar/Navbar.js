import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../icons/Umazing.svg';
import "./Navbar.css";
import useToken from '../../tokenhelpers/helpers';
function Navbar() {
  const { token } = useToken();

  return (

    <nav className="navbar">
      <div className="navbar-container">

        <div className='logo'>
          <img src={Logo} alt="um-logo" />
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


          {/* <div className='Error404'>
            <Link to='/error404' className='navbar-logo'>
            Error404
            </Link>
          </div>*/}


          <div className='Rides'>
            <Link to='/rides' className='navbar-logo'>
              Rides
            </Link>
          </div>


          <div className='Concessions'>
            <Link to='/concessions' className='navbar-logo'>
              Concessions
            </Link>
          </div>

          {token == null &&
            <div className='Register'>
              <Link to='/register' className='navbar-logo'>
                Register
              </Link>
            </div>
          }

        </div>

        {token == null &&
          <div className="login" >
            <Link to='/Login' className='navbar-logo'>
              Login
            </Link>
          </div>
        }



      </div>
    </nav>
  )
}

export default Navbar