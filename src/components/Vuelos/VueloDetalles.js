// src/components/Vuelos/VuelosDetalles.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './VueloDetalles.css';

function VueloDetalles() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const flightDetails= {
    1: { name: 'Vuelo a Nueva York', description: 'Viaje de ida y vuelta a Nueva York', pricePerPerson: 500 },
    2: { name: 'Vuelo a Los Ángeles', description: 'Vuelo directo a Los Ángeles', pricePerPerson: 450 },
    3: { name: 'Vuelo a París', description: 'Vuelo internacional a París', pricePerPerson: 700 },
    4: { name: 'Vuelo a Tokio', description: 'Vuelo a Tokio con escala en Los Ángeles', pricePerPerson: 800 },
    5: { name: 'Vuelo a Londres', description: 'Viaje de ida y vuelta a Londres', pricePerPerson: 650 },
    6: { name: 'Vuelo a Roma', description: 'Vuelo directo a Roma', pricePerPerson: 620 },
    7: { name: 'Vuelo a Berlín', description: 'Vuelo a Berlín con escala en París', pricePerPerson: 600 },
    8: { name: 'Vuelo a Buenos Aires', description: 'Vuelo a Buenos Aires', pricePerPerson: 550 },
    9: { name: 'Vuelo a Sídney', description: 'Vuelo internacional a Sídney', pricePerPerson: 900 },
  };
  

  const flight = flightDetails[id];
  const [people, setPeople] = useState(1);

  if (!flight) {
    return <div>Vuelo no encontrado</div>;
  }

  const totalPrice = flight.pricePerPerson * people;

  const handleAddToCart = () => {
    const item = {
      id: `flight-${id}`,
      name: flight.name,
      price: totalPrice,
      quantity: 1,
    };
    addToCart(item);
  };

  return (
    <div className="flight-details-container">
      <h2>{flight.name}</h2>
      <p>{flight.description}</p>
      <p>Precio por persona: ${flight.pricePerPerson}</p>

      <label>
        Personas:
        <input type="number" min="1" value={people} onChange={(e) => setPeople(Number(e.target.value))} />
      </label>

      <p>Total: ${totalPrice.toFixed(2)}</p>

      <button onClick={handleAddToCart} className="add-to-cart-button">
        Agregar al Carrito
      </button>
    </div>
  );
}

export default VueloDetalles;
