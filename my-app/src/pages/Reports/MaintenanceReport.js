import React, { useState, useEffect } from 'react';
import './Report.css'

export default function MaintenanceReport(){
    const [mainValue, setMainValue] = useState([]);
    const [show, setShow] = useState(false);

    const[errMainStartDate, setErrMainStartDate] = useState("");    
    const[errMainStartMargin, setErrMainStartMargin] = useState("");
    const[errMainEndDate, setErrMainEndDate] = useState("");
    const[errMainEndMargin, setErrMainEndMargin] = useState("");

    let [mainRide, setMainRide] = useState("");
    let [mainZoneType, setMainZoneType] = useState("");
    let [mainStartDate, setMainStartDate] = useState("");
    let [mainEndDate, setMainEndDate] = useState("");

    const maintenanceSubmit = async (e)=> {        
        e.preventDefault();

        let jCode = null;
        if(mainRide === '') mainRide = null;
        if(mainZoneType === '') mainZoneType = null;
        if(mainStartDate === '') mainStartDate = null;
        if(mainEndDate === '') mainEndDate = null;


        if(mainStartDate == null && mainEndDate != null){
            //error, tell user to enter START 
            setErrMainStartDate("Please enter a start date.");
            setErrMainStartMargin(".25em");
            setErrMainEndDate("");
            setErrMainEndMargin("");
            
            setShow(false);
        }
        else if(mainStartDate != null && mainEndDate == null){
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
            
            setShow(true);

            const maintenanceFormData = {
                job_code: jCode,
                ride_name: mainRide,
                zone: mainZoneType,
                start_date: mainStartDate,
                end_date: mainEndDate
            }
            
            const response = await fetch('http://localhost:8080/maintenance/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(maintenanceFormData)
                });
            setMainValue(await response.json());

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
                            <select className='formInput' value={mainRide} onChange={(e) => setMainRide(e.target.value)}>
                                <option value='all'>All</option>
                                <option value='ride1'>Ride1</option>
                                <option value='ride2'>Ride2</option>
                                <option value='ride3'>Ride3</option>
                            </select>
                        </div>
                        <div>
                            <h3>Choose Zone: </h3>
                            <select className='formInput' value={mainZoneType} onChange={(e) => setMainZoneType(e.target.value)}>
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
                                value={mainStartDate}
                                onChange={(e) => setMainStartDate(e.target.value)}
                                style={{marginBottom: errMainStartMargin}}>
                            </input>
                            <div className='errMainDate'>{errMainStartDate}</div>
                        </div>
                        <div>
                            <h3>End Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={mainEndDate}
                                onChange={(e) => setMainEndDate(e.target.value)}
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
                <>
                    <div className='tableCard'>
                        <div className='searchForm'>
                            <span className='lookUp'>RIDE_NAME:</span> {mainRide}&ensp;
                            <span className='lookUp'>ZONE:</span> {mainZoneType}&ensp;
                            <span className='lookUp'>DATE:</span> {mainStartDate} - {mainEndDate} 
                        </div>
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
                                {mainValue.map((data, index)=> {
                                        return(
                                            <tr key={index}>
                                                <td type="text">{data.job_code}</td>
                                                <td type="text">{data.zone}</td>
                                                <td type="text">{data.ride_name}</td>
                                                <td type="text">{data.mainStartDate}</td>
                                                <td type="text">{data.mainEndDate}</td>
                                            </tr>
                                    )
                                })}
                                <tr>
                                <td><h3>Total Tickets</h3></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><h3>{mainValue.length}</h3></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            :null}
        </>
    )
}