import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList'; // Crear este componente
import ProductEdit from './ProductEdit'; // Crear este componente
import ProductNew from './ProductNew'; // Crear este componente

function AdminPanel() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/edit/:id" element={<ProductEdit />} />
        <Route path="/add" element={<ProductNew />} />
      </Routes>
    </div>
  );
}

export default AdminPanel;
