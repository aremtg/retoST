import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Index.jsx'
import Profile from './pages/profile/Index.jsx'

function App() {
  return (
    <>
      <BrowserRouter> 
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      
    </>
    
  )
}

export default App
