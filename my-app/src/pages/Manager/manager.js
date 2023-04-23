import React from 'react'
import Error404 from '../Error404/error404';
import { Link } from 'react-router-dom';

function Manager({ user }) {
    if (user.role_type == 'customer') {
        return <Error404></Error404>;
    }
    return (

        <div>
            <h1>Manager Portal</h1>
            <Link to='/Report' className='button-link-side'>
                Theme Park Reports
            </Link>
            <Link to='/Maintenance' className='button-link-stack'>
                Maintenance
            </Link>
            <Link to='/Employee' className='button-link-stack'>
                Employee
            </Link>
        </div>
    )
}

export default Manager