import { motion } from 'framer-motion';
import './ProgressBar.css';

function ProgressBar({ progress, label, showLabel = true }) {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <motion.div 
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {showLabel && label && (
        <span className="progress-text">{label}</span>
      )}
    </div>
  );
}

export default ProgressBar;
