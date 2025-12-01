import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import TechnologyList from './TechnologyList';
import AddTechnology from './AddTechnology';
import './App.css';

function App() {
  const [technologies, setTechnologies] = useState([]);

  // Загрузка из localStorage при старте
  useEffect(() => {
    const saved = localStorage.getItem('technologies');
    if (saved) setTechnologies(JSON.parse(saved));
  }, []);

  // Функция для добавления новой технологии
  const handleAddTechnology = (newTech) => {
    const updated = [...technologies, newTech];
    setTechnologies(updated);
    localStorage.setItem('technologies', JSON.stringify(updated));
  };

  // Функция для обновления статуса
  const handleToggleStatus = (id) => {
    const updated = technologies.map(t =>
      t.id === id
        ? {
            ...t,
            status: t.status === 'not-started'
              ? 'in-progress'
              : t.status === 'in-progress'
              ? 'completed'
              : 'not-started'
          }
        : t
    );
    setTechnologies(updated);
    localStorage.setItem('technologies', JSON.stringify(updated));
  };

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<Home 
                technologies={technologies} 
                onToggleStatus={handleToggleStatus} 
              />} 
            />
            <Route 
              path="/technologies" 
              element={<TechnologyList technologies={technologies} />} 
            />
            <Route 
              path="/add" 
              element={<AddTechnology onAdd={handleAddTechnology} />} 
            />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>Практики 19–26 | Трекер технологий</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;