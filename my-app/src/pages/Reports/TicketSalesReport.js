import React, { useState } from 'react';
import './Report.css'

export default function Home(){
    const [firstNameValue, setFirstNameValue] = useState("");

    return(
        <>
            <div className='reportCard'>
                <div>
                    <h1>Ticket Sales Report</h1>
                </div>
                <form>
                    <div className='formCard'>
                        <div>
                            <label>Ride ID: </label>
                            <input type='text' className='formInput' placeholder='Ride ID'></input>
                        </div>
                        <div>
                            <label>Ride Name: </label>
                            <input type='text' className='formInput' placeholder='Ride Name'></input>
                        </div>
                        <div>
                            <label>Ride Type: </label>
                            <select className='formInput'>
                                <option value='all'>All</option>
                                <option value='adult'>Adult</option>
                                <option value='child'>Child</option>
                            </select>
                        </div>
                        <div>
                            <label>Zone: </label>
                            <input type='text' className='formInput' placeholder='Zone'></input>
                        </div>
                        <div>
                            <label>Start Date: </label>
                            <input type='date' className='formInput' min={'2000-01-01'}></input>
                        </div>
                        <div>
                            <label>End Date: </label>
                            <input type='date' className='formInput'></input>
                        </div>
                    </div>
                    
                    <button className='submit'>Submit</button>
                </form>
            </div>
            
            <br></br>

            <table className='tables'>
                <thead>
                    <tr>
                        <th>Ride</th>
                        <th>Date</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>temp ride</td>
                        <td>temp date</td>
                        <td>temp amount</td>
                    </tr>
                    <tr>
                        <td>temp ride</td>
                        <td>temp date</td>
                        <td>temp amount</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}