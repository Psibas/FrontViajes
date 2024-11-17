// src/components/Hotels/HotelDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { hotelDetails } from '../../data/data';
import './HotelDetails.css';

function HotelDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const hotel = hotelDetails[id];
  const [nights, setNights] = useState(1);
  const [people, setPeople] = useState(1);

  if (!hotel) {
    return <div>Hotel no encontrado</div>;
  }

  const totalPrice = hotel.pricePerNight * nights * people;

  const handleAddToCart = () => {
    const item = {
      id: `hotel-${id}`,
      name: hotel.name,
      price: totalPrice,
      quantity: 1,
    };
    addToCart(item);
  };

  return (
    <div className="hotel-details-container">
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
      <p>Precio por noche por persona: ${hotel.pricePerNight}</p>

      <label>
        Noches:
        <input 
          type="number" 
          min="1" 
          value={nights} 
          onChange={(e) => setNights(Number(e.target.value))} 
        />
      </label>
      <label>
        Personas:
        <input 
          type="number" 
          min="1" 
          value={people} 
          onChange={(e) => setPeople(Number(e.target.value))} 
        />
      </label>

      <p>Total: ${totalPrice.toFixed(2)}</p>

      <button onClick={handleAddToCart} className="add-to-cart-button">
        Agregar al Carrito
      </button>
    </div>
  );
}

export default HotelDetails;
