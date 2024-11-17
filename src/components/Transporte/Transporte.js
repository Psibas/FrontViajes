// src/components/Transporte/Transporte.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Transporte.css';

function Transporte() {
  const navigate = useNavigate();

  // Datos de transporte de ejemplo
  const transporteData = [
    { id: 1, name: 'Taxi', type: 'Privado', description: 'Servicio de taxi privado para desplazamientos rápidos y personalizados en la ciudad.', tarifa: 30 },
    { id: 2, name: 'Autobús', type: 'Público', description: 'Transporte público por la ciudad a bajo costo.', tarifa: 5 },
    { id: 3, name: 'Tren', type: 'Interurbano', description: 'Transporte entre ciudades con salidas regulares.', tarifa: 15 },
    { id: 4, name: 'Metro', type: 'Público', description: 'Transporte subterráneo en áreas urbanas de fácil acceso.', tarifa: 3 },
    { id: 5, name: 'Alquiler de Coche', type: 'Privado', description: 'Renta un coche para explorar la ciudad y sus alrededores a tu ritmo.', tarifa: 50 },
    { id: 6, name: 'Bicicleta', type: 'Ecológico', description: 'Alquiler de bicicleta para desplazamientos ecológicos y saludables.', tarifa: 10 },
    { id: 7, name: 'Tranvía', type: 'Público', description: 'Transporte en tranvía por las áreas metropolitanas.', tarifa: 6 },
    { id: 8, name: 'Ferry', type: 'Interurbano', description: 'Transporte en ferry entre islas y costas.', tarifa: 20 },
    { id: 9, name: 'Motocicleta de Alquiler', type: 'Privado', description: 'Alquiler de motocicleta para recorrer la ciudad.', tarifa: 25 },
    { id: 10, name: 'Camioneta', type: 'Privado', description: 'Alquiler de camioneta para grupos grandes o transporte de carga.', tarifa: 70 },
    { id: 11, name: 'Teleférico', type: 'Público', description: 'Transporte en teleférico para disfrutar vistas panorámicas.', tarifa: 15 },
    { id: 12, name: 'Limusina', type: 'Privado', description: 'Transporte de lujo para ocasiones especiales.', tarifa: 300 },
    { id: 13, name: 'Bus Turístico', type: 'Público', description: 'Recorridos por las principales atracciones de la ciudad.', tarifa: 20 },
    { id: 14, name: 'Yate', type: 'Privado', description: 'Alquiler de yate para experiencias exclusivas en el agua.', tarifa: 500 },
    { id: 15, name: 'Scooter', type: 'Privado', description: 'Alquiler de scooter para desplazamientos rápidos en la ciudad.', tarifa: 15 },
    { id: 16, name: 'Tren de Alta Velocidad', type: 'Interurbano', description: 'Viajes entre ciudades con trenes de alta velocidad.', tarifa: 50 },
    { id: 17, name: 'Transbordador Espacial', type: 'Privado', description: 'Viajes exclusivos al espacio.', tarifa: 1000000 },
    { id: 18, name: 'Autocaravana', type: 'Privado', description: 'Renta de autocaravanas para viajes largos.', tarifa: 150 },
    { id: 19, name: 'Coche Compartido', type: 'Público', description: 'Viaja de forma económica compartiendo un coche.', tarifa: 10 },
    { id: 20, name: 'Helicóptero', type: 'Privado', description: 'Vuelos rápidos en helicóptero.', tarifa: 700 },
  ];
  
  

  const [type, setType] = useState('');
  const [filteredTransport, setFilteredTransport] = useState([]);

  // Filtrar transporte por tipo seleccionado
  const handleSearch = (e) => {
    e.preventDefault();
    const results = transporteData.filter((transporte) =>
      type ? transporte.type.toLowerCase() === type.toLowerCase() : true
    );
    setFilteredTransport(results);
  };

  // Navegar a detalles de transporte
  const handleTransportClick = (id) => {
    navigate(`/transporte/${id}`);
  };

  return (
    <div className="transporte-container">
      <h2>Buscar Opciones de Transporte</h2>
      <form onSubmit={handleSearch} className="transporte-search-form">
        <div className="form-group">
          <label>Tipo de Transporte</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Todos</option>
            <option value="Privado">Privado</option>
            <option value="Público">Público</option>
            <option value="Interurbano">Interurbano</option>
            <option value="Ecológico">Ecológico</option>
          </select>
        </div>
        <button type="submit" className="search-button">Buscar</button>
      </form>

      <div className="transporte-list">
        {filteredTransport.length > 0 ? (
          filteredTransport.map((transporte) => (
            <div
              key={transporte.id}
              className="transporte-card"
              onClick={() => handleTransportClick(transporte.id)}
            >
              <h3>{transporte.name}</h3>
              <p>Tipo: {transporte.type}</p>
              <p>Tarifa: ${transporte.tarifa}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron opciones de transporte.</p>
        )}
      </div>
    </div>
  );
}

export default Transporte;
