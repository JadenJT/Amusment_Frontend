import React from 'react';
import Loginform from '../../components/LoginForm/loginForm';
import "./login.css";
import { BrowserRouter as router, Routes, Route} from 'react-router-dom';
const Login = () => {
  return (
   <div className='Login'>
    <Loginform />
   </div>
  );
};
  
export default Login;