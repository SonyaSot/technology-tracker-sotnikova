import { useState, useEffect } from 'react';
import TechnologyCard from './TechnologyCard';

const getScreenType = (w) => w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop';

export default function Home({ technologies = [], onToggleStatus }) {
  const [viewport, setViewport] = useState(() => ({
    w: window.innerWidth,
    h: window.innerHeight,
    type: getScreenType(window.innerWidth)
  }));

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setViewport({ w, h: window.innerHeight, type: getScreenType(w) });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = technologies.length;
  const done = technologies.filter(t => t.status === 'completed').length;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="page-container">
      <h1>Главная страница</h1>
      
      <section className="card">
        <h2>Информация об окне</h2>
        <p>Ширина × Высота: {viewport.w} × {viewport.h}</p>
        <p>Тип устройства: {viewport.type}</p>
        <p>Прогресс: {percent}% ({done} из {total})</p>
      </section>

      <h2>Ваши технологии ({total})</h2>
      {total === 0 ? (
        <p>Нет технологий. <a href="/add">Добавьте первую!</a></p>
      ) : (
        <div className="technologies-grid">
          {technologies.map(t => (
            <TechnologyCard
              key={t.id}
              {...t}
              onToggle={() => onToggleStatus(t.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}