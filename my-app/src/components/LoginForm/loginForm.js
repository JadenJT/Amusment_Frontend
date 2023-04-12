import "./loginForm.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from '../../tokenhelpers/helpers';


function validateEmail(userEmail) {
  if (userEmail.length === 0 || userEmail.length > 30) {
    return false;
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(userEmail)) {
    return false;
  }
  return true;
}

function validatePassword(userPassword) {
  if (userPassword.length === 0 || userPassword.length > 30) {
    return false;
  }
  return true;
}


const Loginform = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    const useremail = event.target.value;
    setEmailValue(useremail);
    if (!validateEmail(useremail)) {
      setEmailError("Please enter a valid email with no more than 30 characters");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const userpass = event.target.value;
    setPasswordValue(userpass);
    if (!validatePassword(userpass)) {
      setPasswordError("Please enter a valid password no more than 30 characters");
    } else {
      setPasswordError("");
    }
  };


  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const validEmail = validateEmail(emailValue);
    const validPassword = validatePassword(passwordValue);

    if (!validEmail) {
      alert("Please correct the error with your Email.");
      return;
    }
    if (!validPassword) {
      alert("Please correct the error with your Password.");
      return;
    }

    const personData = {
      email: emailValue,
      password: passwordValue,
    };

    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(personData)
    });
    const responseData = await response.json();
    setToken(responseData.item);
    navigate('/');
    window.location.reload();
  };

  return (
    <div >
      <form onSubmit={handleOnSubmit} className="cover">
        <h1 className='login-font'>Login</h1>

        <input type="text" placeholder="Email" className='input-login' value={emailValue} onChange={handleEmailChange} />
        <div className='error'>{emailError}</div>

        <input type="password" placeholder="Password" className='input-login' value={passwordValue} onChange={handlePasswordChange} />
        <div className='error'>{passwordError}</div>
        <button className="login-btn">Login</button>
      </form>

    </div>

  );
};

export default Loginform;