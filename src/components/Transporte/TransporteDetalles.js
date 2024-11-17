// src/components/Transporte/TransporteDetalles.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './TransporteDetalles.css';

function TransporteDetalles() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const transporteData = {
    1: { name: 'Taxi', type: 'Privado', description: 'Servicio de taxi privado para desplazamientos rápidos y personalizados en la ciudad.', tarifa: 30, porPersona: false },
    2: { name: 'Autobús', type: 'Público', description: 'Transporte público por la ciudad a bajo costo.', tarifa: 5, porPersona: true },
    3: { name: 'Tren', type: 'Interurbano', description: 'Transporte entre ciudades con salidas regulares.', tarifa: 15, porPersona: true },
    4: { name: 'Metro', type: 'Público', description: 'Transporte subterráneo en áreas urbanas de fácil acceso.', tarifa: 3, porPersona: true },
    5: { name: 'Alquiler de Coche', type: 'Privado', description: 'Renta un coche para explorar la ciudad y sus alrededores a tu ritmo.', tarifa: 50, porPersona: false },
    6: { name: 'Bicicleta', type: 'Ecológico', description: 'Alquiler de bicicleta para desplazamientos ecológicos y saludables.', tarifa: 10, porPersona: false },
    7: { name: 'Tranvía', type: 'Público', description: 'Transporte en tranvía por las áreas metropolitanas.', tarifa: 6, porPersona: true },
    8: { name: 'Ferry', type: 'Interurbano', description: 'Transporte en ferry entre islas y costas.', tarifa: 20, porPersona: true },
    9: { name: 'Motocicleta de Alquiler', type: 'Privado', description: 'Alquiler de motocicleta para recorrer la ciudad.', tarifa: 25, porPersona: false },
    10: { name: 'Camioneta', type: 'Privado', description: 'Alquiler de camioneta para grupos grandes o transporte de carga.', tarifa: 70, porPersona: false },
    11: { name: 'Teleférico', type: 'Público', description: 'Transporte en teleférico para disfrutar vistas panorámicas.', tarifa: 15, porPersona: true },
    12: { name: 'Limusina', type: 'Privado', description: 'Transporte de lujo para ocasiones especiales.', tarifa: 300, porPersona: false },
    13: { name: 'Bus Turístico', type: 'Público', description: 'Recorridos por las principales atracciones de la ciudad.', tarifa: 20, porPersona: true },
    14: { name: 'Yate', type: 'Privado', description: 'Alquiler de yate para experiencias exclusivas en el agua.', tarifa: 500, porPersona: false },
    15: { name: 'Scooter', type: 'Privado', description: 'Alquiler de scooter para desplazamientos rápidos en la ciudad.', tarifa: 15, porPersona: false },
    16: { name: 'Tren de Alta Velocidad', type: 'Interurbano', description: 'Viajes entre ciudades con trenes de alta velocidad.', tarifa: 50, porPersona: true },
    17: { name: 'Transbordador Espacial', type: 'Privado', description: 'Viajes exclusivos al espacio.', tarifa: 1000000, porPersona: false },
    18: { name: 'Autocaravana', type: 'Privado', description: 'Renta de autocaravanas para viajes largos.', tarifa: 150, porPersona: false },
    19: { name: 'Coche Compartido', type: 'Público', description: 'Viaja de forma económica compartiendo un coche.', tarifa: 10, porPersona: true },
    20: { name: 'Helicóptero', type: 'Privado', description: 'Vuelos rápidos en helicóptero.', tarifa: 700, porPersona: false },
  };
  
  const transporte = transporteData[id];
  const [numPeople, setNumPeople] = useState(1);

  if (!transporte) {
    return <div>Opción de transporte no encontrada</div>;
  }

  // Cálculo de tarifa total dependiendo del tipo de transporte
  const totalPrice = transporte.porPersona ? transporte.tarifa * numPeople : transporte.tarifa;

  const handleAddToCart = () => {
    const item = {
      id: `transporte-${id}`,
      name: transporte.name,
      price: totalPrice,
      quantity: 1,
    };
    addToCart(item);
  };

  return (
    <div className="transporte-details-container">
      <h2>{transporte.name}</h2>
      <p>Tipo: {transporte.type}</p>
      <p>Descripción: {transporte.description}</p>
      <p>Tarifa {transporte.porPersona ? 'por persona' : 'total'}: ${transporte.tarifa}</p>

      {transporte.porPersona && (
        <div className="booking-section">
          <label>
            Cantidad de personas:
            <input
              type="number"
              min="1"
              value={numPeople}
              onChange={(e) => setNumPeople(Number(e.target.value))}
            />
          </label>
        </div>
      )}

      <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>

      <button onClick={handleAddToCart} className="add-to-cart-button">
        Agregar al Carrito
      </button>
    </div>
  );
}

export default TransporteDetalles;
