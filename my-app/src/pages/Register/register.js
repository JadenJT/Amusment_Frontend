import React, { useState } from 'react';
import { BrowserRouter as router, Switch, Route} from 'react-router-dom';
import { render } from 'react-dom';

const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const Register = () => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [middleInitialValue, setMiddleInitialValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  
  const handlePhoneNumber = (e) => {
    const phoneNumberRegex = /^[0-9\b]+$/;
    if (e.target.value.length >= 11) return;
    if (e.target.value === "" || phoneNumberRegex.test(e.target.value)) {
      setPhoneNumberValue(e.target.value);
    }
  };

  /**
   * We need to figure out how to create a section where
   * it checks the email to see if it's valid. There is a 
   * way to check it once the form is submitted, but would
   * rather check when there is a constant update.
   * 
   * Put this into <input/>
   * value={emailValue}
     onChange={handleEmail} 
   * 
   */
  // const [emailValue, setEmailValue] = useState("");
  // const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  // const handleEmail = (e) => {
  //   if(e.target?.value && e.target.value.match(isValidEmail)){
  //     setEmailValue(e.target.value);
  //   }
  // }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const data = {
      // firstName: 
      // lastName
    }

    // axios.post('http://your-url.com', data)
    //     .then((res) => {
    //         console.log(res.data)
    //     }).catch((error) => {
    //         console.log(error)
    //     });
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          <p>
            Full Name:
            <label>
              <input name="firstName" 
                    required 
                    placeholder='First Name'
                    value={firstNameValue}
                    onChange={setFirstNameValue}
                    />
            </label>
            <label>
              <input name="middleInitial" 
                    maxLength={1} 
                    placeholder='Middle Initial' 
                    value={middleInitialValue}
                    onChange={setMiddleInitialValue}
                    />
            </label>
            <label>
              <input name="lastName" 
                    required 
                    placeholder='Last Name' 
                    value={lastNameValue}
                    onChange={setLastNameValue}
                    />
            </label>
          </p>
        </div>
        <div>
          <p>
            Phone Number:
            <label>
              <input name="phoneNumber" 
                    required 
                    placeholder="Number" 
                    value={phoneNumberValue}
                    onChange={handlePhoneNumber}
                    />
            </label>
          </p>
        </div>
        <div>
          <p>
            Email Address
            <label>
              <input name="emailAddress" 
                    required 
                    maxLength={30}
                    placeholder="email address"
                    value={emailValue}
                    onChange={setEmailValue}
                    // onChange={handleEmail}
                    />
            </label>
          </p>
        </div>
        <div>
          <p>
            Password
            <label>
              <input name="password" 
                    required 
                    maxLength={25}
                    // type="password"
                    placeholder="password"
                    value={passwordValue}
                    onChange={setPasswordValue}
                    />
            </label>
          </p>
        </div>
      </form>
    </>
  );
};
  
export default Register;