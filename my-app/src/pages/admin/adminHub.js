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
                    <h1>This is admin</h1>

                    <Link to='/InsertAttraction' className='navbar-logo'>
                        InsertAttraction
                    </Link>
                    <Link to='/EditAttraction' className='navbar-logo'>
                        EditAttraciton
                    </Link>
                    <Link to='/RemoveAttraction' className='navbar-logo'>
                        RemoveAttraction
                    </Link>

                    <Link to='/manager' className='navbar-logo'>
                        Manager
                    </Link>
                    <Link to='/maintenance' className='navbar-logo'>
                        Maintenance
                    </Link>
                    <Link to='/Employee' className='navbar-logo'>
                        Employee
                    </Link>
                    <Link to='/InsertEmployee' className='navbar-logo'>
                        InsertEmployee
                    </Link>
                    <Link to='/RemoveEmployee' className='navbar-logo'>
                        RemoveEmployee
                    </Link>
                </div>
            }
        </div>
    )

}

export default AdminHub