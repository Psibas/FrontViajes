// src/components/Excursiones/ExcursionDetalles.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ExcursionDetalles.css';

function ExcursionDetalles() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const excursionsData = {
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
    

  const excursion = excursionsData[id];
  const [people, setPeople] = useState(1);

  if (!excursion) {
    return <div>Excursión no encontrada</div>;
  }

  const totalPrice = excursion.pricePerPerson * people;

  const handleAddToCart = () => {
    const item = {
      id: `excursion-${id}`,
      name: excursion.name,
      price: totalPrice,
      quantity: 1,
    };
    addToCart(item);
  };

  return (
    <div className="excursion-details-container">
      <h2>{excursion.name}</h2>
      <p>{excursion.description}</p>
      <p>Precio por persona: ${excursion.pricePerPerson}</p>

      <label>
        Personas:
        <input type="number" min="1" value={people} onChange={(e) => setPeople(Number(e.target.value))} />
      </label>

      <p>Total: ${totalPrice.toFixed(2)}</p>

      <button onClick={handleAddToCart} className="add-to-cart-button">
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ExcursionDetalles;
