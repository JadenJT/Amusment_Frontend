import React, { useContext } from 'react'
import Error404 from '../Error404/error404';

function AdminHub({ user }) {
    console.log(user.role_type);
    if (user.role_type != 'admin') {
        return <Error404></Error404>;
    }
    return (
        <div>adminHub</div>
    )

}

export default AdminHub