import React from 'react'
import Error404 from '../Error404/error404';
import { Link } from 'react-router-dom';

function Manager({ user }) {
    if (user.role_type == 'customer') {
        return <Error404></Error404>;
    }
    return (

        <div>
            <h1>This is manager</h1>
            <Link to='/employee' className='navbar-logo'>
                Employee
            </Link>
            <Link to='/maintenance' className='navbar-logo'>
                Maintenance
            </Link>
        </div>
    )
}

export default Manager