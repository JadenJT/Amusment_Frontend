import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
function Navbar() {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
  
 <nav className="navbar">
  <div className="navbar-container">
    <Link to='/' className='navbar-logo'>
      Home
    </Link>
    <div className='register'>
      <Link to='/register' className='navbar-logo'>
      Register
      </Link>
    </div>
    <div className='Login'>
      <Link to='/Login' className='navbar-logo'>
      Login
      </Link>
    </div>
    <div className='Help'>
      <Link to='/help' className='navbar-logo'>
      Help
      </Link>
    </div>
     
  </div>
  </nav>
  )
}

export default Navbar