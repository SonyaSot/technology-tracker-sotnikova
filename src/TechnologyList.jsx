import { Link } from 'react-router-dom';

export default function TechnologyList({ technologies = [] }) {
  return (
    <div className="page-container">
      <h1>Все технологии ({technologies.length})</h1>
      {technologies.length === 0 ? (
        <p>Список пуст. <Link to="/add">Добавьте первую технологию!</Link></p>
      ) : (
        <div className="technologies-grid">
          {technologies.map(t => (
            <div key={t.id} className="technology-card card">
              <h3>{t.title}</h3>
              <p>{t.description}</p>
              <small>
                Статус: {
                  t.status === 'completed' ? 'Завершено' :
                  t.status === 'in-progress' ? 'В процессе' : 'Не начато'
                }
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}