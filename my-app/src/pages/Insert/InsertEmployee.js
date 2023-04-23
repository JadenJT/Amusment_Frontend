import React, { useState } from 'react';
import './InsertEmployee.css'
import { baseUrl } from '../../App';
function validateDigit(number) {
    const regex = /^[0-9\b]+$/;
    if (!regex.test(number)) {
        return false;
    } else {
        return true;
    }
};
function validateEmail(emailAddress) {
    if (emailAddress.length > 30) {
        return false;
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(emailAddress)) {
        return false;
    }
    return true;
};
function validateAddress(address) {
    const addressRegex = /^\d+\s+[a-zA-Z\s]+\s+[a-zA-Z]+\s+[a-zA-Z]{2}\s+\d{5}$/;
    if (address.length > 50 || !addressRegex.test(address)) {
        return false;
    } else {
        return true;
    }
};

const InsertEmployee = () => {
    //insert new employee
    const [workcode, setworkcode] = useState(null);
    const [address, setAddress] = useState('');
    const [emailAddress, setemailAddress] = useState('');
    const [ssn, setSsn] = useState('');
    const [dateofbirth, setDateOfBirth] = useState('');

    //error messages
    const [workCodeError, setworkCodeError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [emailAddressError, setEmailAddressError] = useState('');
    const [ssnError, setSSNError] = useState('');
    const [showErroBox, setShowErrorBox] = useState(false);

    //error margins
    const [workcodeErrorMarginBottom, setworkCodeErrorMarginBottom] = useState('1em');
    const [addressErrorMarginBottom, setaddressErrorMarginBottom] = useState('1em');
    const [emailAddressErrorMarginBottom, setemailAddressErrorMarginBottom] = useState('1em');
    const [ssnErrorMarginBottom, setssnErrorMarginBottom] = useState('1em');

    //handle functions
    const handleWorkCode = (e) => {
        const workcode = e.target.value;
        setworkcode(workcode);
        if (!validateDigit(workcode)) {
            setworkCodeError("Please enter a valid work code digit.");
            setworkCodeErrorMarginBottom('1em');
        } else {
            setworkCodeError('');
            setworkCodeError('');
        }
    };
    const handleAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
        if (address.length > 50 || !validateAddress(address)) {
            setAddressError("Please enter a valid address no more than 50 characters");
            setaddressErrorMarginBottom('1em');
        } else {
            setAddressError('');
            setaddressErrorMarginBottom('');
        }
    };
    const handleEmail = (e) => {
        const emailAddress = e.target.value;
        setemailAddress(emailAddress);
        if (!validateEmail(emailAddress)) {
            setEmailAddressError("Please enter a valid email address.");
            setemailAddressErrorMarginBottom('1em');
        } else {
            setEmailAddressError('');
            setemailAddressErrorMarginBottom('');
        }
    };
    const handleSSN = (e) => {
        const ssn = e.target.value;

        if (!validateDigit(ssn)) {
            setSSNError("Please enter a valid SSN.");
            setssnErrorMarginBottom('1em');
        } else {
            setSSNError('');
            setssnErrorMarginBottom('');
        }
        if (ssn.length > 9) {
            ssn = ssn.slice(0, 8);
        }
        setSsn(ssn);
    };
    const handleDOB = (e) => {
        setDateOfBirth(e.target.value);
    };

    const handleFormOnSubmit = async (e) => {
        e.preventDefault();

        if (workCodeError || !workcode || addressError || !address || emailAddressError || !emailAddress || ssnError || !ssn || !dateofbirth) {
            setShowErrorBox(true);
            return;
        } else {
            const employeeData = {
                work_code: workcode,
                address: address,
                email: emailAddress,
                ssn: ssn,
                b_date: dateofbirth,
            };

            await fetch(`${baseUrl}/employee/add`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employeeData)
            });
            //haven't tested fetch. but need to rest the form after submission
            //call restform();
        }
    };

    return (
        <div>
            <div className='admin-insert-body'>
                <div className='admin-insert-cover'>
                    <h1 className='admin-insert-title'>Add new Employee</h1>
                    <form className='admin-insert-form' onSubmit={handleFormOnSubmit}>

                        <h3 className='option-title'>Enter Work code:</h3>
                        <input type='number' placeholder='Enter work code' className='option-input' value={workcode} onChange={handleWorkCode} style={{ marginBottom: workcodeErrorMarginBottom }}></input>
                        <div className='admin-error'>{workCodeError}</div>

                        <h3 className='option-title'>Enter Address:</h3>
                        <p style={{ color: 'black', fontSize: '14px' }}> format: 1234 Umazing St Houston Tx 12345</p>
                        <input type='text' placeholder='Street Address' className='option-input' value={address} onChange={handleAddress} style={{ marginBottom: addressErrorMarginBottom }}></input>
                        <div className='admin-error'>{addressError}</div>

                        <h3 className='option-title'>Enter Email:</h3>
                        <input type='text' placeholder='youremail@gmail.com' className='option-input' value={emailAddress} onChange={handleEmail} style={{ marginBottom: emailAddressErrorMarginBottom }}></input>
                        <div className='admin-error'>{emailAddressError}</div>

                        <h3 className='option-title'>Enter SSN:</h3>
                        <input type='text' placeholder='Enter SSN' className='option-input' value={ssn} onChange={handleSSN} style={{ marginBottom: ssnErrorMarginBottom }}></input>
                        <div className='admin-error'>{ssnError}</div>

                        <h3 className='option-title'>Enter Date of Birth:</h3>
                        <input type='date' placeholder='Enter date of birth' className='option-input' value={dateofbirth} onChange={handleDOB}></input>

                        <button className='admin-insert-button'>
                            submit
                        </button>
                        {showErroBox && (
                            <div>
                                <div className='error-box-overlay'></div>
                                <div className='error-box'>
                                    <h3 className='error-box-text'>Error</h3>
                                    <p className='error-box-text'>Please correct the errors and try again.</p>
                                    <ul className='error-box-ul'>
                                        {((!workcode || !address || !emailAddress || !ssn || !dateofbirth) && <li>Please enter valid inputs.</li>)}
                                        {(!validateDigit(workcode) && <li>Please enter a valid workcode.</li>)}
                                        {(!validateDigit(ssn) && <li>Please select a valid ssn.</li>)}
                                        {(!validateEmail(emailAddress) && <li>Please enter a valid email address.</li>)}
                                        {(!validateAddress(address) && <li>Please enter a valid address.</li>)}
                                        <button className='return-button' onClick={() => setShowErrorBox(false)}>return</button>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InsertEmployee