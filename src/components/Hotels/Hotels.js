// src/components/Hotels/Hotels.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hotelData } from '../../data/data';
import './Hotels.css';

function Hotels() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const filteredCities = [...new Set(hotelData
    .filter(hotel => hotel.country === selectedCountry)
    .map(hotel => hotel.city))];

  const filteredHotels = hotelData.filter(hotel => {
    const isInCountry = !selectedCountry || hotel.country === selectedCountry;
    const isInCity = !selectedCity || hotel.city === selectedCity;
    return isInCountry && isInCity;
  });

  const handleHotelClick = (id) => {
    navigate(`/hoteles/${id}`);
  };

  return (
    <div className="hotels-container">
      <h2>Hoteles Disponibles</h2>

      {/* Filtros de País y Ciudad */}
      <div className="filter">
        <label>País:</label>
        <select value={selectedCountry} onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedCity('');
        }}>
          <option value="">Selecciona un país</option>
          {[...new Set(hotelData.map(hotel => hotel.country))].map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div className="filter">
          <label>Ciudad:</label>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">Selecciona una ciudad</option>
            {filteredCities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}

      {/* Lista de Hoteles Filtrados */}
      <div className="hotels-list">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card" onClick={() => handleHotelClick(hotel.id)}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.city}, {hotel.country}</p>
              <p className="hotel-price">Precio por noche: ${hotel.pricePerNight}</p>
            </div>
          </div>
        ))}
        {filteredHotels.length === 0 && <p className="no-hotels-message">No hay hoteles disponibles para esta selección.</p>}
      </div>
    </div>
  );
}

export default Hotels;
