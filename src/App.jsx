import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
//import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Reserve from "./components/Reserve/Reserve";
import Booking from "./components/Booking/Booking";
import Signup from "./components/Signup/Signup"
import PrivateRoute from "./components/PrivateRoute";
import Feedback from './Feedback/Feedback';
import { useState } from "react";
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/reserve"
            element={<Reserve/>}
          />
          <Route
            path="/signup"
            element={
              <Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
           <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
                   <Route
            path="/booking"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Booking />
              </PrivateRoute>
            }
          />

                <Route path="/feedback" element={<Feedback/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;