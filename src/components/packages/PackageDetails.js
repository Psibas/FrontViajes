// src/components/Packages/PackageDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { packageDetails } from '../../data/data'; // Datos estáticos
import { usePackages } from '../../context/PackageContext'; // Contexto para paquetes dinámicos
import './PackageDetails.css';

function PackageDetails() {
  const { id } = useParams(); // Obtener ID desde la URL
  const { addToCart } = useCart(); // Hook del carrito
  const { packages } = usePackages(); // Contexto de paquetes dinámicos

  // Buscar el paquete en los datos estáticos o en el contexto dinámico
  const pkg =
    packageDetails[id] ||
    packages.find((p) => p.id === parseInt(id, 10)); // Buscar en el contexto

  const [quantity, setQuantity] = useState(1); // Cantidad seleccionada

  // Validar si no se encuentra el paquete
  if (!pkg) {
    return <div>Paquete no encontrado</div>;
  }

  // Si el paquete proviene de datos estáticos, aplicar descuento
  const basePrice = pkg.price || pkg.totalPrice; // `totalPrice` para dinámicos
  const discountedPrice = pkg.items
    ? basePrice // Paquetes dinámicos ya tienen el precio calculado
    : basePrice - basePrice * 0.1; // Aplicar descuento para estáticos

  // Cálculo del precio total
  const totalPrice = discountedPrice * quantity;

  // Función para añadir al carrito
  const handleAddToCart = () => {
    const item = {
      id: `package-${id}`,
      name: pkg.name,
      price: totalPrice,
      quantity,
    };
    addToCart(item);
  };

  return (
    <div className="package-details-container">
      <h2>{pkg.name}</h2>
      <p>{pkg.description}</p>

      {/* Mostrar detalles de precio */}
      {pkg.items ? (
        <div>
          <h3>Elementos del Paquete:</h3>
          <ul>
            {pkg.items.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - ${item.price?.toFixed(2)}
                <br />
                {item.details && <span>{item.details}</span>}
              </li>
            ))}
          </ul>
          <h4>Precio Total: ${basePrice.toFixed(2)}</h4>
        </div>
      ) : (
        <div>
          <p>
            Precio Original:{' '}
            <span className="original-price">${basePrice.toFixed(2)}</span>
          </p>
          <p>
            Precio con Descuento:{' '}
            <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
          </p>
        </div>
      )}

      {/* Controles para cantidad y total */}
      <label>
        Cantidad:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </label>

      <p>Total: ${totalPrice.toFixed(2)}</p>

      <button onClick={handleAddToCart} className="add-to-cart-button">
        Agregar al Carrito
      </button>
    </div>
  );
}

export default PackageDetails;
