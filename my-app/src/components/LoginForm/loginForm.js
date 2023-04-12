import React, { useEffect, useState } from 'react';
import "./loginForm.css"




const Loginform = () => {


  return (
    <div >
      <form className="cover">
        <h1 className='login-font'>Login</h1>
        <label for='email'>Email</label>
        <input type="text" placeholder="Username" className='input-login' />
        <input type="password" placeholder="Password" className='input-login' />
        <div className="login-btn" >Login</div>
      </form>

    </div>

  )
}

export default Loginform;