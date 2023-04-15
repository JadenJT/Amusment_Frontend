import React, { useContext } from 'react'
import Error404 from '../Error404/error404';
import { Link } from 'react-router-dom';

function AdminHub({ user }) {
    if (user.role_type != 'admin') {
        return <Error404></Error404>;
    }
    return (
        <div>
            {user != null && user.role_type == 'admin' &&
                <div className='Attraction'>
                    <Link to='/InsertAttraction' className='navbar-logo'>
                        InsertAttraction
                    </Link>
                </div>
            }
        </div>
    )

}

export default AdminHub