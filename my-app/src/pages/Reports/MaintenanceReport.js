import React, { useState, useEffect } from 'react';
import './Report.css'

export default function MaintenanceReport(){

    const [dbValue, setDBValue] = useState([]);
    //Shows Table
    const [show, setShow] = useState(false);
    //Shows Data
    const [showData, setShowData] = useState(false);
    //Error Messages
    const[errMainStartDate, setErrMainStartDate] = useState("");    
    const[errMainStartMargin, setErrMainStartMargin] = useState("");
    const[errMainEndDate, setErrMainEndDate] = useState("");
    const[errMainEndMargin, setErrMainEndMargin] = useState("");
    //Report Inputs
    let [inputRide, setInputRide] = useState("");
    let [inputZone, setInputZone] = useState("");
    let [inputStartDate, setInputStartDate] = useState("");
    let [inputEndDate, setInputEndDate] = useState("");
    //Dropdown Arrays
    const arrRide = [];
    const arrZone = [];

    const getMaintenanceData = async () => {

        let rName = inputRide;
        let rZone = inputZone;
        let sDate = inputStartDate;
        let eDate = inputEndDate;

        let jCode = null;
        if(rName === 'all') rName = null;
        if(rZone === 'all') rZone = null;
        if(sDate === '') sDate = null;
        if(eDate === '') eDate = null;

        const maintenanceFormData = {
            job_code: jCode,
            ride_name: rName,
            zone: rZone,
            start_date: sDate,
            end_date: eDate
        }        
        const response = await fetch('http://localhost:8080/maintenance/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(maintenanceFormData)
            });
        const responseData = await response.json();

        setDBValue(responseData);
    }
    //Get the data first to build the report requirements
    getMaintenanceData();

    //Will put data.values in an array for the dropdown menues
    dbValue.map((data) => {
        if(!arrRide.includes(data.ride_name)){
            arrRide.push(data.ride_name);
            arrRide.sort();
        }
    })
    dbValue.map((data) => {
        if(!arrZone.includes(data.zone)){
            arrZone.push(data.zone);
            arrZone.sort();
        }
    })

    //Gets data with user requirments
    const maintenanceSubmit = (e)=> {        
        e.preventDefault();        

        //Checks for both dates
        if(inputStartDate === '' && inputEndDate !== ''){
            //error, tell user to enter START 
            setErrMainStartDate("Please enter a start date.");
            setErrMainStartMargin(".25em");
            setErrMainEndDate("");
            setErrMainEndMargin("");
            
            setShow(false);
        }
        else if(inputStartDate !== '' && inputEndDate === ''){
            //error, tell user to enter END
            setErrMainStartDate("");
            setErrMainStartMargin("");
            setErrMainEndDate("Please enter a end date.");
            setErrMainEndMargin(".25em");

            setShow(false);
        }
        else{
            setErrMainStartDate("");
            setErrMainStartMargin("");
            setErrMainEndDate("");
            setErrMainEndMargin("");
            
            getMaintenanceData();
            setShow(true);

            //See if any data is available
            if(dbValue.length > 0){
                setShowData(true);
            }
            else
                setShowData(false);
        }
    }

    return(
        <>
            <div className='reportCard'>
                <div>
                    <h1>Maintenance Report</h1>
                </div>
                <form onSubmit={maintenanceSubmit}>
                    <div className='formCard'>
                        <div>
                            <h3>Ride Name: </h3>                           
                            <select className='formInput' value={inputRide} onChange={(e) => setInputRide(e.target.value)}>
                                <option value='all'>All</option>
                                {arrRide.map((data)=> {
                                    return(
                                        <option value={data}>{data}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <h3>Choose Zone: </h3>
                            <select className='formInput' value={inputZone} onChange={(e) => setInputZone(e.target.value)}>
                                <option value='all'>All</option>
                                {arrZone.map((data)=> {
                                    return(
                                        <option value={data}>{data}</option>
                                    )
                                })}
                            </select>                    
                        </div>
                        <div>
                            <h3>Start Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={inputStartDate}
                                onChange={(e) => setInputStartDate(e.target.value)}
                                style={{marginBottom: errMainStartMargin}}>
                            </input>
                            <div className='errMainDate'>{errMainStartDate}</div>
                        </div>
                        <div>
                            <h3>End Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={inputEndDate}
                                onChange={(e) => setInputEndDate(e.target.value)}
                                style={{marginBottom: errMainEndMargin}}>
                            </input>
                            <div className='errMainDate'>{errMainEndDate}</div>
                        </div>
                    </div>
                    
                    <button className='submit'>Submit</button>
                </form>
            </div>
            
            <br></br>

           {show?
                <div className='tableCard'>
                    <div className='searchForm'>
                        <span className='lookUp'>RIDE_NAME:</span> {inputRide}&ensp;
                        <span className='lookUp'>ZONE:</span> {inputZone}&ensp;
                        <span className='lookUp'>DATE:</span> {inputStartDate} - {inputEndDate} 
                    </div>
                    {showData?
                        <table className='tableInfo'>
                            <thead>
                                <tr>
                                    <th>Job Code</th>
                                    <th>Zone</th>
                                    <th>Ride</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dbValue.map((data, index)=> {
                                        return(
                                            <tr key={index}>
                                                <td type="text">{data.job_code}</td>
                                                <td type="text">{data.ride_name}</td>
                                                <td type="text">{data.zone}</td>
                                                <td type="text">{data.start_date}</td>
                                            </tr>
                                    )
                                })}
                                <tr>
                                <td><h3>Total Tickets</h3></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><h3>{dbValue.length}</h3></td>
                            </tr>
                            </tbody>
                        </table>
                    :
                        <h2 className='noData'>NO MATCHING DATA</h2>
                    }
                </div>
            :null}
        </>
    )
}