import React, { useState } from 'react';
import "./loginForm.css"
import { Link } from 'react-router-dom';


const Loginform = () => {

  const [popupStyle, showPopup] = useState("hide")
  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }
  return (
    <div className="cover">
      <h1 className='login-font'>Login</h1>
      <input type="text" placeholder="Username" className='input-login' />
      <input type="password" placeholder="Password" className='input-login' />
      <div className="login-btn" >Login</div>
    </div>
  )
}

export default Loginform;