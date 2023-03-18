import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blogs from './pages/blogs';
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
    </Route>
  </Routes>
</BrowserRouter>
   
 
);

