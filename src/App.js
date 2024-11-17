// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { PackageProvider } from './context/PackageContext';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage';
import Login from './components/Login/Login';
import Register from './components/register/Register';
import Packages from './components/packages/Packages';
import PackageDetails from './components/packages/PackageDetails';
import CreatePackage from './components/packages/CreatePackage';
import Hotels from './components/Hotels/Hotels';
import HotelDetails from './components/Hotels/HotelDetails';
import Destinos from './components/Destinos/Destinos';
import CiudadDetalles from './components/Destinos/CiudadDetalles';
import Vuelos from './components/Vuelos/Vuelos';
import VuelosDetalles from './components/Vuelos/VueloDetalles';
import Search from './components/search/Search';
import Excursiones from './components/Excursiones/Excursiones';
import ExcursionDetalles from './components/Excursiones/ExcursionDetalles';
import Transporte from './components/Transporte/Transporte';
import TransporteDetalles from './components/Transporte/TransporteDetalles';
import Carrito from './components/Carrito/Carrito';

function App() {
  return (
    <PackageProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            {/* Rutas principales */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Rutas de paquetes */}
            <Route path="/paquetes" element={<Packages />} />
            <Route path="/paquetes/:id" element={<PackageDetails />} />
            <Route path="/crear-paquete" element={<CreatePackage />} />
            
            {/* Rutas de hoteles */}
            <Route path="/hoteles" element={<Hotels />} />
            <Route path="/hoteles/:id" element={<HotelDetails />} />
            
            {/* Rutas de destinos */}
            <Route path="/destinos" element={<Destinos />} />
            <Route path="/destinos/:id" element={<CiudadDetalles />} />
            
            {/* Rutas de vuelos */}
            <Route path="/vuelos" element={<Vuelos />} />
            <Route path="/vuelos/:id" element={<VuelosDetalles />} />
            
            {/* Rutas de búsqueda */}
            <Route path="/buscar" element={<Search />} />
            
            {/* Rutas de excursiones */}
            <Route path="/excursiones" element={<Excursiones />} />
            <Route path="/excursiones/:id" element={<ExcursionDetalles />} />
            
            {/* Rutas de transporte */}
            <Route path="/transporte" element={<Transporte />} />
            <Route path="/transporte/:id" element={<TransporteDetalles />} />
            
            {/* Ruta del carrito */}
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </Router>
      </CartProvider>
    </PackageProvider>
  );
}

export default App;
