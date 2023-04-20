
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
import EditAttraciton from './pages/Modify/EditAttraction';
import RemoveAttraction from './pages/Delete/RemoveAttraction';
import ShoppingCart from './pages/shoppingCart/shoppingCart';
import Employee from './pages/employee/Employee';
import Manager from './pages/Manager/manager';
import Maintenance from './pages/maintenance/maintenance';
import { ShopContextProvider } from './components/cartContext/CartContext';




export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(UserContext);
  return (

    <div className="App">
      <ShopContextProvider>
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

              {user.token != null &&
                <Route path="ShoppingCart" element={<ShoppingCart />} />
              }

              {user.token != null && user.role_type != 'customer' &&
                <Route path="Employee" element={<Employee user={user} />} />
              }

              {user.token != null && (user.role_type == 'admin' || user.role_type == 'manager') &&
                <Route path="Manager" element={<Manager user={user} />} />
              }

              {user.token != null && (user.role_type == 'admin' || user.role_type == 'manager' || user.role_type == 'maintenance') &&
                <Route path="Maintenance" element={<Maintenance user={user} />} />
              }

              <Route path="rides" element={<Rides />} />
              <Route path="*" element={<Error404 />} />
              <Route path="concessions" element={<Concessions />} />
              <Route path="zone" element={<Zones />} />

              {user.role_type == 'admin' &&
                <Route path='EditAttraction' element={<EditAttraciton />} />
              }
              {user.role_type == 'admin' &&
                <Route path='RemoveAttraction' element={<RemoveAttraction />} />
              }

            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;