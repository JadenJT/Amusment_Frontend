import './register.css';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../tokenhelpers/helpers';
import { UserContext, baseUrl } from '../../App';


function validateFirstName(firstname) {
  if (firstname.length === 0 || firstname.length > 15) {
    return false;
  }
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(firstname)) {
    return false;
  }
  return true;
}

function validateMiddleInitial(midint) {
  if (midint.length === 0) {
    return true;
  }
  if (midint.length > 1) {
    return false;
  }
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(midint)) {
    return false;
  }
  return true;
}

function validateLastName(lastname) {
  if (lastname.length === 0 || lastname.length > 15) {
    return false;
  }
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(lastname)) {
    return false;
  }
  return true;
}

function validatePhoneNumber(phoneNum) {
  if (phoneNum.length < 10 || phoneNum.length > 10) {
    return false;
  }
  const regex = /^[0-9\b]+$/;
  if (!regex.test(phoneNum)) {
    return false;
  }
  return true;
}

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

const Register = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();
  const { setUser } = useContext(UserContext);

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

  //set margins
  const [firstNameMarginBottom, setFirstNameMarginBottom] = useState("1em");
  const [middleNameMarginBottom, setMiddleInitialMarginBottom] = useState("1em");
  const [lastNameMarginBottom, setLastNameMarginBottom] = useState("1em");
  const [phoneNumberMarginBottom, setPhoneNumberMarginBottom] = useState("1em");
  const [emailMarginBottom, setEmailMarginBottom] = useState("1em");
  const [passwordMarginBottom, setPasswordMarginBottom] = useState("1em");

  //show items
  const [showPassword, setShowPassword] = useState(false);
  const [errorBoxVisible, setErrorBoxVisible] = useState(false);

  //handleChange functions
  const handleFirstNameChange = (event) => {
    const firstName = event.target.value;
    setFirstNameValue(firstName);
    if (!validateFirstName(firstName)) {
      setFirstNameError("Please enter a valid first name with no more than 15 characters");
      setFirstNameMarginBottom("3em");
    } else {
      setFirstNameError("");
      setFirstNameMarginBottom("1em");
    }
  }

  const handleMiddleInitialChange = (event) => {
    const middleName = event.target.value;
    setMiddleInitialValue(middleName);
    if (!validateMiddleInitial(middleName)) {
      setMiddleInitialError("Please enter a valid middle name initial no more than 1 character");
      setMiddleInitialMarginBottom("3em");
    } else {
      setMiddleInitialError("");
      setMiddleInitialMarginBottom("1em");
    }
    if (middleName === "") {
      setMiddleInitialError("");
      setMiddleInitialMarginBottom("1em");
    }
  }

  const handleLastNameChange = (event) => {
    const lastName = event.target.value;
    setLastNameValue(lastName);
    if (!validateLastName(lastName)) {
      setLastNameError("Please enter a valid first name with no more than 15 characters");
      setLastNameMarginBottom("3em");
    } else {
      setLastNameError("");
      setLastNameMarginBottom("1em");
    }
  }

  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    setPhoneNumberValue(phoneNumber);
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError("Please enter a valid phone number with no more/no less than 10 digits");
      setPhoneNumberMarginBottom("3em");
    } else {
      setPhoneNumberError("");
      setPhoneNumberMarginBottom("1em");
    }
  }

  const handleEmailChange = (event) => {
    const useremail = event.target.value;
    setEmailValue(useremail);
    if (!validateEmail(useremail)) {
      setEmailError("Please enter a valid email with no more than 30 characters");
      setEmailMarginBottom("3em");
    } else {
      setEmailError("");
      setEmailMarginBottom("1em");
    }
  }

  const handlePasswordChange = (event) => {
    const userpass = event.target.value;
    setPasswordValue(userpass);
    if (!validatePassword(userpass)) {
      setPasswordError("Please enter a valid password no more than 30 characters");
      setPasswordMarginBottom("3em");
    } else {
      setPasswordError("");
      setPasswordMarginBottom("1em");
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
      setErrorBoxVisible(true);
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

    const response = await fetch(`${baseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(personData)
    });
    const responseData = await response.json();

    const info = {
      f_name: firstNameValue,
      role_type: 'customer',
      email: emailValue,
      token: responseData.item,
    }


    setUser(info);
    setToken(responseData.item);
    navigate('/');

    //direct to homepage after login
  };

  return (
    <div className='register-body'>
      <div className='register-cover'>
        <h1 className='register-title'>Register Here</h1>
        <p className='register-title'>We are thrilled to have you join Umazing!</p>

        <form onSubmit={handleOnSubmit}>
          <h3 className='register-title'>Full Name: </h3>
          <div className='person-info'>
            <input type='text' placeholder='Frist Name' className='register-input' value={firstNameValue} onChange={handleFirstNameChange} style={{ marginBottom: firstNameMarginBottom }}></input>
            <div className='error'>{firstNameError}</div>
          </div>

          <div className='person-info'>
            <input type='text' placeholder='Middle Initial' className='register-input' value={middleInitialValue} onChange={handleMiddleInitialChange} style={{ marginBottom: middleNameMarginBottom }}></input>
            <div className='error'>{middleInitialError}</div>
          </div>

          <div className='person-info'>
            <input type='text' placeholder='Last Name' className='register-input' value={lastNameValue} onChange={handleLastNameChange} style={{ marginBottom: lastNameMarginBottom }}></input>
            <div className='error'>{lastNameError}</div>
          </div>


          <h3 className='register-title'>Phone Number: </h3>
          <div className='person-info'>
            <input type='text' placeholder='Phone Number' className='register-input' value={phoneNumberValue} onChange={handlePhoneNumberChange} style={{ marginBottom: phoneNumberMarginBottom }}></input>
            <div className='error'>{phoneNumberError}</div>
          </div>

          <h3 className='register-title'>Email: </h3>
          <div className='person-info'>
            <input type='text' placeholder='youremail@gmail.com' className='register-input' value={emailValue} onChange={handleEmailChange} style={{ marginBottom: emailMarginBottom }}></input>
            <div className='error'>{emailError}</div>
          </div>


          <h3 className='register-title'>Password: </h3>
          <div className='person-info-password'>
            <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='register-input' value={passwordValue} onChange={handlePasswordChange} style={{ marginBottom: passwordMarginBottom }}></input>
            <button type='button' onClick={() => setShowPassword(!showPassword)} className='password-toggle-button'>
              {showPassword ? 'Hide' : 'Show'}
            </button>
            <div className='error'>{passwordError}</div>
          </div>

          <button className='register-button'>Register</button>
          {errorBoxVisible && (
            <div>
              <div className='error-box-overlay'></div>
              <div className="error-box">
                <h3 className='error-box-text'>Error</h3>
                <p className='error-box-text'>Please correct the errors and try again.</p>
                <ul className='error-box-ul'>
                  {(!validateFirstName(firstNameValue)) && <li>Please enter a valid first name</li>}
                  {(!validateMiddleInitial(middleInitialValue)) && <li>Please enter a valid middle name initial</li>}
                  {(!validateLastName(lastNameValue)) && <li>Please enter a valid last name</li>}
                  {(!validatePhoneNumber(phoneNumberValue)) && <li>Please enter a valid phone number</li>}
                  {(!validateEmail(emailValue)) && <li>Please enter a valid email</li>}
                  {(!validatePassword(passwordValue)) && <li>Please enter a valid password</li>}
                </ul>
                <button className='return-button' onClick={() => setErrorBoxVisible(false)}>return</button>
              </div>
            </div>
          )}
        </form>

        <div className='login-link'>
          Already have an account? <Link to='/login'>Login here.</Link>
        </div>

      </div>

    </div>
  );
};

export default Register;