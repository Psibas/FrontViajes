// src/components/Destinos/Destinos.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Destinos.css';

function Destinos() {
  const [expandedCountry, setExpandedCountry] = useState(null);
  const navigate = useNavigate();

  // Datos de países y ciudades disponibles
  const locationData = [
    { country: 'España', city: 'Madrid' },
    { country: 'España', city: 'Barcelona' },
    { country: 'México', city: 'Cancún' },
    { country: 'México', city: 'Ciudad de México' },
    { country: 'Estados Unidos', city: 'Nueva York' },
    { country: 'Estados Unidos', city: 'Los Ángeles' },
  ];

  // Agrupar ciudades por país
  const destinations = locationData.reduce((acc, location) => {
    const { country, city } = location;
    if (!acc[country]) {
      acc[country] = new Set();
    }
    acc[country].add(city);
    return acc;
  }, {});

  const countries = Object.keys(destinations);

  const toggleCountry = (country) => {
    setExpandedCountry(expandedCountry === country ? null : country);
  };

  const handleCityClick = (city) => {
    navigate(`/destinos/${city}`);
  };

  return (
    <div className="destinos-container">
      <h2>Destinos Disponibles</h2>
      <div className="destinos-list">
        {countries.map((country) => (
          <div key={country} className="country">
            <h3 onClick={() => toggleCountry(country)} className="country-header">
              {country} {expandedCountry === country ? '▲' : '▼'}
            </h3>
            {expandedCountry === country && (
              <ul className="city-list">
                {[...destinations[country]].map((city) => (
                  <li key={city} className="city" onClick={() => handleCityClick(city)}>
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinos;
