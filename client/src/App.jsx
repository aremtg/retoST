import { useState } from 'react'
import './App.css'
import Nav from './componentes/nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/inicio/Inicio'
import Perfil from './componentes/perfil/Perfil'

function App() {
  return (
    <>
      <BrowserRouter> 
      <Nav/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
      
    </>
    
  )
}

export default App
