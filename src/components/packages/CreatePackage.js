// src/components/packages/CreatePackage.js
import React, { useState } from 'react';
import {
  hotelData,
  flightData,
  transportData,
  excursionData,
} from '../../data/data';
import './CreatePackage.css';
import { useNavigate } from 'react-router-dom';
import { usePackages } from '../../context/PackageContext';

function CreatePackage() {
  const { addPackage } = usePackages();
  const navigate = useNavigate();
  const [packageName, setPackageName] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [searchFilters, setSearchFilters] = useState({
    hotels: false,
    flights: false,
    transport: false,
    excursions: false,
  });

  const [filteredHotels, setFilteredHotels] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [filteredTransport, setFilteredTransport] = useState([]);
  const [filteredExcursions, setFilteredExcursions] = useState([]);

  const [searchInputs, setSearchInputs] = useState({
    hotelCity: '',
    flightOrigin: '',
    flightDestination: '',
    flightStartDate: '',
    flightReturnDate: '',
    transportType: '',
    excursionLocation: '',
    excursionDate: '',
    hotelCheckIn: '',
    hotelCheckOut: '',
  });

  // Handlers para búsquedas específicas
  const handleSearchHotels = () => {
    const results = hotelData.filter(
      (hotel) =>
        (!searchInputs.hotelCity || hotel.city === searchInputs.hotelCity) &&
        (!searchInputs.hotelCheckIn ||
          new Date(searchInputs.hotelCheckIn) >= new Date(hotel.availableFrom)) &&
        (!searchInputs.hotelCheckOut ||
          new Date(searchInputs.hotelCheckOut) <= new Date(hotel.availableTo))
    );
    setFilteredHotels(results);
  };

  const handleSearchFlights = () => {
    const results = flightData.filter(
      (flight) =>
        (!searchInputs.flightOrigin || flight.origin === searchInputs.flightOrigin) &&
        (!searchInputs.flightDestination || flight.destination === searchInputs.flightDestination)
    );
    setFilteredFlights(results);
  };

  const handleSearchTransport = () => {
    const results = transportData.filter(
      (transport) =>
        !searchInputs.transportType || transport.type === searchInputs.transportType
    );
    setFilteredTransport(results);
  };

  const handleSearchExcursions = () => {
    const results = excursionData.filter(
      (excursion) =>
        (!searchInputs.excursionLocation || excursion.location === searchInputs.excursionLocation) &&
        (!searchInputs.excursionDate || new Date(searchInputs.excursionDate) >= new Date())
    );
    setFilteredExcursions(results);
  };

  const handleAddItem = (item) => {
    const itemWithDetails = {
      id: item.id,
      name: item.name || `${item.origin} - ${item.destination}`,
      details: item.class
        ? `Clase: ${item.class}, Salida: ${item.date}, Retorno: ${item.returnDate}`
        : item.description || '',
      price: item.price ||
             item.pricePerNightPerPerson ||
             item.tarifa ||
             item.pricePerPerson || 0,
    };

    setSelectedItems((prev) => [...prev, itemWithDetails]);
    setTotalPrice((prevTotal) => prevTotal + itemWithDetails.price);
  };

  const handleRemoveItem = (index) => {
    const itemToRemove = selectedItems[index];
    setSelectedItems((prev) => prev.filter((_, i) => i !== index));
    setTotalPrice((prevTotal) => prevTotal - itemToRemove.price);
  };

  const handleCreatePackage = () => {
    if (!packageName.trim()) {
      alert('Por favor, ingresa un nombre para el paquete.');
      return;
    }

    const newPackage = {
      id: Date.now(), // Genera un ID único
      name: packageName,
      description: `Paquete personalizado: ${packageName}`,
      totalPrice,
      items: selectedItems,
    };

    addPackage(newPackage); // Añade el paquete al contexto
    alert('¡Paquete creado con éxito!');
    navigate('/paquetes'); // Redirige a la página de paquetes
  };

  return (
    <div className="create-package-container">
      <h2>Crear Nuevo Paquete</h2>

      <div className="package-name-input">
        <label htmlFor="package-name">Nombre del Paquete:</label>
        <input
          id="package-name"
          type="text"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
          placeholder="Ingresa un nombre para tu paquete"
        />
      </div>

      {/* Filtros de búsqueda */}
      <div className="search-filters">
        <label>
          <input
            type="checkbox"
            checked={searchFilters.hotels}
            onChange={(e) =>
              setSearchFilters({ ...searchFilters, hotels: e.target.checked })
            }
          />
          Buscar Hoteles
        </label>
        <label>
          <input
            type="checkbox"
            checked={searchFilters.flights}
            onChange={(e) =>
              setSearchFilters({ ...searchFilters, flights: e.target.checked })
            }
          />
          Buscar Vuelos
        </label>
        <label>
          <input
            type="checkbox"
            checked={searchFilters.transport}
            onChange={(e) =>
              setSearchFilters({ ...searchFilters, transport: e.target.checked })
            }
          />
          Buscar Transporte
        </label>
        <label>
          <input
            type="checkbox"
            checked={searchFilters.excursions}
            onChange={(e) =>
              setSearchFilters({
                ...searchFilters,
                excursions: e.target.checked,
              })
            }
          />
          Buscar Excursiones
        </label>
      </div>

      {/* Resultados de búsqueda */}
      <div className="search-results">
        {searchFilters.hotels && (
          <div className="section">
            <h3>Hoteles</h3>
            <select
              onChange={(e) =>
                setSearchInputs({ ...searchInputs, hotelCity: e.target.value })
              }
            >
              <option value="">Selecciona una ciudad</option>
              {[...new Set(hotelData.map((hotel) => hotel.city))].map(
                (city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                )
              )}
            </select>
            <label>
              Check-In:
              <input
                type="date"
                value={searchInputs.hotelCheckIn}
                onChange={(e) =>
                  setSearchInputs({
                    ...searchInputs,
                    hotelCheckIn: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Check-Out:
              <input
                type="date"
                value={searchInputs.hotelCheckOut}
                onChange={(e) =>
                  setSearchInputs({
                    ...searchInputs,
                    hotelCheckOut: e.target.value,
                  })
                }
              />
            </label>
            <button onClick={handleSearchHotels}>Buscar Hoteles</button>
            <ul>
              {filteredHotels.map((hotel) => (
                <li key={hotel.id}>
                  {hotel.name} - ${hotel.pricePerNightPerPerson}
                  <button onClick={() => handleAddItem(hotel)}>Añadir</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {searchFilters.flights && (
          <div className="section">
            <h3>Vuelos</h3>
            <select
              onChange={(e) =>
                setSearchInputs({ ...searchInputs, flightOrigin: e.target.value })
              }
            >
              <option value="">Selecciona Origen</option>
              {[...new Set(flightData.map((flight) => flight.origin))].map(
                (origin, index) => (
                  <option key={index} value={origin}>
                    {origin}
                  </option>
                )
              )}
            </select>
            <select
              onChange={(e) =>
                setSearchInputs({
                  ...searchInputs,
                  flightDestination: e.target.value,
                })
              }
            >
              <option value="">Selecciona Destino</option>
              {[...new Set(flightData.map((flight) => flight.destination))].map(
                (destination, index) => (
                  <option key={index} value={destination}>
                    {destination}
                  </option>
                )
              )}
            </select>
            <label>
              Fecha de Salida:
              <input
                type="date"
                value={searchInputs.flightStartDate}
                onChange={(e) =>
                  setSearchInputs({
                    ...searchInputs,
                    flightStartDate: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Fecha de Retorno:
              <input
                type="date"
                value={searchInputs.flightReturnDate}
                onChange={(e) =>
                  setSearchInputs({
                    ...searchInputs,
                    flightReturnDate: e.target.value,
                  })
                }
              />
            </label>
            <button onClick={handleSearchFlights}>Buscar Vuelos</button>
            <ul>
              {filteredFlights.map((flight) => (
                <li key={flight.id}>
                  Origen: {flight.origin}, Destino: {flight.destination} <br />
                  Clase: {flight.class}, Fecha: {flight.date} <br />
                  Precio: ${flight.price.toFixed(2)}
                  <button onClick={() => handleAddItem(flight)}>Añadir</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {searchFilters.transport && (
          <div className="section">
            <h3>Transporte</h3>
            <select
              onChange={(e) =>
                setSearchInputs({
                  ...searchInputs,
                  transportType: e.target.value,
                })
              }
            >
              <option value="">Selecciona Tipo</option>
              {[...new Set(transportData.map((transport) => transport.type))].map(
                (type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                )
              )}
            </select>
            <button onClick={handleSearchTransport}>Buscar Transporte</button>
            <ul>
              {filteredTransport.map((transport) => (
                <li key={transport.id}>
                  {transport.name} - ${transport.tarifa}
                  <button onClick={() => handleAddItem(transport)}>Añadir</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {searchFilters.excursions && (
          <div className="section">
            <h3>Excursiones</h3>
            <select
              onChange={(e) =>
                setSearchInputs({
                  ...searchInputs,
                  excursionLocation: e.target.value,
                })
              }
            >
              <option value="">Selecciona Ubicación</option>
              {[...new Set(excursionData.map((excursion) => excursion.location))].map(
                (location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                )
              )}
            </select>
            <label>
              Fecha:
              <input
                type="date"
                value={searchInputs.excursionDate}
                onChange={(e) =>
                  setSearchInputs({
                    ...searchInputs,
                    excursionDate: e.target.value,
                  })
                }
              />
            </label>
            <button onClick={handleSearchExcursions}>Buscar Excursiones</button>
            <ul>
              {filteredExcursions.map((excursion) => (
                <li key={excursion.id}>
                  {excursion.name} - ${excursion.pricePerPerson}
                  <button onClick={() => handleAddItem(excursion)}>Añadir</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Elementos seleccionados */}
      <div className="selected-items">
        <h3>Elementos del Paquete</h3>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> <br />
              {item.details} <br />
              ${item.price?.toFixed(2)}
              <button onClick={() => handleRemoveItem(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
        <button onClick={handleCreatePackage} className="create-package-button">
          Crear Paquete
        </button>
      </div>
    </div>
  );
}

export default CreatePackage;