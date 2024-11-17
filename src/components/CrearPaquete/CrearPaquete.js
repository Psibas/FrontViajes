// src/components/CrearPaquete/CrearPaquete.js
import React, { useState } from 'react';
import './CrearPaquete.css';

function CrearPaquete({ addCustomPackage }) {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedExcursions, setSelectedExcursions] = useState([]);
  const [selectedTransport, setSelectedTransport] = useState(null);

  const [flightSearch, setFlightSearch] = useState('');
  const [hotelSearch, setHotelSearch] = useState('');
  const [excursionSearch, setExcursionSearch] = useState('');
  const [transportSearch, setTransportSearch] = useState('');

  const flightData = [
    { id: 1, origin: 'Madrid', destination: 'Londres', price: 200 },
    { id: 2, origin: 'París', destination: 'Nueva York', price: 500 },
    // Añadir más vuelos aquí...
  ];

  const hotelData = [
    { id: 1, city: 'Londres', name: 'Hotel Central Londres', pricePerNight: 150 },
    { id: 2, city: 'Nueva York', name: 'Hotel Manhattan', pricePerNight: 300 },
    // Añadir más hoteles aquí...
  ];

  const excursionData = [
    { id: 1, location: 'Londres', name: 'Excursión al Big Ben', pricePerPerson: 50 },
    { id: 2, location: 'Nueva York', name: 'Tour por Central Park', pricePerPerson: 70 },
    // Añadir más excursiones aquí...
  ];

  const transportData = [
    { id: 1, type: 'Taxi', location: 'Londres', tarifa: 30 },
    { id: 2, type: 'Metro', location: 'Nueva York', tarifa: 5 },
    // Añadir más transportes aquí...
  ];

  const handleCreatePackage = () => {
    if (!selectedFlight || !selectedHotel || !selectedExcursions.length || !selectedTransport) {
      alert('Por favor, selecciona al menos un elemento de cada categoría.');
      return;
    }

    const totalPrice =
      selectedFlight.price +
      selectedHotel.pricePerNight +
      selectedExcursions.reduce((acc, curr) => acc + curr.pricePerPerson, 0) +
      selectedTransport.tarifa;

    const customPackage = {
      id: Math.random(),
      name: 'Paquete Personalizado',
      description: 'Un paquete personalizado creado por el usuario.',
      price: totalPrice,
      flight: selectedFlight,
      hotel: selectedHotel,
      excursions: selectedExcursions,
      transport: selectedTransport,
    };

    addCustomPackage(customPackage);
    alert('¡Paquete creado con éxito!');
  };

  return (
    <div className="create-package-container">
      <h2>Crear Paquete</h2>

      {/* Búsqueda y selección de vuelos */}
      <div className="category-section">
        <h3>Selecciona un Vuelo</h3>
        <input
          type="text"
          placeholder="Busca un vuelo"
          value={flightSearch}
          onChange={(e) => setFlightSearch(e.target.value)}
        />
        <div className="results">
          {flightData
            .filter((flight) =>
              flight.destination.toLowerCase().includes(flightSearch.toLowerCase())
            )
            .map((flight) => (
              <div
                key={flight.id}
                className={`result-card ${selectedFlight?.id === flight.id ? 'selected' : ''}`}
                onClick={() => setSelectedFlight(flight)}
              >
                {flight.origin} → {flight.destination} (${flight.price})
              </div>
            ))}
        </div>
      </div>

      {/* Búsqueda y selección de hoteles */}
      <div className="category-section">
        <h3>Selecciona un Hotel</h3>
        <input
          type="text"
          placeholder="Busca un hotel"
          value={hotelSearch}
          onChange={(e) => setHotelSearch(e.target.value)}
        />
        <div className="results">
          {hotelData
            .filter((hotel) =>
              hotel.city.toLowerCase().includes(hotelSearch.toLowerCase())
            )
            .map((hotel) => (
              <div
                key={hotel.id}
                className={`result-card ${selectedHotel?.id === hotel.id ? 'selected' : ''}`}
                onClick={() => setSelectedHotel(hotel)}
              >
                {hotel.name} - {hotel.city} (${hotel.pricePerNight}/noche)
              </div>
            ))}
        </div>
      </div>

      {/* Búsqueda y selección de excursiones */}
      <div className="category-section">
        <h3>Selecciona Excursiones</h3>
        <input
          type="text"
          placeholder="Busca una excursión"
          value={excursionSearch}
          onChange={(e) => setExcursionSearch(e.target.value)}
        />
        <div className="results">
          {excursionData
            .filter((excursion) =>
              excursion.location.toLowerCase().includes(excursionSearch.toLowerCase())
            )
            .map((excursion) => (
              <div
                key={excursion.id}
                className={`result-card ${
                  selectedExcursions.some((e) => e.id === excursion.id) ? 'selected' : ''
                }`}
                onClick={() => {
                  if (selectedExcursions.some((e) => e.id === excursion.id)) {
                    setSelectedExcursions(
                      selectedExcursions.filter((e) => e.id !== excursion.id)
                    );
                  } else {
                    setSelectedExcursions([...selectedExcursions, excursion]);
                  }
                }}
              >
                {excursion.name} - {excursion.location} (${excursion.pricePerPerson}/persona)
              </div>
            ))}
        </div>
      </div>

      {/* Búsqueda y selección de transporte */}
      <div className="category-section">
        <h3>Selecciona un Transporte</h3>
        <input
          type="text"
          placeholder="Busca un transporte"
          value={transportSearch}
          onChange={(e) => setTransportSearch(e.target.value)}
        />
        <div className="results">
          {transportData
            .filter((transport) =>
              transport.location.toLowerCase().includes(transportSearch.toLowerCase())
            )
            .map((transport) => (
              <div
                key={transport.id}
                className={`result-card ${selectedTransport?.id === transport.id ? 'selected' : ''}`}
                onClick={() => setSelectedTransport(transport)}
              >
                {transport.type} - {transport.location} (${transport.tarifa})
              </div>
            ))}
        </div>
      </div>

      <button className="create-package-button" onClick={handleCreatePackage}>
        Crear Paquete
      </button>
    </div>
  );
}

export default CrearPaquete;
