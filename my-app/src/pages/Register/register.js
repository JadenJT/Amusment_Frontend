import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { render } from 'react-dom';
import {Link } from 'react-router-dom';
import './register.css'

function validateFirstName(firstname){
  if(firstname.length === 0 || firstname.length > 15){
    return false;
  }
  const regex = /^[a-zA-Z]+$/;
  if(!regex.test(firstname)){
    return false;
  }
  return true;
}

function validateMiddleInitial(midint){
  if(midint.length === 0){
    return true; 
  }
  if(midint.length > 1){
    return false;
  }
  const regex = /^[a-zA-Z]+$/;
  if(!regex.test(midint)){
    return false;
  }
  return true;
}

function validateLastName(lastname){
  if(lastname.length === 0 || lastname.length > 15){
    return false;
  }
  const regex = /^[a-zA-Z]+$/;
  if(!regex.test(lastname)){
    return false;
  }
  return true;
}

function validatePhoneNumber(phoneNum){
  if(phoneNum.length < 10 || phoneNum.length > 10){
    return false;
  }
  const regex = /^[0-9\b]+$/;
  if(!regex.test(phoneNum)){
    return false;
  }
  return true;
}

function validateEmail(userEmail){
  if(userEmail.length === 0 || userEmail.length > 30){
    return false;
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if(!regex.test(userEmail)){
    return false;
  }
  return true;
}

function validatePassword(userPassword){
  if(userPassword.length === 0 || userPassword.length > 30){
    return false;
  }
  return true; 
}

const Register = () => {
  const [firstNameValue, setFirstNameValue] = useState("");
  let [middleInitialValue, setMiddleInitialValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  //error messages
  const [firstNameError, setFirstNameError] = useState("");
  const [middleInitialError, setMiddleInitialError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //show password
  const[showPassword, setShowPassword] = useState(false);

  //handleChange functions
  const handleFirstNameChange = (event) =>{
    const firstName = event.target.value;
    setFirstNameValue(firstName);
    if(!validateFirstName(firstName)){
      setFirstNameError("Please enter a valid first name with no more than 15 characters");
    }else{
      setFirstNameError("");
    }
  }

  const handleMiddleInitialChange = (event) => {
    const middleName = event.target.value;
    setMiddleInitialValue(middleName);
    if(!validateMiddleInitial(middleName)){
      setMiddleInitialError("Please enter a valid middle name initial no more than 1 character");
    }else{
      setMiddleInitialError("");
    }
    if(middleName === ""){
      setMiddleInitialError("");
    }
  }

  const handleLastNameChange = (event) => {
    const lastName = event.target.value;
    setLastNameValue(lastName);
    if(!validateLastName(lastName)){
      setLastNameError("Please enter a valid first name with no more than 15 characters");
    }else{
      setLastNameError("");
    }
  }

  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    setPhoneNumberValue(phoneNumber);
    if(!validatePhoneNumber(phoneNumber)){
      setPhoneNumberError("Please enter a valid phone number with no more/no less than 10 digits");
    }else{
      setPhoneNumberError("");
    }
  }
  
  const handleEmailChange = (event) => {
    const useremail = event.target.value;
    setEmailValue(useremail);
    if(!validateEmail(useremail)){
      setEmailError("Please enter a valid email with no more than 30 characters");
    }else{
      setEmailError("");
    }
  }

  const handlePasswordChange = (event) =>{
    const userpass = event.target.value;
    setPasswordValue(userpass);
    if(!validatePassword(userpass)){
      setPasswordError("Please enter a valid password no more than 30 characters");
    }else{
      setPasswordError("");
    }
  }

  //submit form
  const handleOnSubmit = async (event) => {
    event.preventDefault();
  
    const validFirstName = validateFirstName(firstNameValue);
    const validMiddleInitial = validateMiddleInitial(middleInitialValue);
    const validLastName = validateLastName(lastNameValue);
    const validPhoneNumber = validatePhoneNumber(phoneNumberValue);
    const validEmail = validateEmail(emailValue);
    const validPassword = validatePassword(passwordValue);

    if (!validFirstName || !validMiddleInitial || !validLastName || !validPhoneNumber || !validEmail || !validPassword) {
      alert("Please correct the errors and try again.");
      return;
    }
    if (middleInitialValue == "") middleInitialValue = null;
    const personData = {
      f_name: firstNameValue,
      m_name: middleInitialValue,
      l_name: lastNameValue,
      phone_number: phoneNumberValue,
      email: emailValue,
      password: passwordValue,
    };
    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personData)
      });
  
      const responseData = await response.json();
      console.log(responseData);
      //driect to homepage after login
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='register-body'>
      <div className='register-cover'>
        <h1 className='register-title'>Register Here</h1>
        <p className='register-title'>We are thrilled to have you join Umazing!</p>
        
        <form onSubmit={handleOnSubmit}>
          <h3 className='register-title'>Full Name: </h3>
          <div className='person-info'>
            <input type='text' placeholder='Frist Name' className='register-input' value={firstNameValue} onChange={handleFirstNameChange}></input>
            <div className='error'>{firstNameError}</div>
          </div>

          <div className='person-info'>
            <input type='text' placeholder='Middle Initial' className='register-input' value={middleInitialValue} onChange={handleMiddleInitialChange}></input>
            <div className='error'>{middleInitialError}</div>
          </div>

          <div className='person-info'>
            <input type='text' placeholder='Last Name' className='register-input' value={lastNameValue} onChange={handleLastNameChange}></input>
            <div className='error'>{lastNameError}</div>
          </div>
        

          <h3 className='register-title'>Phone Number: </h3>
          <div className='person-info'>
            <input type='text' placeholder='Phone Number' className='register-input' value={phoneNumberValue} onChange={handlePhoneNumberChange}></input>
            <div className='error'>{phoneNumberError}</div>
          </div>

          <h3 className='register-title'>Email: </h3>
          <div className='person-info'>
            <input type='text' placeholder='youremail@gmail.com' className='register-input' value={emailValue} onChange={handleEmailChange}></input>
            <div className='error'>{emailError}</div>
          </div>

          <h3 className='register-title'>Password: </h3>
          <div className='person-info-password'>
            <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='register-input' value={passwordValue} onChange={handlePasswordChange}></input>
            <button type='button' onClick={() => setShowPassword(!showPassword)} className='password-toggle-button'>
              {showPassword ? 'Hide' : 'Show'}
            </button>
            <div className='error'>{passwordError}</div>
          </div>

          <button className='register-button'>Register</button>

        </form>

        <div className='login-link'>
          Already have an account? <Link to='/login'>Login here.</Link>
        </div>

      </div>

    </div>
  );
};
  
export default Register;