import React, { useEffect, useState } from 'react';
import './Report.css'

export default function Home(){
    const [empValue, setEmpValue] = useState([]);

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [jLocation, setJLocation] = useState('');
    const [jRole, setJRole] = useState('');
    const [employeeMail, setEmployeeMail] = useState('');

    const fetchFunc = () =>{
        fetch('temp', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },            
        })
        .then(res=> {
            return res.json();
        })
        .then (data=> {
            setEmpValue(data)
        })
    }

    useEffect(() => {
        fetchFunc()
    }, []);

    const employeeSubmit = (e)=> {
        e.preventDefault();

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
                            <label>First Name: </label>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='Firstname'
                                value={fName}
                                onChange={(e) => setFName(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <label>Last Name: </label>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='Lastname'
                                value={lName}
                                onChange={(e) => setLName(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <label>Job Location: </label>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='Location'
                                value={jLocation}
                                onChange={(e) => setJLocation(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <label>Job Role: </label>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='Role'
                                value={jRole}
                                onChange={(e) => setJRole(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <label>Email: </label>
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
            
            <table className='tables'>
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
                                <td type="text">{}</td>
                                <td type="text">{}</td>
                                <td type="text">{}</td>
                                <td type="text">{}</td>
                                <td type="text">{}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}