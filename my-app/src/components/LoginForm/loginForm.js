import React, { useState } from 'react';
import "./loginForm.css"


const Loginform = () => {

const [popupStyle, showPopup] =useState("hide")
const popup = ()=> {
  showPopup("login-popup")
  setTimeout(() => showPopup("hide"),3000)
}
  return (
   <div className="cover">
    <h1 className='login-font'>Login</h1>
    <input type="text" placeholder="Username" className='input-login'/>
    <input type="password" placeholder="Password"className='input-login'/>
    <div className="login-btn" >Login</div>
    
    <p className='login-font'>Or login using</p>

    <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
    </div>

    <div className={popupStyle}>
      <h3 >Login failed</h3>
      <p>username or password incorrect</p>
    </div>
   </div>
  )
}

export default Loginform;