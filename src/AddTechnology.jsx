import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddTechnology({ onAdd }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (title.trim().length < 2) {
      setError('Название должно быть не короче 2 символов');
      return;
    }
    if (description.trim().length < 10) {
      setError('Описание должно быть не короче 10 символов');
      return;
    }

    const newTech = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      status: 'not-started'
    };
    onAdd(newTech);
    navigate('/');
  };

  return (
    <div className="page-container">
      <h1> Добавить технологию</h1>
      <form className="card" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Название (React, Python...)"
          className="form-control"
        />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Описание (минимум 10 символов)"
          rows="3"
          className="form-control"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn btn-primary me-2">Сохранить</button>
        <button type="button" onClick={() => navigate(-1)} className="btn btn-secondary">Отмена</button>
      </form>
    </div>
  );
}