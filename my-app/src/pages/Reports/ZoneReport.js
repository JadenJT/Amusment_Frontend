import React, { useState } from 'react';
import './Report.css'

export default function Home(){
    const [firstNameValue, setFirstNameValue] = useState("");

    return(
        <>
            <div className='reportCard'>
            <div>
                <h1>Zone Report</h1>
            </div>
                <form>
                    <div className='formCard'>
                        <div>
                            <label>Choose Zone: </label>
                            <select className='formInput'>
                                <option value='all'>All</option>
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
                        <th>Concession</th>
                        <th>GiftShop</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>temp ride</td>
                        <td>temp concession</td>
                        <td>temp shop</td>
                        <td>temp date</td>
                        <td>temp amount</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}