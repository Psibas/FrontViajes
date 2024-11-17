// src/components/Carrito/Carrito.js
import React from 'react';
import { useCart } from '../../context/CartContext';
import './Carrito.css';

function Carrito() {
  const { cart, removeFromCart, calculateTotal } = useCart();

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="carrito-items">
          {cart.map((item) => (
            <div key={item.id} className="carrito-item">
              <h4>{item.name}</h4>
              <p>Precio total: ${item.price.toFixed(2)}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Eliminar
              </button>
            </div>
          ))}

          <div className="carrito-total">
            <h3>Total Carrito: ${calculateTotal().toFixed(2)}</h3>
            <button className="checkout-button">Proceder al Pago</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;
