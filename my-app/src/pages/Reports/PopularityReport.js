import React, { useState } from 'react';
import './Report.css'

export default function Home(){
    const [firstNameValue, setFirstNameValue] = useState("");

    return(
        <>
            <div className='reportCard'>
                <div>
                    <h1>Ride Popularity Report</h1>
                </div>
                <form>
                    <div className='formCard'>
                        <div>
                            <label>Enter Ride ID: </label>
                            <input type='text' className='formInput' placeholder='Ride ID'></input>
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