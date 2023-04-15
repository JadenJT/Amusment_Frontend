import React, { useState, useEffect } from 'react';
import './Report.css'

export default function Home(){
    const [ticketValue, setTicketValue] = useState([]);

    const [ticketRideID, setTicketRideID] = useState("");
    const [rideName, setRideName] = useState("");
    const [rideType, setRideType] = useState("");
    const [ticketZoneType, setTicketZoneType] = useState("");
    const [ticketStartDate, setTicketStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

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
            setTicketValue(data)
        })
    }

    useEffect(() => {
        fetchFunc()
    }, []);

    const ticketSubmit = (e)=> {

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
                            <label>Ride ID: </label>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='Ride ID'
                                value={ticketRideID}
                                onChange={(e) => setTicketRideID(e.target.value)}>  
                                </input>
                        </div>
                        <div>
                            <label>Ride Name: </label>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='Ride Name'
                                value={rideName}
                                onChange={(e) => setRideName(e.target.value)}>  
                                </input>
                        </div>
                        <div>
                            <label>Ride Type: </label>
                            <select className='formInput' value={rideType} onChange={(e) => setRideType(e.target.value)}>
                                <option value='all'>All</option>
                                <option value='adult'>Adult</option>
                                <option value='child'>Child</option>
                            </select>
                        </div>
                        <div>
                        <label>Choose Zone: </label>
                            <select className='formInput' value={ticketZoneType} onChange={(e) => setTicketZoneType(e.target.value)}>
                                <option value='all'>All</option>
                                <option value='a'>A</option>
                                <option value='b'>B</option>
                                <option value='c'>C</option>
                            </select>  
                        </div>
                        <div>
                            <label>Start Date: </label>
                            <input
                                type='date'
                                className='formInput'
                                value={ticketStartDate}
                                onChange={(e) => setTicketStartDate(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <label>End Date: </label>
                            <input
                                type='date'
                                className='formInput'
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}>
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
                        <th>Ride ID</th>
                        <th>Ride Name</th>
                        <th>Ride Type</th>
                        <th>Zone</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {ticketValue.map((data, index)=> {
                        return(
                            <tr key={index}>
                                <td type="text">{}</td>
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