import React, { useState } from 'react';
import './Report.css'

export default function Home(){
    const [firstNameValue, setFirstNameValue] = useState("");

    return(
        <>
            <div className='reportCard'>
            <div>
                <h1>Employee Report</h1>
            </div>
                <form>
                    <div className='formCard'>
                        <div>
                            <label>First Name: </label>
                            <input type='text' className='formInput' placeholder='Firstname'></input>
                        </div>
                        <div>
                            <label>Last Name: </label>
                            <input type='text' className='formInput' placeholder='Lastname'></input>
                        </div>
                        <div>
                            <label>Job Location: </label>
                            <input type='text' className='formInput' placeholder='Location'></input>
                        </div>
                        <div>
                            <label>Job Role: </label>
                            <input type='text' className='formInput' placeholder='Role'></input>
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type='text' className='formInput' placeholder='employee@mail.com'></input>
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