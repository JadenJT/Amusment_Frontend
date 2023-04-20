import React, { useState, useEffect } from 'react';
import './Report.css'

export default function Home(){
    const [incidentValue, setIncidentValue] = useState([]);
    const [show, setShow] = useState(false);

    const[errIncidentStartDate, setErrIncidentStartDate] = useState("");    
    const[errIncidentStartMargin, setErrIncidentStartMargin] = useState("");
    const[errIncidentEndDate, setErrIncidentEndDate] = useState("");
    const[errIncidentEndMargin, setErrIncidentEndMargin] = useState("");
    
    // let [incidentName, setIncidentName] = useState("");
    // let [incidentLocation, setIncidentLocation] = useState("");
    let [incidentEmail, setIncidentEmail] = useState("");
    let [incidentStartDate, setIncidentStartDate] = useState("");
    let [incidentEndDate, setIncidentEndDate] = useState("");

    const incidentSubmit = async (e)=> {        
        e.preventDefault();

        // if(incidentName === '') incidentName = null;
        // if(incidentLocation === '') incidentLocation = null;
        if(incidentEmail === '') incidentEmail = null;
        if(incidentStartDate === '') incidentStartDate = null;
        if(incidentEndDate === '') incidentEndDate = null;

        if(incidentStartDate == null && incidentEndDate != null){
            //error, tell user to enter START 
            setErrIncidentStartDate("Please enter a start date.");
            setErrIncidentStartMargin(".25em");
            setErrIncidentEndDate("");
            setErrIncidentEndMargin("");
            
            setShow(false);
        }
        else if(incidentStartDate != null && incidentEndDate == null){
            //error, tell user to enter END
            setErrIncidentStartDate("");
            setErrIncidentStartMargin("");
            setErrIncidentEndDate("Please enter a end date.");
            setErrIncidentEndMargin(".25em");

            setShow(false);
        }
        else{
            setErrIncidentStartDate("");
            setErrIncidentStartMargin("");
            setErrIncidentEndDate("");
            setErrIncidentEndMargin("");
            
            setShow(true);

            const incidentFormData = {
                // name: incidentName,
                // date: incidentDate,
                // location: incidentLocation
            }
            
            const response = await fetch('http://localhost:8080/incident/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(incidentFormData)
                });
            setIncidentValue(await response.json());
        }
    }

    return(
        <>
            <div className='reportCard'>
                <div>
                    <h1>Incident Report</h1>
                </div>
                <form onSubmit={incidentSubmit}>
                    <div className='formCard'>
                        <div>
                            <h3>Email: </h3>                           
                            <input
                                type='input'
                                className='formInput'
                                placeholder='example@email.com'
                                value={incidentEmail}
                                onChange={(e) => setIncidentEmail(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <h3>Start Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={incidentStartDate}
                                onChange={(e) => setIncidentStartDate(e.target.value)}
                                style={{marginBottom: errIncidentStartMargin}}>
                            </input>
                            <div className='errIncidentDate'>{errIncidentStartDate}</div>          
                        </div>
                        <div>
                            <h3>End Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={incidentEndDate}
                                onChange={(e) => setIncidentEndDate(e.target.value)}
                                style={{marginBotton: errIncidentEndMargin}}>
                            </input>
                            <div className='errIncidentDate'>{errIncidentEndDate}</div>
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
                            <span className='lookUp'>INC_EMAIL: </span> {incidentEmail}&ensp;
                            <span className='lookUp'>INC_DATE: </span> {incidentStartDate} - {incidentEndDate}&ensp; 
                        </div>
                        <table className='tableInfo'>
                            <thead>
                                <tr>
                                    <th>Incident Name</th>
                                    <th>Incident Date</th>
                                    <th>Incident Location</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {incidentValue.map((data, index)=> {
                                        return(
                                            <tr key={index}>
                                                <td type="text">{data.job_code}</td>
                                                <td type="text">{data.zone}</td>
                                                <td type="text">{data.ride_name}</td>
                                                <td type="text">{data.incidentLocation}</td>
                                                <td type="text">{data.incidentDescription}</td>
                                            </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </>
            :null}
        </>
    )
}