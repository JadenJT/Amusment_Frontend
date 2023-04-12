import React, { useState } from 'react';
import './Report.css'

export default function Home(){
    const [firstNameValue, setFirstNameValue] = useState("");

    return(
        <>
            <div className='reportCard'>
                <div>
                    <h1>Maintenance Report</h1>
                </div>
                <form>
                    <div className='formCard'>
                        <div>
                            <label>Enter Ride ID: </label>
                            <input type='text' className='formInput' placeholder='Ride ID'></input>
                        </div>
                        <div>
                            <label>Choose Zone: </label>
                            <select className='formInput'>
                                <option value='a'>A</option>
                                <option value='b'>B</option>
                                <option value='c'>C</option>
                            </select>                    
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
                        <th>Zone</th>
                        <th>Employee Name</th>
                        <th>Scheduled Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>temp ride</td>
                        <td>temp zone</td>
                        <td>temp employee</td>
                        <td>temp date</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}