// Datos de vuelos
export const flightData = [
    { id: 1, origin: 'Madrid', destination: 'Nueva York', date: '2024-12-10', returnDate: '2024-12-20', class: 'Turista', price: 500 },
    { id: 2, origin: 'Barcelona', destination: 'París', date: '2024-12-15', returnDate: '2024-12-25', class: 'Business', price: 700 },
    { id: 3, origin: 'Ciudad de México', destination: 'Cancún', date: '2024-12-20', returnDate: '2024-12-28', class: 'Preferencial', price: 400 },
    { id: 4, origin: 'Los Ángeles', destination: 'Tokio', date: '2024-12-25', returnDate: '2025-01-05', class: 'Turista', price: 1000 },
    { id: 5, origin: 'Nueva York', destination: 'Londres', date: '2024-12-30', returnDate: '2025-01-10', class: 'Business', price: 800 },
    { id: 6, origin: 'Madrid', destination: 'París', date: '2024-12-12', returnDate: '2024-12-22', class: 'Turista', price: 300 },
    { id: 7, origin: 'Barcelona', destination: 'Nueva York', date: '2024-12-18', returnDate: '2024-12-28', class: 'Preferencial', price: 1200 },
    { id: 8, origin: 'Ciudad de México', destination: 'Tokio', date: '2024-12-22', returnDate: '2025-01-05', class: 'Business', price: 1500 },
    { id: 9, origin: 'Los Ángeles', destination: 'Londres', date: '2024-12-28', returnDate: '2025-01-10', class: 'Turista', price: 750 },
  ];
  
  // Detalles de vuelos
  export const flightDetails = {
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
  
  // Datos de hoteles
  export const hotelData = [
    { id: 1, country: 'España', city: 'Madrid', name: 'Hotel Madrid Centro', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 100, availableFrom: '2024-12-01', availableTo: '2025-01-31' },
    { id: 2, country: 'España', city: 'Madrid', name: 'Hotel Gran Vía', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 110, availableFrom: '2024-12-15', availableTo: '2025-02-15' },
    { id: 3, country: 'España', city: 'Madrid', name: 'Hotel Palacio Real', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 120, availableFrom: '2024-12-20', availableTo: '2025-02-20' },
    { id: 4, country: 'España', city: 'Barcelona', name: 'Hotel Barcelona Beach', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 130, availableFrom: '2024-12-01', availableTo: '2025-01-15' },
    { id: 5, country: 'España', city: 'Barcelona', name: 'Hotel Sagrada Familia', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 140, availableFrom: '2024-12-10', availableTo: '2025-02-10' },
    { id: 6, country: 'España', city: 'Barcelona', name: 'Hotel Montjuic', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 115, availableFrom: '2024-12-05', availableTo: '2025-01-25' },
    { id: 7, country: 'España', city: 'Sevilla', name: 'Hotel Sevilla Histórico', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 105, availableFrom: '2024-12-01', availableTo: '2025-01-20' },
    { id: 8, country: 'España', city: 'Sevilla', name: 'Hotel Guadalquivir', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 125, availableFrom: '2024-12-12', availableTo: '2025-02-12' },
    { id: 9, country: 'España', city: 'Sevilla', name: 'Hotel Giralda', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 135, availableFrom: '2024-12-18', availableTo: '2025-02-18' },
    { id: 10, country: 'México', city: 'Ciudad de México', name: 'Hotel Reforma', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 150, availableFrom: '2024-12-05', availableTo: '2025-02-28' },
    { id: 11, country: 'México', city: 'Ciudad de México', name: 'Hotel Polanco', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 160, availableFrom: '2024-12-10', availableTo: '2025-03-05' },
    { id: 12, country: 'México', city: 'Ciudad de México', name: 'Hotel Centro Histórico', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 140, availableFrom: '2024-12-15', availableTo: '2025-03-10' },
    { id: 13, country: 'México', city: 'Cancún', name: 'Hotel Cancún Resort', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 180, availableFrom: '2024-12-01', availableTo: '2025-01-31' },
    { id: 14, country: 'México', city: 'Cancún', name: 'Hotel Riviera Maya', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 200, availableFrom: '2024-12-08', availableTo: '2025-02-20' },
    { id: 15, country: 'México', city: 'Cancún', name: 'Hotel Playa Blanca', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 170, availableFrom: '2024-12-18', availableTo: '2025-02-25' },
    { id: 16, country: 'México', city: 'Guadalajara', name: 'Hotel Guadalajara Centro', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 110, availableFrom: '2024-12-01', availableTo: '2025-01-25' },
    { id: 17, country: 'México', city: 'Guadalajara', name: 'Hotel Jalisco Inn', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 115, availableFrom: '2024-12-15', availableTo: '2025-03-01' },
    { id: 18, country: 'México', city: 'Guadalajara', name: 'Hotel Zapopan', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 125, availableFrom: '2024-12-20', availableTo: '2025-03-10' },
    { id: 19, country: 'Estados Unidos', city: 'Nueva York', name: 'Hotel Manhattan', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 220, availableFrom: '2024-12-05', availableTo: '2025-02-28' },
    { id: 20, country: 'Estados Unidos', city: 'Nueva York', name: 'Hotel Central Park', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 230, availableFrom: '2024-12-12', availableTo: '2025-03-15' },
    { id: 21, country: 'Estados Unidos', city: 'Nueva York', name: 'Hotel Times Square', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 240, availableFrom: '2024-12-20', availableTo: '2025-03-20' },
    { id: 22, country: 'Estados Unidos', city: 'Los Ángeles', name: 'Hotel Hollywood', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 180, availableFrom: '2024-12-01', availableTo: '2025-01-31' },
    { id: 23, country: 'Estados Unidos', city: 'Los Ángeles', name: 'Hotel Beverly Hills', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 250, availableFrom: '2024-12-10', availableTo: '2025-02-25' },
    { id: 24, country: 'Estados Unidos', city: 'Los Ángeles', name: 'Hotel Downtown LA', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 190, availableFrom: '2024-12-18', availableTo: '2025-03-10' },
    { id: 25, country: 'Estados Unidos', city: 'Chicago', name: 'Hotel Chicago Loop', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 160, availableFrom: '2024-12-05', availableTo: '2025-01-15' },
    { id: 26, country: 'Estados Unidos', city: 'Chicago', name: 'Hotel Magnificent Mile', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 170, availableFrom: '2024-12-12', availableTo: '2025-02-12' },
    { id: 27, country: 'Estados Unidos', city: 'Chicago', name: 'Hotel River North', image: 'https://via.placeholder.com/300x200', pricePerNightPerPerson: 175, availableFrom: '2024-12-18', availableTo: '2025-03-18' },
  ];
  
  // Detalles de hoteles
  export const hotelDetails = {
    1: { name: 'Hotel Madrid Centro', description: 'Hotel céntrico en Madrid con vistas al Palacio Real.', pricePerNight: 100, availableFrom: '2024-12-01', availableTo: '2025-01-31' },
    2: { name: 'Hotel Gran Vía', description: 'Ubicado en la Gran Vía de Madrid, con fácil acceso a tiendas y restaurantes.', pricePerNight: 110, availableFrom: '2024-12-15', availableTo: '2025-02-15' },
    3: { name: 'Hotel Palacio Real', description: 'A pasos del Palacio Real, ideal para disfrutar de la historia de Madrid.', pricePerNight: 120, availableFrom: '2024-12-20', availableTo: '2025-02-20' },
    4: { name: 'Hotel Barcelona Beach', description: 'Hotel junto a la playa en Barcelona, con acceso directo al mar.', pricePerNight: 130, availableFrom: '2024-12-01', availableTo: '2025-01-15' },
    5: { name: 'Hotel Sagrada Familia', description: 'Ubicado cerca de la Sagrada Familia, ideal para turistas.', pricePerNight: 140, availableFrom: '2024-12-10', availableTo: '2025-02-10' },
    6: { name: 'Hotel Montjuic', description: 'Cerca de Montjuic, con vistas panorámicas de Barcelona.', pricePerNight: 115, availableFrom: '2024-12-05', availableTo: '2025-01-25' },
    7: { name: 'Hotel Sevilla Histórico', description: 'Hotel en el centro histórico de Sevilla, cerca de la catedral.', pricePerNight: 105, availableFrom: '2024-12-01', availableTo: '2025-01-20' },
    8: { name: 'Hotel Guadalquivir', description: 'Ubicado a orillas del río Guadalquivir, ideal para un paseo relajante.', pricePerNight: 125, availableFrom: '2024-12-12', availableTo: '2025-02-12' },
    9: { name: 'Hotel Giralda', description: 'Cerca de la Giralda, perfecto para explorar Sevilla.', pricePerNight: 135, availableFrom: '2024-12-18', availableTo: '2025-02-18' },
    10: { name: 'Hotel Reforma', description: 'Hotel de lujo en la zona de Reforma en Ciudad de México.', pricePerNight: 150, availableFrom: '2024-12-05', availableTo: '2025-02-28' },
    11: { name: 'Hotel Polanco', description: 'Elegante hotel en el barrio de Polanco, cerca de tiendas y restaurantes.', pricePerNight: 160, availableFrom: '2024-12-10', availableTo: '2025-03-05' },
    12: { name: 'Hotel Centro Histórico', description: 'Ubicado en el Centro Histórico, cerca de los museos principales.', pricePerNight: 140, availableFrom: '2024-12-15', availableTo: '2025-03-10' },
    13: { name: 'Hotel Cancún Resort', description: 'Resort todo incluido en Cancún, ideal para familias.', pricePerNight: 180, availableFrom: '2024-12-01', availableTo: '2025-01-31' },
    14: { name: 'Hotel Riviera Maya', description: 'Hotel en la Riviera Maya con actividades acuáticas.', pricePerNight: 200, availableFrom: '2024-12-08', availableTo: '2025-02-20' },
    15: { name: 'Hotel Playa Blanca', description: 'Ubicado frente a la playa, con acceso a deportes acuáticos.', pricePerNight: 170, availableFrom: '2024-12-18', availableTo: '2025-02-25' },
    16: { name: 'Hotel Guadalajara Centro', description: 'Ubicado en el centro de Guadalajara, cerca de la catedral.', pricePerNight: 110, availableFrom: '2024-12-01', availableTo: '2025-01-25' },
    17: { name: 'Hotel Jalisco Inn', description: 'Hotel acogedor en Guadalajara, ideal para familias.', pricePerNight: 115, availableFrom: '2024-12-15', availableTo: '2025-03-01' },
    18: { name: 'Hotel Zapopan', description: 'Ubicado en el corazón de Zapopan, cerca de plazas comerciales.', pricePerNight: 125, availableFrom: '2024-12-20', availableTo: '2025-03-10' },
    19: { name: 'Hotel Manhattan', description: 'Elegante hotel en el corazón de Manhattan, NY.', pricePerNight: 220, availableFrom: '2024-12-05', availableTo: '2025-02-28' },
    20: { name: 'Hotel Central Park', description: 'Hotel con vistas a Central Park, ideal para turistas.', pricePerNight: 230, availableFrom: '2024-12-12', availableTo: '2025-03-15' },
    21: { name: 'Hotel Times Square', description: 'Ubicado en Times Square, en el centro de la acción.', pricePerNight: 240, availableFrom: '2024-12-20', availableTo: '2025-03-20' },
    22: { name: 'Hotel Hollywood', description: 'Hotel en el centro de Hollywood con vistas al letrero.', pricePerNight: 180, availableFrom: '2024-12-01', availableTo: '2025-01-31' },
    23: { name: 'Hotel Beverly Hills', description: 'Hotel de lujo en Beverly Hills, con tiendas exclusivas.', pricePerNight: 250, availableFrom: '2024-12-10', availableTo: '2025-02-25' },
    24: { name: 'Hotel Downtown LA', description: 'Hotel en el centro de Los Ángeles, cerca de atracciones.', pricePerNight: 190, availableFrom: '2024-12-18', availableTo: '2025-03-10' },
    25: { name: 'Hotel Chicago Loop', description: 'Ubicado en el Loop de Chicago, cerca de la Magnificent Mile.', pricePerNight: 160, availableFrom: '2024-12-05', availableTo: '2025-01-15' },
    26: { name: 'Hotel Magnificent Mile', description: 'Hotel en la Magnificent Mile, ideal para compras.', pricePerNight: 170, availableFrom: '2024-12-12', availableTo: '2025-02-12' },
    27: { name: 'Hotel River North', description: 'Hotel moderno en River North, cerca de galerías de arte.', pricePerNight: 175, availableFrom: '2024-12-18', availableTo: '2025-03-18' },
  };
  
  // Datos de excursiones
  export const excursionData = [
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
  
  // Detalles de excursiones
  export const excursionDetails = {
    1: { name: 'Excursión al Coliseo', description: 'Visita el icónico Coliseo y aprende sobre la antigua Roma.', pricePerPerson: 120 },
    2: { name: 'Tour por el Vaticano', description: 'Explora los museos del Vaticano y la Capilla Sixtina.', pricePerPerson: 150 },
    3: { name: 'Paseo en Trastevere', description: 'Disfruta de las encantadoras calles y cafés de Trastevere.', pricePerPerson: 90 },
  
    4: { name: 'Tour por la Torre Eiffel', description: 'Sube a la cima de la Torre Eiffel y admira París.', pricePerPerson: 130 },
    5: { name: 'Paseo por el Sena', description: 'Un relajante recorrido en barco por el río Sena.', pricePerPerson: 100 },
    6: { name: 'Tour Gastronómico', description: 'Degusta los sabores únicos de París con un guía experto.', pricePerPerson: 140 },
  
    7: { name: 'Excursión en Globo', description: 'Vuela sobre Capadocia y admira sus paisajes únicos.', pricePerPerson: 250 },
    8: { name: 'Tour por las Chimeneas de Hadas', description: 'Descubre las formaciones rocosas de Capadocia.', pricePerPerson: 200 },
    9: { name: 'Excursión a Derinkuyu', description: 'Explora la ciudad subterránea de Derinkuyu.', pricePerPerson: 220 },
  
    10: { name: 'Tour por el Palacio Imperial', description: 'Conoce la historia de Tokio en su majestuoso Palacio Imperial.', pricePerPerson: 110 },
    11: { name: 'Paseo por Shinjuku', description: 'Descubre la vibrante vida nocturna y calles de Shinjuku.', pricePerPerson: 80 },
    12: { name: 'Excursión al Monte Takao', description: 'Disfruta de una caminata por el pintoresco Monte Takao.', pricePerPerson: 160 },
  
    13: { name: 'Tour por Central Park', description: 'Un relajante recorrido por el famoso Central Park.', pricePerPerson: 100 },
    14: { name: 'Visita a la Estatua de la Libertad', description: 'Admira el símbolo de la libertad desde cerca.', pricePerPerson: 140 },
    15: { name: 'Tour por Times Square', description: 'Sumérgete en la energía vibrante de Times Square.', pricePerPerson: 120 },
  
    16: { name: 'Tour por el Bosque de Bambú', description: 'Explora el tranquilo bosque de bambú de Arashiyama.', pricePerPerson: 90 },
    17: { name: 'Excursión al Templo Dorado', description: 'Admira el impresionante Pabellón Dorado de Kioto.', pricePerPerson: 130 },
    18: { name: 'Paseo por Gion', description: 'Descubre el barrio de las geishas en Kioto.', pricePerPerson: 100 },
  
    19: { name: 'Paseo por los Canales', description: 'Navega por los famosos canales de Ámsterdam.', pricePerPerson: 150 },
    20: { name: 'Visita al Museo Van Gogh', description: 'Descubre las obras maestras de Van Gogh.', pricePerPerson: 120 },
    21: { name: 'Tour en Bicicleta', description: 'Recorre la ciudad como un local en bicicleta.', pricePerPerson: 110 },
  
    22: { name: 'Excursión a las Ruinas', description: 'Explora las antiguas ruinas de Machu Picchu.', pricePerPerson: 250 },
    23: { name: 'Tour por la Montaña', description: 'Conquista las alturas de la montaña Machu Picchu.', pricePerPerson: 300 },
    24: { name: 'Caminata al Valle Sagrado', description: 'Conecta con la naturaleza en el Valle Sagrado.', pricePerPerson: 200 },
  
    25: { name: 'Tour por la Acrópolis', description: 'Descubre la icónica Acrópolis y sus templos.', pricePerPerson: 180 },
    26: { name: 'Excursión al Templo de Poseidón', description: 'Visita este templo ubicado junto al mar.', pricePerPerson: 150 },
    27: { name: 'Tour Gastronómico', description: 'Prueba los sabores únicos de la cocina griega.', pricePerPerson: 100 },
  
    28: { name: 'Tour por el Palacio de Buckingham', description: 'Descubre la historia detrás del famoso palacio.', pricePerPerson: 160 },
    29: { name: 'Paseo por el Támesis', description: 'Disfruta de un recorrido relajante por el Támesis.', pricePerPerson: 100 },
    30: { name: 'Excursión a Stonehenge', description: 'Visita este sitio histórico y sus misteriosas piedras.', pricePerPerson: 200 },
  
    31: { name: 'Tour por el Mercado de Especias', description: 'Explora el vibrante mercado de especias en Marrakech.', pricePerPerson: 80 },
    32: { name: 'Paseo en Camello', description: 'Disfruta de un paseo único por el desierto.', pricePerPerson: 140 },
    33: { name: 'Excursión al Desierto', description: 'Explora las dunas doradas del desierto de Marrakech.', pricePerPerson: 200 },
  
    34: { name: 'Tour por las Pirámides de Giza', description: 'Descubre las maravillas de las antiguas pirámides.', pricePerPerson: 250 },
    35: { name: 'Excursión al Museo Egipcio', description: 'Conoce la rica historia de Egipto.', pricePerPerson: 120 },
    36: { name: 'Paseo por el Río Nilo', description: 'Navega por el majestuoso río Nilo.', pricePerPerson: 150 },
  
    37: { name: 'Excursión al Desierto de Dubái', description: 'Explora el desierto en una aventura inolvidable.', pricePerPerson: 200 },
    38: { name: 'Tour por el Burj Khalifa', description: 'Admira las vistas desde el edificio más alto del mundo.', pricePerPerson: 180 },
    39: { name: 'Paseo por la Marina', description: 'Descubre el moderno distrito de la Marina de Dubái.', pricePerPerson: 150 },
  
    40: { name: 'Excursión al Mercado Flotante', description: 'Explora el icónico mercado flotante de Bangkok.', pricePerPerson: 90 },
    41: { name: 'Tour por el Gran Palacio', description: 'Conoce la majestuosidad del Gran Palacio.', pricePerPerson: 150 },
    42: { name: 'Paseo por el Río Chao Phraya', description: 'Disfruta de un paseo relajante por el río.', pricePerPerson: 110 },
  
    43: { name: 'Paseo en Barco por los Fiordos', description: 'Descubre la belleza natural de los fiordos noruegos.', pricePerPerson: 200 },
    44: { name: 'Excursión al Glaciar Jostedalsbreen', description: 'Explora el glaciar más grande de Europa.', pricePerPerson: 250 },
    45: { name: 'Tour por la Aurora Boreal', description: 'Disfruta de un espectáculo natural único.', pricePerPerson: 300 },
  };
  
  // Datos de transporte
  export const transportData = [
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
  
  // Detalles de transporte
  export const transportDetails = {
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
  
  // Datos de paquetes
  export const packageData = [
    { id: 1, name: 'Paquete Playa', description: 'Disfruta de una experiencia única en la playa con todos los servicios incluidos.', image: 'beach.jpg', originalPrice: 2100, discountedPrice: 1890 },
    { id: 2, name: 'Paquete Montaña', description: 'Escápate a las montañas con alojamiento y actividades al aire libre.', image: 'mountain.jpg', originalPrice: 1486.67, discountedPrice: 1338 },
    { id: 3, name: 'Paquete Ciudad', description: 'Explora la vida urbana con hospedaje en el centro.', image: 'city.jpg', originalPrice: 1001.67, discountedPrice: 901.5 },
    { id: 4, name: 'Paquete Aventura', description: 'Vive una experiencia llena de adrenalina en la selva.', image: 'adventure.jpg', originalPrice: 1730, discountedPrice: 1557 },
    { id: 5, name: 'Paquete Relax', description: 'Relájate en un spa de lujo con todas las comodidades.', image: 'relax.jpg', originalPrice: 2150, discountedPrice: 1935 },
    { id: 6, name: 'Paquete Cultural', description: 'Conoce la historia y cultura local con guía experto.', image: 'cultural.jpg', originalPrice: 1165, discountedPrice: 1048.5 },
    { id: 7, name: 'Paquete Safari', description: 'Explora la vida salvaje en un safari inolvidable.', image: 'safari.jpg', originalPrice: 2160, discountedPrice: 1944 },
    { id: 8, name: 'Paquete Crucero', description: 'Navega en un crucero de lujo por el Caribe.', image: 'cruise.jpg', originalPrice: 1750, discountedPrice: 1575 },
    { id: 9, name: 'Paquete Gastronómico', description: 'Disfruta de la mejor comida local con chef privado.', image: 'food.jpg', originalPrice: 1260, discountedPrice: 1134 },
  ];
  export const packageDetails = {
    1: { name: 'Paquete Playa', description: 'Disfruta de un paquete con todo incluido en la playa.', price: 1890 },
    2: { name: 'Paquete Montaña', description: 'Escapada a la montaña para disfrutar de la naturaleza.', price: 1500 },
    3: { name: 'Paquete Ciudad', description: 'Explora las grandes ciudades con tours guiados.', price: 2100 },
    4: { name: 'Paquete Aventura', description: 'Paquete de aventura con deportes extremos.', price: 1750 },
    5: { name: 'Paquete Relax', description: 'Relájate en un spa con todas las comodidades.', price: 2000 },
    6: { name: 'Paquete Cultural', description: 'Sumérgete en la cultura local y descubre la historia.', price: 1550 },
    7: { name: 'Paquete Safari', description: 'Explora la vida salvaje en un safari inolvidable.', price: 2200 },
    8: { name: 'Paquete Crucero', description: 'Navega en un crucero de lujo.', price: 2500 },
    9: { name: 'Paquete Gastronómico', description: 'Disfruta de una experiencia gastronómica única.', price: 1700 },
  };
  