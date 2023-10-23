import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Index.jsx'
import Profile from './pages/profile/Index.jsx'
import Register from './pages/forms/register/Index';
import Login from './pages/forms/login/Index';
import Cart from './pages/cart/Cart.jsx';
import Footer from './components/miniComponents/Footer';
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
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      <Footer>
        
      </Footer>
    </>
    
  )
}

export default App
