
import React from 'react';
import './App.css';
import './pages/Register/register';
import Register from './pages/Register/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home/home";
import Help from './pages/help';
import Concessions from "./pages/Concessions/concessions";
import Login from './pages/Login/login';
import Rides from "./pages/Rides/rides";
import Zones from './pages/Zone/zone';

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
            <Route path="zone" element={<Zones />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;