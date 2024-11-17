// src/components/Vuelos/Vuelos.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Vuelos.css';

function Vuelos() {
  const flightData = [
    { id: 1, origin: 'Madrid', destination: 'Nueva York', date: '2024-12-10', returnDate: '2024-12-20', class: 'Turista', price: 500 },
    { id: 2, origin: 'Barcelona', destination: 'París', date: '2024-12-15', returnDate: '2024-12-25', class: 'Business', price: 700 },
    { id: 3, origin: 'Ciudad de México', destination: 'Cancún', date: '2024-12-20', returnDate: '2024-12-28', class: 'Preferencial', price: 400 },
    { id: 4, origin: 'Los Ángeles', destination: 'Tokio', date: '2024-12-25', returnDate: '2025-01-05', class: 'Turista', price: 1000 },
    { id: 5, origin: 'Nueva York', destination: 'Londres', date: '2024-12-30', returnDate: '2025-01-10', class: 'Business', price: 800 },
    { id: 6, origin: 'Madrid', destination: 'París', date: '2024-12-12', returnDate: '2024-12-22', class: 'Turista', price: 300 },
    { id: 7, origin: 'Barcelona', destination: 'Nueva York', date: '2024-12-18', returnDate: '2024-12-28', class: 'Preferencial', price: 1200 },
    { id: 8, origin: 'Ciudad de México', destination: 'Tokio', date: '2024-12-22', returnDate: '2025-01-05', class: 'Business', price: 1500 },
    { id: 9, origin: 'Los Ángeles', destination: 'Londres', date: '2024-12-28', returnDate: '2025-01-10', class: 'Turista', price: 750 },
  ];

  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [tripType, setTripType] = useState('ida');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [filteredFlights, setFilteredFlights] = useState([]);
  const navigate = useNavigate();

  const uniqueOrigins = [...new Set(flightData.map(flight => flight.origin))];
  const uniqueDestinations = [...new Set(flightData.map(flight => flight.destination))];

  const handleSearch = (e) => {
    e.preventDefault();
    const results = flightData.filter((flight) => {
      const matchesOrigin = selectedOrigin ? flight.origin === selectedOrigin : true;
      const matchesDestination = selectedDestination ? flight.destination === selectedDestination : true;
      const matchesDepartureDate = departureDate ? flight.date === departureDate : true;
      const matchesReturnDate = tripType === 'ida y vuelta' ? flight.returnDate === returnDate : true;
      return matchesOrigin && matchesDestination && matchesDepartureDate && matchesReturnDate;
    });
    setFilteredFlights(results);
  };

  const handleFlightClick = (id) => {
    navigate(`/vuelos/${id}`);
  };

  return (
    <div className="vuelos-container">
      <h2>Buscar Vuelos</h2>
      <form onSubmit={handleSearch} className="vuelos-form">
        <div className="form-group">
          <label>Tipo de Viaje:</label>
          <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
            <option value="ida">Solo ida</option>
            <option value="ida y vuelta">Ida y vuelta</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ciudad de Origen:</label>
          <select value={selectedOrigin} onChange={(e) => setSelectedOrigin(e.target.value)}>
            <option value="">Selecciona una ciudad</option>
            {uniqueOrigins.map((origin, index) => (
              <option key={index} value={origin}>{origin}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Ciudad de Destino:</label>
          <select value={selectedDestination} onChange={(e) => setSelectedDestination(e.target.value)}>
            <option value="">Selecciona una ciudad</option>
            {uniqueDestinations.map((destination, index) => (
              <option key={index} value={destination}>{destination}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Fecha de Salida:</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        {tripType === 'ida y vuelta' && (
          <div className="form-group">
            <label>Fecha de Regreso:</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        )}

        <button type="submit" className="search-button">Buscar Vuelos</button>
      </form>

      <div className="results">
        <h3>Vuelos Disponibles</h3>
        {filteredFlights.length > 0 ? (
          <ul className="flight-list">
            {filteredFlights.map((flight) => (
              <li
                key={flight.id}
                className="flight-item"
                onClick={() => handleFlightClick(flight.id)}
                style={{ cursor: 'pointer' }}
              >
                <p>Origen: {flight.origin} - Destino: {flight.destination}</p>
                <p>Fecha de Salida: {flight.date}</p>
                {tripType === 'ida y vuelta' && <p>Fecha de Regreso: {flight.returnDate}</p>}
                <p>Clase: {flight.class}</p>
                <p>Precio por Persona: ${flight.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron vuelos.</p>
        )}
      </div>
    </div>
  );
}

export default Vuelos;
