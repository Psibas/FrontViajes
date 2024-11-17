// src/components/search/Search.js
import React, { useState } from 'react';
import './Search.css';

function Search() {
  const [selectedCategories, setSelectedCategories] = useState({
    paquetes: false,
    vuelos: false,
    excursiones: false,
    transporte: false,
    hoteles: false,
    destinos: false,
  });

  const [searchParams, setSearchParams] = useState({
    paquetes: { destination: '' },
    vuelos: { departure: '', destination: '', departureDate: '', returnDate: '' },
    excursiones: { location: '', type: '', date: '' },
    transporte: { type: '', location: '', date: '' },
    hoteles: { country: '', city: '', checkInDate: '', checkOutDate: '' },
    destinos: { country: '', city: '' },
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedCategories((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleInputChange = (category, name, value) => {
    setSearchParams((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [name]: value,
      },
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la búsqueda de cada categoría usando searchParams
    console.log("Buscar con parámetros:", searchParams);
  };

  return (
    <div className="search-container">
      <h2>Buscar</h2>
      <form className="search-form" onSubmit={handleSearch}>
        {/* Opciones de categoría */}
        <div className="categories">
          <label>
            <input
              type="checkbox"
              name="paquetes"
              checked={selectedCategories.paquetes}
              onChange={handleCheckboxChange}
            />
            Paquetes
          </label>
          <label>
            <input
              type="checkbox"
              name="vuelos"
              checked={selectedCategories.vuelos}
              onChange={handleCheckboxChange}
            />
            Vuelos
          </label>
          <label>
            <input
              type="checkbox"
              name="excursiones"
              checked={selectedCategories.excursiones}
              onChange={handleCheckboxChange}
            />
            Excursiones
          </label>
          <label>
            <input
              type="checkbox"
              name="transporte"
              checked={selectedCategories.transporte}
              onChange={handleCheckboxChange}
            />
            Transporte
          </label>
          <label>
            <input
              type="checkbox"
              name="hoteles"
              checked={selectedCategories.hoteles}
              onChange={handleCheckboxChange}
            />
            Hoteles
          </label>
          <label>
            <input
              type="checkbox"
              name="destinos"
              checked={selectedCategories.destinos}
              onChange={handleCheckboxChange}
            />
            Destinos
          </label>
        </div>

        {/* Campos de búsqueda específicos para cada categoría */}
        {selectedCategories.paquetes && (
          <div className="category-section">
            <h3>Buscar Paquetes</h3>
            <input
              type="text"
              placeholder="Destino"
              value={searchParams.paquetes.destination}
              onChange={(e) => handleInputChange('paquetes', 'destination', e.target.value)}
            />
          </div>
        )}

        {selectedCategories.vuelos && (
          <div className="category-section">
            <h3>Buscar Vuelos</h3>
            <input
              type="text"
              placeholder="Lugar de Salida"
              value={searchParams.vuelos.departure}
              onChange={(e) => handleInputChange('vuelos', 'departure', e.target.value)}
            />
            <input
              type="text"
              placeholder="Destino"
              value={searchParams.vuelos.destination}
              onChange={(e) => handleInputChange('vuelos', 'destination', e.target.value)}
            />
            <input
              type="date"
              placeholder="Fecha de Salida"
              value={searchParams.vuelos.departureDate}
              onChange={(e) => handleInputChange('vuelos', 'departureDate', e.target.value)}
            />
            <input
              type="date"
              placeholder="Fecha de Regreso"
              value={searchParams.vuelos.returnDate}
              onChange={(e) => handleInputChange('vuelos', 'returnDate', e.target.value)}
            />
          </div>
        )}

        {selectedCategories.excursiones && (
          <div className="category-section">
            <h3>Buscar Excursiones</h3>
            <input
              type="text"
              placeholder="Ubicación"
              value={searchParams.excursiones.location}
              onChange={(e) => handleInputChange('excursiones', 'location', e.target.value)}
            />
            <input
              type="text"
              placeholder="Tipo de Excursión"
              value={searchParams.excursiones.type}
              onChange={(e) => handleInputChange('excursiones', 'type', e.target.value)}
            />
            <input
              type="date"
              placeholder="Fecha"
              value={searchParams.excursiones.date}
              onChange={(e) => handleInputChange('excursiones', 'date', e.target.value)}
            />
          </div>
        )}

        {selectedCategories.transporte && (
          <div className="category-section">
            <h3>Buscar Transporte</h3>
            <input
              type="text"
              placeholder="Tipo de Transporte"
              value={searchParams.transporte.type}
              onChange={(e) => handleInputChange('transporte', 'type', e.target.value)}
            />
            <input
              type="text"
              placeholder="Ubicación de Recogida"
              value={searchParams.transporte.location}
              onChange={(e) => handleInputChange('transporte', 'location', e.target.value)}
            />
            <input
              type="date"
              placeholder="Fecha de Recogida"
              value={searchParams.transporte.date}
              onChange={(e) => handleInputChange('transporte', 'date', e.target.value)}
            />
          </div>
        )}

        {selectedCategories.hoteles && (
          <div className="category-section">
            <h3>Buscar Hoteles</h3>
            <input
              type="text"
              placeholder="País"
              value={searchParams.hoteles.country}
              onChange={(e) => handleInputChange('hoteles', 'country', e.target.value)}
            />
            <input
              type="text"
              placeholder="Ciudad"
              value={searchParams.hoteles.city}
              onChange={(e) => handleInputChange('hoteles', 'city', e.target.value)}
            />
            <input
              type="date"
              placeholder="Check-in"
              value={searchParams.hoteles.checkInDate}
              onChange={(e) => handleInputChange('hoteles', 'checkInDate', e.target.value)}
            />
            <input
              type="date"
              placeholder="Check-out"
              value={searchParams.hoteles.checkOutDate}
              onChange={(e) => handleInputChange('hoteles', 'checkOutDate', e.target.value)}
            />
          </div>
        )}

        {selectedCategories.destinos && (
          <div className="category-section">
            <h3>Buscar Destinos</h3>
            <input
              type="text"
              placeholder="País"
              value={searchParams.destinos.country}
              onChange={(e) => handleInputChange('destinos', 'country', e.target.value)}
            />
            <input
              type="text"
              placeholder="Ciudad"
              value={searchParams.destinos.city}
              onChange={(e) => handleInputChange('destinos', 'city', e.target.value)}
            />
          </div>
        )}

        <button type="submit" className="search-button">Buscar</button>
      </form>
    </div>
  );
}

export default Search;
