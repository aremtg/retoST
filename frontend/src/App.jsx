import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Index.jsx'
import Profile from './pages/profile/Index.jsx'
import Login from './pages/forms/login';
import Register from './pages/forms/register/Index';

function App() {
  return (
    <>
      <BrowserRouter> 
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
      
    </>
    
  )
}

export default App
