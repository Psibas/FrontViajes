// src/context/PackageContext.js
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto de paquetes
const PackageContext = createContext();

// Hook personalizado para usar el contexto de paquetes
export const usePackages = () => useContext(PackageContext);

// Proveedor del contexto de paquetes
export const PackageProvider = ({ children }) => {
  const [packages, setPackages] = useState([]); // Estado para almacenar los paquetes creados dinámicamente

  // Función para agregar un nuevo paquete
  const addPackage = (newPackage) => {
    setPackages((prev) => [...prev, newPackage]);
  };

  // Función para eliminar un paquete por ID (opcional)
  const removePackage = (id) => {
    setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
  };

  // Proveer funciones y estado al contexto
  return (
    <PackageContext.Provider value={{ packages, addPackage, removePackage }}>
      {children}
    </PackageContext.Provider>
  );
};
