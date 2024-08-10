// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTest from './Componentes/navbar/Navbar';
import Inicio from './links/Inicio';
import Biografia from './links/Biografia';
import TortasTematicas from './links/TortasTematicas';
import Tartas from './links/Tartas';
import CandyBar from './links/CandyBar';


function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <NavbarTest /> {/* Navbar permanece siempre visible */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="Biografia" element={<Biografia />} />
          <Route path="TortasTematicas" element={<TortasTematicas />} />
          <Route path="Tartas" element={<Tartas />} />
          <Route path="CandyBar" element={<CandyBar />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>

      

    </div>
  )
}

export default App
