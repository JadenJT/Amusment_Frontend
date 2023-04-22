import React, { useState, useEffect } from 'react';
import './Report.css'

export default function IncidentReport(){

    const [dbValue, setDBValue] = useState([]);
    //Shows Table
    const [show, setShow] = useState(false);
    //Shows Data
    const [showData, setShowData] = useState(false);
    //Error Messages
    const[errIncidentStartDate, setErrIncidentStartDate] = useState("");    
    const[errIncidentStartMargin, setErrIncidentStartMargin] = useState("");
    const[errIncidentEndDate, setErrIncidentEndDate] = useState("");
    const[errIncidentEndMargin, setErrIncidentEndMargin] = useState("");
    //Report Inputs
    let [inputEmail, setInputEmail] = useState("");
    let [inputStartDate, setInputStartDate] = useState("");
    let [inputEndDate, setInputEndDate] = useState("");

    const getIncidentData = async () => {
        let incdMail = inputEmail;
        let sDate = inputStartDate;
        let eDate = inputEndDate;

        if(incdMail === '') incdMail = null;
        if(sDate === '') sDate = null;
        if(eDate === '') eDate = null;

        const incidentFormData = {
            email: incdMail,
            start_date: sDate,
            end_date: eDate
        }        
        const response = await fetch('http://localhost:8080/incident/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(incidentFormData)
            });
        const responseData = await response.json();

        setDBValue(responseData);
    }
    //Get the data first to build the report requirements
    getIncidentData();

    const incidentSubmit = async (e)=> {        
        e.preventDefault();        

        //Checks for both dates
        if(inputStartDate === '' && inputEndDate !== ''){
            //error, tell user to enter START 
            setErrIncidentStartDate("Please enter a start date.");
            setErrIncidentStartMargin(".25em");
            setErrIncidentEndDate("");
            setErrIncidentEndMargin("");

            setShow(false);
        }
        else if(inputStartDate !== '' && inputEndDate === ''){
            //error, tell user to enter END
            setErrIncidentStartDate("");
            setErrIncidentStartMargin("");
            setErrIncidentEndDate("Please enter a end date.");
            setErrIncidentEndMargin(".25em");

            setShow(false);
        }
        else {
            setErrIncidentStartDate("");
            setErrIncidentStartMargin("");
            setErrIncidentEndDate("");
            setErrIncidentEndMargin("");

            setShow(true);

            //See if any data is available
            if(dbValue.length > 0){
                setShowData(true);
            }
            else
                setShowData(false);
        }
    }

    return (
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
                                value={inputEmail}
                                onChange={(e) => setInputEmail(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <h3>Start Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={inputStartDate}
                                onChange={(e) => setInputStartDate(e.target.value)}
                                style={{marginBottom: errIncidentStartMargin}}>
                            </input>
                            <div className='errIncidentDate'>{errIncidentStartDate}</div>
                        </div>
                        <div>
                            <h3>End Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={inputEndDate}
                                onChange={(e) => setInputEndDate(e.target.value)}
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
                <div className='tableCard'>
                    <div className='searchForm'>
                        <span className='lookUp'>INC_EMAIL: </span> {inputEmail}&ensp;
                        <span className='lookUp'>INC_DATE: </span> {inputStartDate} - {inputEndDate}&ensp; 
                    </div>
                    {showData?
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
                                {dbValue.map((data, index)=> {
                                        return(
                                            <tr key={index}>
                                                <td type="text">{data.job_code}</td>
                                                <td type="text">{data.start_date}</td>
                                                <td type="text">{data.job_location}</td>
                                                <td type="text">{data.description}</td>
                                            </tr>
                                    )
                                })}
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