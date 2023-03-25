import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Register from './pages/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Help from './pages/help';
import Login from './pages/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
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
   
 
);

