import React, { useState, useContext } from 'react';
import "./IncidentReportMaker.css";
import { UserContext, baseUrl } from '../../App';


function validateDescription(userDesc) {
    if (userDesc.length === 0 || userDesc.length > 750) return false;

    const regex = /^[.,a-zA-Z0-9!\s]+$/;
    if (!regex.test(userDesc)) return false;

    return true;
}


const IncidentReportMaker = () => {

    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [errorDescription, setErrorDescription] = useState('');
    const [marginBottomDescription, setMarginBottomDescription] = useState('1em');
    const { user } = useContext(UserContext);

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        if (!validateDescription(e.target.value)) {
            setErrorDescription("Invalid Description - Illegal character");
            setMarginBottomDescription('1em');
        } else {
            setErrorDescription("");
            setMarginBottomDescription('1em');
        }
    }
    const handleDateChange = (e) => { setDate(e.target.value); }

    const resetForm = () => {
        setDate('');
        setDescription('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validDescription = validateDescription(description);
        if (!validDescription) return setErrorDescription("Invald Description!")

        const incidentData = {
            email: user.email,
            description: description,
            date: date

        }
        const response = await fetch(`${baseUrl}/incident/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(incidentData)
        });
        resetForm();
    }

    return (
        <div>
            <div className='admin-edit-body'>
                <div className='admin-edit-cover'>
                    <form className='admin-edit-form' onSubmit={handleSubmit}>
                        <div className='admin-option-box'>
                            <h3 className='option-title'>Incident Description</h3>
                            <textarea placeholder='Enter description' className='option-input' value={description} onChange={handleDescriptionChange} style={{ marginBottom: marginBottomDescription, resize: 'vertical' }}></textarea>
                            <div className='admin-error'>{errorDescription}</div>
                            <h3 className='option-title'>Date of Incident</h3>
                            <input className='option-input' type='date' value={date} onChange={handleDateChange}></input>
                        </div>
                        <button className='admin-modify-button'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default IncidentReportMaker