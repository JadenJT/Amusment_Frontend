import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../icons/Umazing.svg';
import "./Navbar.css";
import { UserContext } from '../../App';


function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    // Clears session storage and reloads
    sessionStorage.clear();
    window.location.reload();
    setUser(null);
    navigate('/');
  }

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


          {user != null && user.role_type == 'admin' &&
            <div className='admin'>
              <Link to='/admin' className='navbar-logo'>
                admin
              </Link>
            </div>
          }


          {user.token == null &&
            <div className='Register'>
              <Link to='/register' className='navbar-logo'>
                Register
              </Link>
            </div>
          }

        </div>

        {user.token == null &&
          <div className="login" >
            <Link to='/Login' className='navbar-logo'>
              Login
            </Link>
          </div>
        }

        {user.token != null &&
          <div className="login" >
            <div className='navbar-logo' onClick={logout}>
              Logout
            </div>
          </div>
        }



      </div>
    </nav>
  )
}

export default Navbar