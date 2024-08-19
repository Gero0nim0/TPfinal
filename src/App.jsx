// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route, BrowserRouter, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTest from './Componentes/navbar/Navbar';
import Inicio from './links/Inicio';
import Biografia from './links/Biografia';
import TortasTematicas from './links/TortasTematicas';
import Tartas from './links/Tartas';
import CandyBar from './links/CandyBar';
import Pedidos from './Componentes/pedidos/Pedidos'; 
import Footer from './Componentes/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  const noFooterPaths = ['/Pedidos'];

  return (
    <div className='App'>
      <NavbarTest />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="Biografia" element={<Biografia />} />
        <Route path="TortasTematicas" element={<TortasTematicas />} />
        <Route path="Tartas" element={<Tartas />} />
        <Route path="CandyBar" element={<CandyBar />} />
        <Route path="Pedidos" element={<Pedidos />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;

