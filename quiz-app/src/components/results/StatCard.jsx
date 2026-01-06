import './StatCard.css';

function StatCard({ icon: Icon, value, label, variant = 'default' }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${variant}`}>
        <Icon size={24} />
      </div>
      <div className="stat-content">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  );
}

export default StatCard;
