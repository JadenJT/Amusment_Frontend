import React, { useState, useEffect } from 'react';
import './Report.css'

export default function TicketSalesReport(){
    const [ticketValue, setTicketValue] = useState([]);
    const [show, setShow] = useState(false);

    const[errTicketStartDate, setErrTicketStartDate] = useState("");    
    const[errTicketStartMargin, setErrTicketStartMargin] = useState("");
    const[errTicketEndDate, setErrTicketEndDate] = useState("");
    const[errTicketEndMargin, setErrTicketEndMargin] = useState("");

    let [ticketRide, setTicketRide] = useState("");
    let [ticketRideType, setTicketRideType] = useState("");
    let [ticketZoneType, setTicketZoneType] = useState("");
    let [ticketStartDate, setTicketStartDate] = useState("");
    let [ticketEndDate, setTicketEndDate] = useState("");

    const ticketSubmit = async (e)=> {
        e.preventDefault();

        if(ticketRide === 'all') ticketRide = null;
        switch(ticketRideType){
            case "all":
                ticketZoneType = null;
                break;
            case "adult":
                ticketZoneType = 45;
                break;
            case "child":
                ticketZoneType = 35;
                break;
        }
        if(ticketZoneType == 'all') ticketZoneType = null;     
        if(ticketStartDate == '') ticketStartDate = null;
        if(ticketEndDate == '') ticketEndDate = null;

        if(ticketStartDate == null && ticketEndDate != null){
            //error, tell user to enter START 
            setErrTicketStartDate("Please enter a start date.");
            setErrTicketStartMargin(".25em");
            setErrTicketEndDate("");
            setErrTicketEndMargin("");

            setShow(false);
        }
        else if(ticketStartDate != null && ticketEndDate == null){
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

            setShow(true);

            const ticketFormData = {
                ride_name: ticketRide,
                zone: ticketZoneType,
                ride_type: ticketRideType,  // (30 = Child, 45 = Adult)
                start_date: ticketStartDate, // (The times are 24Hr time.)
                end_date: ticketEndDate
            }
            
            const response = await fetch('http://localhost:8080/ticket/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ticketFormData)
                });
            setTicketValue(await response.json());
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
                                onChange={(e) => setTicketStartDate(e.target.value)}
                                style={{marginBottom: errTicketStartMargin}}>
                            </input>
                            <div className='errTicketDate'>{errTicketStartDate}</div>
                        </div>
                        <div>
                            <h3>End Date: </h3>
                            <input
                                type='date'
                                className='formInput'
                                value={ticketEndDate}
                                onChange={(e) => setTicketEndDate(e.target.value)}
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
                        <span className='lookUp'>RIDE_NAME:</span> {ticketRide}&emsp;
                        <span className='lookUp'>RIDE_TYPE:</span> {ticketRideType}&emsp;
                        <span className='lookUp'>ZONE:</span> {ticketZoneType}&emsp;
                        <span className='lookUp'>DATE:</span> {ticketStartDate} - {ticketEndDate}
                    </div>
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
                            {ticketValue.map((data, index)=> {
                                return(
                                    <tr key={index}>
                                        <td type="text">{data.ride_name}</td>
                                        <td type="text">{data.zone}</td>
                                        <td type="text">{data.ride_type}</td>
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
                                <td><h3>{ticketValue.length}</h3></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            :null}
        </>
    )
}