import React, { useState, useEffect, useContext } from 'react';
import { UserContext, baseUrl } from '../../App';

function validateAddress(address) {
    const addressRegex = /^\d+\s+[a-zA-Z\s]+\s+[a-zA-Z]+\s+[a-zA-Z]{2}\s+\d{5}$/;
    if (address.length > 50 || !addressRegex.test(address)) {
        return false;
    } else {
        return true;
    }
};
function validatePhoneNum(number) {
    const regex = /^[0-9\b]+$/;
    if (!regex.test(number)) {
        return false;
    } else {
        return true;
    }
};

const EditEmployee = () => {
    const { user } = useContext(UserContext);
    let [address, setaddress] = useState('');
    let [phonenumber, setphonenumber] = useState('');

    //error messages
    let [addressError, setAddressError] = useState('');
    let [phonenumberError, setPhoneNumberError] = useState('');
    let [showErrorBox, setShowErrorBox] = useState(false);

    //margin bottom
    const [addressErorrMarginBottom, setAddressErorrMarginBottom] = useState('1em');
    const [phonenumberErrorMarginBottom, setphoneNumberErrorMarignBottom] = useState('1em');

    const handleaddressChange = (e) => {
        let address = e.target.value;
        setaddress(address);
        if (!validateAddress(address)) {
            setAddressError("Please enter a valid address.");
            setAddressErorrMarginBottom('1em');
        } else {
            setAddressError("");
            setAddressErorrMarginBottom('');
        }
    };

    const handlephonenumChange = (e) => {
        let phonenumberin = e.target.value;

        if (!validatePhoneNum(phonenumber)) {
            setPhoneNumberError("Please enter a valid phone number.");
            setphoneNumberErrorMarignBottom('1em');
        } else {
            setPhoneNumberError("");
            setphoneNumberErrorMarignBottom('');
        }
        if (phonenumberin.length > 10) {
            phonenumberin = phonenumberin.slice(0, 9);
        }
        setphonenumber(phonenumberin);
    };

    const resetForm = () => {
        setaddress('');
        setphonenumber('');
        setAddressError('');
        setPhoneNumberError('');
        setShowErrorBox(false);
        setAddressErorrMarginBottom('1em');
        setphoneNumberErrorMarignBottom('1em');
    };

    const handleEditOnSubmit = async (e) => {
        e.preventDefault();
        if (addressError || phonenumberError || (!address && !phonenumber)) {
            setShowErrorBox(true);
            return;
        } else {
            if (address == "") address = null;
            if (phonenumber == "") phonenumber = null;

            const employeeData = {
                email: user.email,
                phone_number: phonenumber,
                address: address,
            };

            await fetch(`${baseUrl}/employee/edit`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employeeData)
            });

            resetForm();
        }

    };

    return (
        <div>
            <div className='admin-edit-body'>
                <div className='admin-edit-cover'>
                    <h1 className='admin-edit-title'>Hello, {user.f_name}.</h1>
                    <br></br>
                    <h1 className='admin-edit-title'>Edit information:</h1>
                    <form className='admin-edit-form' onSubmit={handleEditOnSubmit}>
                        <h3 className='option-title'>Address:</h3>
                        <p style={{ color: 'black', fontSize: '14px' }}> format: 1234 Umazing St Houston Tx 12345</p>
                        <input type='text' placeholder='Enter new address' className='option-input' value={address} onChange={handleaddressChange} style={{ marginBottom: addressErorrMarginBottom }}></input>
                        <div className='admin-error'>{addressError}</div>

                        <h3 className='option-title'>Phone number:</h3>
                        <input type='text' placeholder='Enter phone number' className='option-input' value={phonenumber} onChange={handlephonenumChange} style={{ marginBottom: phonenumberErrorMarginBottom }}></input>
                        <div className='admin-error'>{phonenumberError}</div>

                        <button className='admin-modify-button'>
                            submit
                        </button>
                        {showErrorBox && (
                            <div>
                                <div className='error-box-overlay'></div>
                                <div className='error-box'>
                                    <h3 className='error-box-text'>Error</h3>
                                    <p className='error-box-text'>Please correct the errors and try again.</p>
                                    <ul className='error-box-ul'>
                                        {(addressError && <li>Please enter a valid address.</li>)}
                                        {(phonenumberError && <li>Please enter a valid phone number.</li>)}
                                        {((!phonenumber && !address) && <li>Please enter inputs to update information.</li>)}
                                        <button className='return-button' onClick={() => setShowErrorBox(false)}>return</button>
                                    </ul>
                                </div>
                            </div>
                        )

                        }
                    </form>
                </div>
            </div>
        </div>
    );
};
export default EditEmployee