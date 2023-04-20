import React, { useEffect, useState } from 'react';
import './Report.css'

export default function Home(){
    const [empValue, setEmpValue] = useState([]);
    const [show, setShow] = useState(false);

    let [fName, setFName] = useState('');
    let [lName, setLName] = useState('');
    let [jLocation, setJLocation] = useState('');
    let [jRole, setJRole] = useState('');
    let [employeeMail, setEmployeeMail] = useState('');

    const employeeSubmit = async (e)=> {        
        e.preventDefault();
        
        if(fName === '') fName = null;
        if(lName === '') lName = null;
        if(jLocation === 'all') jLocation = null;
        if(jRole === 'all') jRole = null;
        if(employeeMail === '') employeeMail = null;

        setShow(true);

        const employeeFormData = {
            f_name: fName,
            l_name: lName,
            job_location: jLocation,
            job_role: jRole,
            email: employeeMail
        }
        
        const response = await fetch('http://localhost:8080/employee/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employeeFormData)
            });
        const responseData = await response.json();
        setEmpValue(responseData);
    }

    return(
        <>
            <div className='reportCard'>
                <div>
                    <h1>Employee Report</h1>
                </div>
                <form onSubmit={employeeSubmit}>
                    <div className='formCard'>
                        <div>
                            <h3>First Name: </h3>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='Firstname'
                                value={fName}
                                onChange={(e) => setFName(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <h3>Last Name: </h3>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='Lastname'
                                value={lName}
                                onChange={(e) => setLName(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <h3>Job Location: </h3>
                            <select className='formInput' value={jLocation} onChange={(e) => setJLocation(e.target.value)}>
                                <option value='all'>All</option>
                                {empValue.map((data, index)=> {
                                    return(
                                        <option key={index} value={data.job_location}>{data.job_location}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <h3>Job Role: </h3>
                            <select className='formInput' value={jRole} onChange={(e) => setJRole(e.target.value)}>
                                <option value='all'>All</option>
                                {empValue.map((data, index)=> {
                                    return(
                                        <option key={index} value={data.job_role}>{data.job_role}</option>
                                    )
                                })}                                
                            </select>
                        </div>
                        <div>
                            <h3>Email: </h3>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='employee@mail.com'
                                value={employeeMail}
                                onChange={(e) => setEmployeeMail(e.target.value)}>
                            </input>
                        </div>
                    </div>
                    
                    <button className='submit'>Submit</button>
                </form>
            </div>

            <br></br>
            
            {show?
                <div className='tableCard'>
                    <div className='searchForm'>
                        <span className='lookUp'>FIRST:</span> {fName}&emsp;
                        <span className='lookUp'>LAST:</span> {lName}&emsp;
                        <span className='lookUp'>JOB_LOCATION:</span> {jLocation}&emsp;
                        <span className='lookUp'>JOB_ROLE:</span> {jRole}&emsp;
                        <span className='lookUp'>EMAIL:</span> {employeeMail}
                    </div>
                    <table className='tableInfo'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Job Location</th>
                                <th>Job Role</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empValue.map((data, index)=> {
                                return(
                                    <tr key={index}>
                                        <td type="text">{data.f_name}</td>
                                        <td type="text">{data.l_name}</td>
                                        <td type="text">{data.job_location}</td>
                                        <td type="text">{data.job_role}</td>
                                        <td type="text">{data.email}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            :null}
        </>
    )
}