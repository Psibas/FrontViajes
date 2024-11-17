// src/components/packages/Packages.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { packageData } from '../../data/data'; // Datos iniciales de los paquetes
import { usePackages } from '../../context/PackageContext'; // Importa el contexto
import './Packages.css';

function Packages() {
  const { packages } = usePackages(); // Obtén los paquetes creados
  const navigate = useNavigate();

  // Navegar a los detalles del paquete
  const handlePackageClick = (id) => {
    navigate(`/paquetes/${id}`);
  };

  // Navegar a la creación de un paquete
  const handleCreatePackage = () => {
    navigate('/crear-paquete');
  };

  // Combinar paquetes iniciales con los creados dinámicamente
  const allPackages = [...packageData, ...packages];

  return (
    <div className="packages-container">
      <h2>Paquetes de Viaje</h2>
      <button onClick={handleCreatePackage} className="create-package-button">
        Crear Paquete
      </button>
      <div className="packages-grid">
        {allPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="package-card"
            onClick={() => handlePackageClick(pkg.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="package-image">
              {pkg.image ? (
                <img src={`/images/${pkg.image}`} alt={pkg.name} />
              ) : (
                <img src="/images/default-package.jpg" alt="Paquete" />
              )}
            </div>
            <h4>{pkg.name}</h4>
            <p>{pkg.description}</p>
            <p className="package-price">
              {pkg.originalPrice && (
                <>
                  Precio Original:{' '}
                  <span className="original-price">
                    ${pkg.originalPrice.toFixed(2)}
                  </span>
                  <br />
                </>
              )}
              Precio Total:{' '}
              <span className="discounted-price">
                ${pkg.totalPrice?.toFixed(2) || pkg.discountedPrice?.toFixed(2)}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
