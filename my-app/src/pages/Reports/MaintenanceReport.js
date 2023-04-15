import React, { useState, useEffect } from 'react';
import './Report.css'

export default function Home(){
    const [mainValue, setMainValue] = useState([]);

    const [mainRideID, setMainRideID] = useState("");
    const [mainZoneType, setMainZoneType] = useState("");
    const [mainStartDate, setMainStartDate] = useState("");
    const [mainEndDate, setMainEndDate] = useState("");

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
            setMainValue(data)
        })
    }

    useEffect(() => {
        fetchFunc()
    }, []);

    const maintenanceSubmit = (e)=> {
        e.preventDefault();

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
                            <label>Ride ID: </label>
                            <input
                                type='text'
                                className='formInput'
                                placeholder='Ride ID'
                                value={mainRideID}
                                onChange={(e) => setMainRideID(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <label>Choose Zone: </label>
                            <select className='formInput' value={mainZoneType} onChange={(e) => setMainZoneType(e.target.value)}>
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
                                value={mainStartDate}
                                onChange={(e) => setMainStartDate(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <label>End Date: </label>
                            <input
                                type='date'
                                className='formInput'
                                value={mainEndDate}
                                onChange={(e) => setMainEndDate(e.target.value)}>
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
                        <th>Zone</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {mainValue.map((data, index)=> {
                            return(
                                <tr key={index}>
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