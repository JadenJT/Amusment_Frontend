import React from 'react'
import Error404 from '../Error404/error404'
import { Link } from 'react-router-dom';

function Employee({ user }) {
    if (user.role_type == 'customer') {
        return <Error404></Error404>;
    }

    return (
        <div>

            <h1>Employee Portal</h1>
            <Link className='button-link-side'>Edit Information</Link>
            <Link to='/IncidentReportMaker' className='button-link-side'>Create Incident Report</Link>

        </div>
    )
}

export default Employee