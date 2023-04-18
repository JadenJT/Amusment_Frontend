import React, { useState, useEffect } from 'react';
import './Report.css'

export default function Home(){
    const [ticketValue, setTicketValue] = useState([]);

    const [ticketRide, setTicketRide] = useState("");
    const [ticketRideType, setTicketRideType] = useState("");
    const [ticketZoneType, setTicketZoneType] = useState("");
    const [ticketStartDate, setTicketStartDate] = useState("");
    const [ticketEndDate, setTicketEndDate] = useState("");

    const ticketSubmit = (e)=> {
        e.preventDefault();


    }

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
                            <select className='formInput' value={ticketRide} onChange={(e) => setTicketRide(e.target.value)}>
                                <option value='all'>All</option>
                                <option value='ride1'>Ride1</option>
                                <option value='ride2'>Ride2</option>
                                <option value='ride3'>Ride3</option>
                            </select>
                        </div>
                        <div>
                            <h3>Ride Type: </h3>
                            <select className='formInput' value={ticketRideType} onChange={(e) => setTicketRideType(e.target.value)}>
                                <option value='all'>All</option>
                                <option value='adult'>Adult</option>
                                <option value='child'>Child</option>
                            </select>
                        </div>
                        <div>
                        <h3>Choose Zone: </h3>
                            <select className='formInput' value={ticketZoneType} onChange={(e) => setTicketZoneType(e.target.value)}>
                                <option value='all'>All</option>
                                <option value='a'>A</option>
                                <option value='b'>B</option>
                                <option value='c'>C</option>
                            </select>  
                        </div>
                        <div>
                            <h3>Start Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={ticketStartDate}
                                onChange={(e) => setTicketStartDate(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <h3>End Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={ticketEndDate}
                                onChange={(e) => setTicketEndDate(e.target.value)}>
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
                                <td type="text">{data.ride_name}</td>
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