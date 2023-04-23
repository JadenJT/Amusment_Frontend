import React from 'react'
import Error404 from '../Error404/error404';
import { Link } from 'react-router-dom';
function Maintenance(user) {
    if (user.role_type == 'customer') {
        return <Error404></Error404>;
    }
    return (
        <div>
            <h1>Maintenance Portal</h1>
            <Link to='/employee' className='button-link-stack'>
                Employee
            </Link>
        </div>
    )
}

export default Maintenance