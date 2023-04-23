import React, { useContext } from 'react'
import Error404 from '../Error404/error404';
import { Link } from 'react-router-dom';
import './adminHub.css'

function AdminHub({ user }) {
    if (user.role_type != 'admin') {
        return <Error404></Error404>;
    }
    return (
        <div>
            {user != null && user.role_type == 'admin' &&
                <div>
                    <h1>Admin Portal</h1>

                    <Link to='/InsertAttraction' className='button-link-side'>
                        Insert Attraction
                    </Link>
                    <Link to='/EditAttraction' className='button-link-side'>
                        Edit Attraciton
                    </Link>
                    <Link to='/RemoveAttraction' className='button-link-side'>
                        Remove Attraction
                    </Link>
                    <h3 className="subheader">Other Portals</h3>
                    <Link to='/manager' className='button-link-stack'>
                        Manager
                    </Link>
                    <Link to='/maintenance' className='button-link-stack'>
                        Maintenance
                    </Link>
                    <Link to='/Employee' className='button-link-stack'>
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