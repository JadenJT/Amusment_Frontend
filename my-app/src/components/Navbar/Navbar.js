import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../icons/Umazing.svg';
import "./Navbar.css";
import { UserContext } from '../../App';
import { ShopContext } from '../cartContext/CartContext';


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

  const { cartTotal } = useContext(ShopContext);
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

          <div className='test'>
            <Link to='/test' className='navbar-logo'>
              test
            </Link>
          </div>

          <div className='test2'>
            <Link to='/test2' className='navbar-logo'>
              test2
            </Link>
          </div>

          <div className='test3'>
            <Link to='/test3' className='navbar-logo'>
              Test3
            </Link>
          </div>



          {user != null && user.role_type == 'admin' &&
            <div className='admin'>
              <Link to='/admin' className='navbar-logo'>
                Portal
              </Link>
            </div>
          }

          {user.token != null && user.role_type == 'manager' &&
            <div className='manager'>
              <Link to='/manager' className='navbar-logo'>
                Portal
              </Link>
            </div>
          }

          {user.token != null && user.role_type != 'customer' && user.role_type != 'maintenance' && user.role_type != 'manager' && user.role_type != 'admin' &&
            <div className='employee'>
              <Link to='/employee' className='navbar-logo'>
                Portal
              </Link>
            </div>
          }

          {user.token != null && user.role_type == 'maintenance' &&
            <div className='employee'>
              <Link to='/maintenance' className='navbar-logo'>
                Portal
              </Link>
            </div>
          }

          {user.token != null && cartTotal != 0 &&
            <div >
              <Link to='/ShoppingCart' className='cart'>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className='cart-amount'>{cartTotal}</div>
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
    </nav >
  )
}

export default Navbar