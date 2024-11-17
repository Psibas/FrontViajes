// src/components/Destinos/CiudadDetalles.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CiudadDetalles.css';

function CiudadDetalles() {
  const { ciudad } = useParams();

  // Datos simulados de cada ciudad
  const cityData = {
    Madrid: {
      description: 'La vibrante capital de España, conocida por su rica historia, museos y vida nocturna.',
      hotels: ['Hotel Madrid Centro', 'Hotel Gran Vía', 'Hotel Palacio Real'],
      transportation: ['Car Rental', 'Metro', 'Bike Rentals'],
      food: ['Tapas', 'Paella', 'Churros'],
    },
    Barcelona: {
      description: 'Ciudad cosmopolita en España famosa por su arquitectura modernista y playas.',
      hotels: ['Hotel Barcelona Beach', 'Hotel Sagrada Familia', 'Hotel Montjuic'],
      transportation: ['Airport Shuttle', 'Bike Rentals', 'Metro'],
      food: ['Seafood Paella', 'Cava', 'Pintxos'],
    },
    'Ciudad de México': {
      description: 'Una de las ciudades más grandes de América Latina, llena de historia y cultura.',
      hotels: ['Hotel Reforma', 'Hotel Polanco', 'Hotel Centro Histórico'],
      transportation: ['Taxi Services', 'Metro', 'Bike Rentals'],
      food: ['Tacos', 'Mole', 'Tamales'],
    },
    Cancún: {
      description: 'Destino turístico en México, conocido por sus playas y vida nocturna.',
      hotels: ['Hotel Cancún Resort', 'Hotel Riviera Maya', 'Hotel Playa Blanca'],
      transportation: ['Car Rental', 'Shuttle', 'Boat Rentals'],
      food: ['Seafood', 'Mexican Cuisine', 'Tropical Fruits'],
    },
    'Nueva York': {
      description: 'La ciudad que nunca duerme, famosa por su skyline y cultura diversa.',
      hotels: ['Hotel Manhattan', 'Hotel Central Park', 'Hotel Times Square'],
      transportation: ['Subway', 'Taxi', 'Bike Rentals'],
      food: ['Pizza', 'Bagels', 'Hot Dogs'],
    },
    'Los Ángeles': {
      description: 'La capital del cine, conocida por sus playas y el famoso letrero de Hollywood.',
      hotels: ['Hotel Hollywood', 'Hotel Beverly Hills', 'Hotel Downtown LA'],
      transportation: ['Car Rental', 'Bus Passes', 'Bike Rentals'],
      food: ['Burgers', 'Tacos', 'Smoothies'],
    },
  };

  const cityInfo = cityData[ciudad];

  if (!cityInfo) {
    return <div>Información de la ciudad no disponible.</div>;
  }

  return (
    <div className="city-details-container">
      <h2>{ciudad}</h2>
      <p className="city-description">{cityInfo.description}</p>

      <h3>Hoteles Disponibles</h3>
      <ul>
        {cityInfo.hotels.map((hotel, index) => (
          <li key={index}>{hotel}</li>
        ))}
      </ul>

      <h3>Opciones de Transporte</h3>
      <ul>
        {cityInfo.transportation.map((transport, index) => (
          <li key={index}>{transport}</li>
        ))}
      </ul>

      <h3>Comida Típica</h3>
      <ul>
        {cityInfo.food.map((foodItem, index) => (
          <li key={index}>{foodItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default CiudadDetalles;
