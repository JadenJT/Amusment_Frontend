
import React from 'react';
import './App.css';
import './pages/Register/register';
import Register from './pages/Register/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import Layout from "./components/layout";
import Home from "./pages/Home/home";
import Error404 from './pages/Error404/error404';
import Concessions from "./pages/Concessions/concessions";
import Login from './pages/Login/login';
import Rides from "./pages/Rides/rides";
import Zones from './pages/Zone/zone';
import AdminHub from './pages/admin/adminHub';
import InsertAttraction from './pages/Attraction/InsertAttraction';
import ShoppingCart from './pages/shoppingCart/shoppingCart';


export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(UserContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserContext.Provider value={{ user, setUser }}> <Layout /> </UserContext.Provider>}>
            <Route index element={<Home />} />
            {user.token == null &&
              <Route path="register" element={<Register />} />
            }
            {user.token == null &&
              <Route path="Login" element={<UserContext.Provider value={{ user, setUser }}><Login /></UserContext.Provider>} />
            }
            {user.token != null &&
              <Route path="ShoppingCart" element={<ShoppingCart />} />
            }
            <Route path="admin" element={<AdminHub user={user} />} />

            {user.role_type == 'admin' &&
              <Route path="InsertAttraction" element={<InsertAttraction user={user} />} />
            }

            <Route path="rides" element={<Rides />} />
            <Route path="*" element={<Error404 />} />
            <Route path="concessions" element={<Concessions />} />
            <Route path="zone" element={<Zones />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;