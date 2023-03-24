import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blogs from './pages/blogs';
import Ride from './pages/Rides/rides'
import Register from './pages/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
  <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="rides" element={<Ride />} />
      <Route path="register" element={<Register />} />
    </Route>
  </Routes>
</BrowserRouter>
   
 
);

