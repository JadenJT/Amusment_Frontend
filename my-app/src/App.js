
import React from 'react';
import './App.css';
import './pages/register';
import Ride from './pages/Rides/rides';


import Register from './pages/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Help from './pages/help';
import Login from './pages/login';
import loginForm from './components/loginForm';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
  <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="help" element={<Help />} />
    </Route>
  </Routes>
</BrowserRouter>
   
    </div>
  );
}

export default App;