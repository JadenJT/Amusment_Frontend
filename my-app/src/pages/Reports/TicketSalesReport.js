import React, { useState, useEffect } from 'react';
import './Report.css'

export default function TicketSalesReport(){
    const [dbValue, setDBValue] = useState([]);
    //Shows Table
    const [show, setShow] = useState(false);
    //Shows Data
    const [showData, setShowData] = useState(false);
    //Error Messages
    const[errTicketStartDate, setErrTicketStartDate] = useState("");    
    const[errTicketStartMargin, setErrTicketStartMargin] = useState("");
    const[errTicketEndDate, setErrTicketEndDate] = useState("");
    const[errTicketEndMargin, setErrTicketEndMargin] = useState("");
    //Report Inputs
    let [inputRide, setInputRide] = useState("");
    let [inputType, setInputType] = useState("");
    let [inputZone, setInputZone] = useState("");
    let [inputStartDate, setInputStartDate] = useState("");
    let [inputEndDate, setInputEndDate] = useState("");
    //Drowdown Arrays
    const arrRide = [];
    const arrType = [];
    const arrZone = [];

    const getTicketSalesData = async () => {
        let tkID = null;
        let rName = inputRide;        
        let rZone = inputZone;
        let rType = inputType;
        let sDate = inputStartDate;
        let eDate = inputEndDate;

        if(rName === 'all') rName = null;
        switch(rType){
            case "all":
                rType = null;
                break;
            case "adult":
                rType = 45;
                break;
            case "child":
                rType = 30;
                break;
        }
        if(rZone === 'all') rZone = null;     
        if(sDate === '') sDate = null;
        if(eDate === '') eDate = null;

        const ticketFormData = {
            ride_name: rName,
            zone: rZone,
            ride_type: rType,  // (30 = Child, 45 = Adult)
            start_date: sDate, // (The times are 24Hr time.)
            end_date: eDate
        }
        
        const response = await fetch('http://localhost:8080/ticket/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticketFormData)
            });
        const responseData = await response.json();

        setDBValue(responseData);
    }

    //Get the data first to build the report requirements
    getTicketSalesData();

    //Will put data.values in an array for the dropdown menues
    dbValue.map((data) => {
        if(!arrRide.includes(data.ride_name)){
            arrRide.push(data.ride_name);
            arrRide.sort();
        }
    })
    dbValue.map((data) => {
        if(!arrType.includes(data.ride_type)){
            arrType.push(data.ride_type);
            arrType.sort();
        }
    })
    dbValue.map((data) => {
        if(!arrZone.includes(data.zone)){
            arrZone.push(data.zone);
            arrZone.sort();
        }
    })

    const ticketSubmit = async (e)=> {
        e.preventDefault();        

        if(inputStartDate === '' && inputEndDate !== ''){
            //error, tell user to enter START 
            setErrTicketStartDate("Please enter a start date.");
            setErrTicketStartMargin(".25em");
            setErrTicketEndDate("");
            setErrTicketEndMargin("");

            setShow(false);
        }
        else if(inputStartDate !== '' && inputEndDate === ''){
            //error, tell user to enter END
            setErrTicketStartDate("");
            setErrTicketStartMargin("");
            setErrTicketEndDate("Please enter a end date.");
            setErrTicketEndMargin(".25em");

            setShow(false);
        }
        else{
            setErrTicketStartDate("");
            setErrTicketStartMargin("");
            setErrTicketEndDate("");
            setErrTicketEndMargin("");

            getTicketSalesData();
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
                    <h1>Ticket Sales Report</h1>
                </div>
                <form onSubmit={ticketSubmit}>
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
                            <h3>Ride Type: </h3>
                            <select className='formInput' value={inputType} onChange={(e) => setInputType(e.target.value)}>
                                <option value='all'>All</option>
                                {arrType.map((data)=> {
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
                                style={{marginBottom: errTicketStartMargin}}>
                            </input>
                            <div className='errTicketDate'>{errTicketStartDate}</div>
                        </div>
                        <div>
                            <h3>End Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={inputEndDate}
                                onChange={(e) => setInputEndDate(e.target.value)}
                                style={{marginBottom: errTicketEndMargin}}>
                            </input>
                            <div className='errTicketDate'>{errTicketEndDate}</div>
                        </div>
                    </div>
                    
                    <button className='submit'>Submit</button>
                </form>
            </div>
            
            <br></br>

            {show?
                <div className='tableCard'>
                    <div className='searchForm'>
                        <span className='lookUp'>RIDE_NAME:</span> {inputRide}&emsp;
                        <span className='lookUp'>RIDE_TYPE:</span> {inputType}&emsp;
                        <span className='lookUp'>ZONE:</span> {inputZone}&emsp;
                        <span className='lookUp'>DATE:</span> {inputStartDate} - {inputEndDate}
                    </div>
                    {showData?
                        <table className='tableInfo'>
                            <thead>
                                <tr>
                                    <th>Ride Name</th>
                                    <th>Ride Type</th>
                                    <th>Zone</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dbValue.map((data, index)=> {
                                    return(
                                        <tr key={index}>
                                            <td type="text">{data.ride_name}</td>
                                            <td type="text">{data.ride_type}</td>
                                            <td type="text">{data.zone}</td>
                                            <td type="text">{data.start_date}</td>
                                            <td type="text">{data.end_date}</td>
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