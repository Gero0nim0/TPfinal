// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTest from './Componentes/navbar/Navbar';
import Inicio from './links/Inicio';
import Biografia from './links/Biografia';
import TortasTematicas from './links/TortasTematicas';
import Tartas from './links/Tartas';
import CandyBar from './links/CandyBar';
import Carder from './Componentes/card/Card';
import Brownies from './assets/imagen/Screenshot_1.png';

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarTest/>}>
            <Route index element= {<Inicio/>}/>
            <Route path='Biografia' element= {<Biografia/>}/>
            <Route path='TortasTematicas' element= {<TortasTematicas/>}/>
            <Route path='Tartas' element= {<Tartas/>}/>
            <Route path='CandyBar' element= {<CandyBar/>}/>
          
            <Route path='*' element={ <Navigate replace to='/' />}/>
          </Route>
        </Routes>
      </BrowserRouter>

      <h2 className='subtitulo'> Disfrutá de la Pasteleria 100% Casera </h2>
      
      <Carder 
        imageSrc={Brownies} 
        title="Primera Tarjeta" 
        text="Este es un ejemplo de la primera tarjeta." 
      />

      <Carder 
        imageSrc={Brownies} 
        title="Primera Tarjeta" 
        text="Este es un ejemplo de la primera tarjeta." 
      />

    </div>
  )
}

export default App
