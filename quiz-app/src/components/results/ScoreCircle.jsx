import { motion } from 'framer-motion';
import './ScoreCircle.css';

function ScoreCircle({ percentage, grade }) {
  return (
    <motion.div 
      className="score-circle"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      style={{ '--score-color': grade.color }}
    >
      <div className="score-inner">
        <span className="score-percentage">{percentage}%</span>
        <span className="score-grade">{grade.letter}</span>
      </div>
      <svg className="score-ring" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" className="ring-bg" />
        <motion.circle 
          cx="50" 
          cy="50" 
          r="45" 
          className="ring-progress"
          initial={{ strokeDashoffset: 283 }}
          animate={{ strokeDashoffset: 283 - (283 * percentage / 100) }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ stroke: grade.color }}
        />
      </svg>
    </motion.div>
  );
}

export default ScoreCircle;
