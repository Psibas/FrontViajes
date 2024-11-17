// src/components/NavBar/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './NavBar.css';

function NavBar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  // Contador de elementos en el carrito
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h2 className="navbar-logo">Travel Agency</h2>

        {/* Botón de menú hamburguesa */}
        <div className="burger" onClick={toggleMenu}>
          <input type="checkbox" checked={menuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar-links ${menuOpen ? 'menu-open' : ''}`}>
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registro</Link>
        <Link to="/paquetes">Paquetes</Link>
        <Link to="/destinos">Destinos</Link>
        <Link to="/buscar">Buscar</Link>
        <Link to="/hoteles">Hoteles</Link>
        <Link to="/vuelos">Vuelos</Link>
        <Link to="/excursiones">Excursiones</Link>
        <Link to="/transporte">Transporte</Link>
        <Link to="/carrito" className="cart-link">
          Carrito <span className="cart-count">({cartItemCount})</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
