// src/components/NavBar/HamburgerMenu.js
import React, { useState } from "react";
import "./HamburgerMenu.css";

function HamburgerMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón de Hamburguesa */}
      <div className="burger" onClick={toggleMenu}>
        <input type="checkbox" checked={isOpen} readOnly />
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú desplegable */}
      <div className={`navigation ${isOpen ? "navigation-active" : ""}`}>
        {children}
      </div>
    </>
  );
}

export default HamburgerMenu;
