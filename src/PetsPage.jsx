import React, { useState } from 'react';
import './PetsPage.css';
import richImage from './images/rich.jpg';
import timofeyImage from './images/timofey1.jpg';
import bellaImage from './images/bella3.jpg';

const PetsPage = () => {
  // Данные о животных
  const pets = [
    { name: "Тимофей", image: timofeyImage },
    { name: "Рич", image: richImage },
    { name: "Белла", image: bellaImage },
  ];

  // Погодный виджет
  const [selectedCity, setSelectedCity] = useState("Москва");
  const cities = ["Москва", "Санкт-Петербург", "Екатеринбург", "Новосибирск", "Казань"];
  const fakeTemp = Math.floor(Math.random() * 25) - 5; 

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="pets-page">
      <h1>Наши питомцы</h1>

      {/* Погодный виджет */}
      <div className="weather-widget">
        <h2>Погода</h2>
        <label>
          Город:
          <select value={selectedCity} onChange={handleCityChange}>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
        <p className="temperature">{fakeTemp}°C</p>
      </div>

      {/* Карточки животных */}
      <div className="pets-grid">
        {pets.map((pet, index) => (
          <div key={index} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsPage;
