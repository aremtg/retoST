import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Home from './pages/home/Index.jsx';
import Register from './pages/forms/register/Index';
import Login from './pages/forms/login/Index';
import Cart from './pages/cart/Cart';
import AdminPanel from './pages/admin/AdminPanel'; // Asegúrate de importar AdminPanel

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin/*" element={<AdminPanel />} /> {/* Ruta para el panel de administración */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
