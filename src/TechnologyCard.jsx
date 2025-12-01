export default function TechnologyCard({ id, title, description, status, onToggle }) {
    return (
      <div 
        className="technology-card card"
        onClick={onToggle}
        style={{ cursor: 'pointer' }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <small>
          {
            status === 'completed' ? ' Завершено' :
            status === 'in-progress' ? ' В процессе' : ' Не начато'
          }
        </small>
      </div>
    );
  }