
import React from 'react';
import './App.css';
import './pages/register';
import Register from './pages/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Help from './pages/help';
import Login from './pages/login';
import Rides from "./pages/rides";
import Concessions from "./pages/concessions";

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
      <Route path="rides" element={<Rides />} />
      <Route path="concessions" element={<Concessions />} />
    </Route>
  </Routes>
</BrowserRouter>
   
    </div>
  );
}

export default App;