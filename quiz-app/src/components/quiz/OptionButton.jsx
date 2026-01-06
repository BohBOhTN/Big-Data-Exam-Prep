import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './OptionButton.css';

function OptionButton({ option, isSelected, onClick, delay = 0 }) {
  return (
    <motion.button
      className={`option-btn ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="option-letter">{option.letter}</span>
      <span className="option-text">{option.text}</span>
      {isSelected && (
        <motion.div 
          className="selected-indicator"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <CheckCircle2 size={20} />
        </motion.div>
      )}
    </motion.button>
  );
}

export default OptionButton;
