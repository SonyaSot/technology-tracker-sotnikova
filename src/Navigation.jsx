import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">Трекер технологий</Link>
      </div>
      <ul className="nav-links">
        <li><Link className={isActive('/') ? 'active' : ''} to="/">Главная</Link></li>
        <li><Link className={isActive('/technologies') ? 'active' : ''} to="/technologies">Все технологии</Link></li>
        <li><Link className={isActive('/add') ? 'active' : ''} to="/add">+ Добавить</Link></li>
      </ul>
    </nav>
  );
}