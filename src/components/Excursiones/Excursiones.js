// src/components/Excursiones/Excursiones.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Excursiones.css';

function Excursiones() {
  const navigate = useNavigate();

  // Datos de excursiones de ejemplo
  const excursionesData = [
    // Roma
    { id: 1, name: 'Excursión al Coliseo', location: 'Roma', type: 'Cultural', pricePerPerson: 120 },
    { id: 2, name: 'Tour por el Vaticano', location: 'Roma', type: 'Cultural', pricePerPerson: 150 },
    { id: 3, name: 'Paseo en Trastevere', location: 'Roma', type: 'Relajación', pricePerPerson: 90 },
  
    // París
    { id: 4, name: 'Tour por la Torre Eiffel', location: 'París', type: 'Cultural', pricePerPerson: 130 },
    { id: 5, name: 'Paseo por el Sena', location: 'París', type: 'Relajación', pricePerPerson: 100 },
    { id: 6, name: 'Tour Gastronómico', location: 'París', type: 'Cultural', pricePerPerson: 140 },
  
    // Capadocia
    { id: 7, name: 'Excursión en Globo', location: 'Capadocia', type: 'Relajación', pricePerPerson: 250 },
    { id: 8, name: 'Tour por las Chimeneas de Hadas', location: 'Capadocia', type: 'Cultural', pricePerPerson: 200 },
    { id: 9, name: 'Excursión a Derinkuyu', location: 'Capadocia', type: 'Aventura', pricePerPerson: 220 },
  
    // Tokio
    { id: 10, name: 'Tour por el Palacio Imperial', location: 'Tokio', type: 'Cultural', pricePerPerson: 110 },
    { id: 11, name: 'Paseo por Shinjuku', location: 'Tokio', type: 'Relajación', pricePerPerson: 80 },
    { id: 12, name: 'Excursión al Monte Takao', location: 'Tokio', type: 'Aventura', pricePerPerson: 160 },
  
    // Nueva York
    { id: 13, name: 'Tour por Central Park', location: 'Nueva York', type: 'Relajación', pricePerPerson: 100 },
    { id: 14, name: 'Visita a la Estatua de la Libertad', location: 'Nueva York', type: 'Cultural', pricePerPerson: 140 },
    { id: 15, name: 'Tour por Times Square', location: 'Nueva York', type: 'Cultural', pricePerPerson: 120 },
  
    // Kioto
    { id: 16, name: 'Tour por el Bosque de Bambú', location: 'Kioto', type: 'Relajación', pricePerPerson: 90 },
    { id: 17, name: 'Excursión al Templo Dorado', location: 'Kioto', type: 'Cultural', pricePerPerson: 130 },
    { id: 18, name: 'Paseo por Gion', location: 'Kioto', type: 'Cultural', pricePerPerson: 100 },
  
    // Ámsterdam
    { id: 19, name: 'Paseo por los Canales', location: 'Ámsterdam', type: 'Relajación', pricePerPerson: 150 },
    { id: 20, name: 'Visita al Museo Van Gogh', location: 'Ámsterdam', type: 'Cultural', pricePerPerson: 120 },
    { id: 21, name: 'Tour en Bicicleta', location: 'Ámsterdam', type: 'Aventura', pricePerPerson: 110 },
  
    // Machu Picchu
    { id: 22, name: 'Excursión a las Ruinas', location: 'Machu Picchu', type: 'Cultural', pricePerPerson: 250 },
    { id: 23, name: 'Tour por la Montaña', location: 'Machu Picchu', type: 'Aventura', pricePerPerson: 300 },
    { id: 24, name: 'Caminata al Valle Sagrado', location: 'Machu Picchu', type: 'Aventura', pricePerPerson: 200 },
  
    // Atenas
    { id: 25, name: 'Tour por la Acrópolis', location: 'Atenas', type: 'Cultural', pricePerPerson: 180 },
    { id: 26, name: 'Excursión al Templo de Poseidón', location: 'Atenas', type: 'Cultural', pricePerPerson: 150 },
    { id: 27, name: 'Tour Gastronómico', location: 'Atenas', type: 'Cultural', pricePerPerson: 100 },
  
    // Londres
    { id: 28, name: 'Tour por el Palacio de Buckingham', location: 'Londres', type: 'Cultural', pricePerPerson: 160 },
    { id: 29, name: 'Paseo por el Támesis', location: 'Londres', type: 'Relajación', pricePerPerson: 100 },
    { id: 30, name: 'Excursión a Stonehenge', location: 'Londres', type: 'Aventura', pricePerPerson: 200 },
  
    // Marrakech
    { id: 31, name: 'Tour por el Mercado de Especias', location: 'Marrakech', type: 'Cultural', pricePerPerson: 80 },
    { id: 32, name: 'Paseo en Camello', location: 'Marrakech', type: 'Aventura', pricePerPerson: 140 },
    { id: 33, name: 'Excursión al Desierto', location: 'Marrakech', type: 'Aventura', pricePerPerson: 200 },
  
    // El Cairo
    { id: 34, name: 'Tour por las Pirámides de Giza', location: 'El Cairo', type: 'Cultural', pricePerPerson: 250 },
    { id: 35, name: 'Excursión al Museo Egipcio', location: 'El Cairo', type: 'Cultural', pricePerPerson: 120 },
    { id: 36, name: 'Paseo por el Río Nilo', location: 'El Cairo', type: 'Relajación', pricePerPerson: 150 },
  
    // Dubái
    { id: 37, name: 'Excursión al Desierto de Dubái', location: 'Dubái', type: 'Aventura', pricePerPerson: 200 },
    { id: 38, name: 'Tour por el Burj Khalifa', location: 'Dubái', type: 'Cultural', pricePerPerson: 180 },
    { id: 39, name: 'Paseo por la Marina', location: 'Dubái', type: 'Relajación', pricePerPerson: 150 },
  
    // Bangkok
    { id: 40, name: 'Excursión al Mercado Flotante', location: 'Bangkok', type: 'Cultural', pricePerPerson: 90 },
    { id: 41, name: 'Tour por el Gran Palacio', location: 'Bangkok', type: 'Cultural', pricePerPerson: 150 },
    { id: 42, name: 'Paseo por el Río Chao Phraya', location: 'Bangkok', type: 'Relajación', pricePerPerson: 110 },
  
    // Noruega
    { id: 43, name: 'Paseo en Barco por los Fiordos', location: 'Noruega', type: 'Relajación', pricePerPerson: 200 },
    { id: 44, name: 'Excursión al Glaciar Jostedalsbreen', location: 'Noruega', type: 'Aventura', pricePerPerson: 250 },
    { id: 45, name: 'Tour por la Aurora Boreal', location: 'Noruega', type: 'Aventura', pricePerPerson: 300 },
  ];
  
  
  
  
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [filteredExcursions, setFilteredExcursions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Verificar que al menos uno de los tres campos esté completo
    if (!location && !type && !date) {
      alert('Por favor, selecciona al menos un criterio de búsqueda.');
      return;
    }

    // Filtrar las excursiones usando los campos rellenados
    const results = excursionesData.filter((excursion) => {
      const matchesLocation = location ? excursion.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesType = type ? excursion.type.toLowerCase().includes(type.toLowerCase()) : true;
      const matchesDate = date ? true : true; // Aquí podrías implementar lógica de fechas si es necesario
      return matchesLocation && matchesType && matchesDate;
    });

    setFilteredExcursions(results);
  };

  const handleExcursionClick = (id) => {
    navigate(`/excursiones/${id}`);
  };

  return (
    <div className="excursiones-container">
      <h2>Buscar Excursiones</h2>
      <form onSubmit={handleSearch} className="excursiones-search-form">
        <div className="form-group">
          <label>Ubicación</label>
          <input
            type="text"
            placeholder="Ej: Andes, Caribe..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Tipo</label>
          <input
            type="text"
            placeholder="Ej: Aventura, Cultural..."
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Fecha</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="search-button">Buscar</button>
      </form>

      <div className="excursiones-list">
        {filteredExcursions.length > 0 ? (
          filteredExcursions.map((excursion) => (
            <div
              key={excursion.id}
              className="excursion-card"
              onClick={() => handleExcursionClick(excursion.id)}
            >
              <h3>{excursion.name}</h3>
              <p>Ubicación: {excursion.location}</p>
              <p>Tipo: {excursion.type}</p>
              <p>Precio por persona: ${excursion.pricePerPerson}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron excursiones.</p>
        )}
      </div>
    </div>
  );
}

export default Excursiones;
