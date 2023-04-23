import React from 'react'
import Error404 from '../Error404/error404'
import { Link } from 'react-router-dom';

function Employee({ user }) {
    if (user.role_type == 'customer') {
        return <Error404></Error404>;
    }

    return (
        <div>
            <h1>This is Employee</h1>
            <Link to="/EditEmployee" className='navbar-logo'>
                EditEmployee
            </Link>
        </div>
    )
}

export default Employee