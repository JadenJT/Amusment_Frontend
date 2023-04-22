import React, { useState, useEffect } from 'react';
import './Report.css'

export default function EmployeeReport(){
    
    const [dbValue, setDBValue] = useState([]);
    //Shows Table
    const [show, setShow] = useState(false);
    //Shows Data
    const [showData, setShowData] = useState(false);

    //Report Inputs
    let [inputFirst, setInputFirst] = useState('');
    let [inputLast, setInputLast] = useState('');
    let [inputLocation, setInputLocation] = useState('all');
    let [inputRole, setInputRole] = useState('all');
    let [inputMail, setInputMail] = useState('');
    
    //Dropdown Arrays
    const arrLocation =[];
    const arrRole = [];    
    
    const getEmployeeData = async () =>  {

        let fName = inputFirst;
        let lName = inputLast;
        let jLocation = inputLocation;
        let jRole = inputRole;
        let empMail = inputMail;

        if(fName === '') fName = null;
        if(lName === '') lName = null;
        if(jLocation === 'all') jLocation = null;
        if(jRole === 'all') jRole = null;
        if(empMail === '') empMail = null;
        
        const employeeFormData = {
            f_name: fName,
            l_name: lName,
            job_location: jLocation,
            job_role: jRole,
            email: empMail
        }        
        const response = await fetch('http://localhost:8080/employee/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employeeFormData)
            });
        const responseData = await response.json();       

        setDBValue(responseData);
        
    }
    //Get the data first to build the report requirements
    getEmployeeData();

    //Will put data.values in an array for the dropdown menues
    dbValue.map((data) => {
        if(!arrLocation.includes(data.job_location)){
            arrLocation.push(data.job_location);
            arrLocation.sort();
        }
    })
    dbValue.map((data) => {
        if(!arrRole.includes(data.job_role)){
            arrRole.push(data.job_role);
            arrRole.sort();
        }
    })

    //Gets data with user requirments
    const employeeSubmit = async (e)=> {
        e.preventDefault();        
        getEmployeeData();
        setShow(true);
        
        //See if any data is available
        if(dbValue.length > 0){
            setShowData(true);
        }
        else
            setShowData(false);
    }

    return (
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
                                value={inputFirst}
                                onChange={(e) => setInputFirst(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <h3>Last Name: </h3>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='Lastname'
                                value={inputLast}
                                onChange={(e) => setInputLast(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <h3>Job Location: </h3>
                            <select className='formInput' value={inputLocation} onChange={(e) => setInputLocation(e.target.value)}>
                                <option value='all'>All</option>
                                {arrLocation.map((data) => {
                                    return (
                                        <option value={data}>{data}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <h3>Job Role: </h3>
                            <select className='formInput' value={inputRole} onChange={(e) => setInputRole(e.target.value)}>
                                <option value='all'>All</option>
                                {arrRole.map((data) => {
                                    return (
                                        <option value={data}>{data}</option>
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
                                value={inputMail}
                                onChange={(e) => setInputMail(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    <button className='submit'>Submit</button>
                </form>
            </div>

            <br></br>

            {show ?
                <div className='tableCard'>
                    <div className='searchForm'>
                        <span className='lookUp'>FIRST:</span> {inputFirst}&emsp;
                        <span className='lookUp'>LAST:</span> {inputLast}&emsp;
                        <span className='lookUp'>JOB_LOCATION:</span> {inputLocation}&emsp;
                        <span className='lookUp'>JOB_ROLE:</span> {inputRole}&emsp;
                        <span className='lookUp'>EMAIL:</span> {inputMail}
                    </div>
                    {showData ?
                        <table className='tableInfo'>
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Job Location</th>
                                    <th>Job Role</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dbValue.map((data, index)=> {
                                    return(
                                        <tr key={index}>
                                            <td type="text">{data.f_name} {data.l_name}</td>
                                            <td type="text">{data.job_location}</td>
                                            <td type="text">{data.job_role}</td>
                                            <td type="text">{data.email}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        :
                        <h2 className='noData'>NO MATCHING DATA</h2>
                    }
                </div>
                : null}
        </>
    )
}