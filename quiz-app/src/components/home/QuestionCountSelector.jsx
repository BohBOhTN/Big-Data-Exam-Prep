import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import './QuestionCountSelector.css';

function QuestionCountSelector({ 
  count, 
  onCountChange, 
  maxQuestions, 
  minQuestions = 5,
  step = 5,
  quickSelectOptions = [5, 10, 20, 30, 40],
  selectedTopicsCount = 0
}) {
  const handleDecrease = () => {
    onCountChange(Math.max(minQuestions, count - step));
  };

  const handleIncrease = () => {
    onCountChange(Math.min(maxQuestions, count + step));
  };

  return (
    <motion.section 
      className="question-count-selector"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h2>Nombre de Questions</h2>
      <div className="selector-controls">
        <button 
          className="count-btn"
          onClick={handleDecrease}
          disabled={count <= minQuestions}
          aria-label="Diminuer le nombre de questions"
        >
          <Minus size={20} />
        </button>
        <div className="count-display">
          <span className="count-number">{count}</span>
          <span className="count-label">questions</span>
        </div>
        <button 
          className="count-btn"
          onClick={handleIncrease}
          disabled={count >= maxQuestions}
          aria-label="Augmenter le nombre de questions"
        >
          <Plus size={20} />
        </button>
      </div>
      <div className="quick-select">
        {quickSelectOptions
          .filter(n => n <= maxQuestions)
          .map(num => (
            <button
              key={num}
              className={`quick-btn ${count === num ? 'active' : ''}`}
              onClick={() => onCountChange(num)}
            >
              {num}
            </button>
          ))}
      </div>
      {selectedTopicsCount > 0 && (
        <p className="max-info">
          Maximum disponible : {maxQuestions} questions de {selectedTopicsCount} sujet(s)
        </p>
      )}
    </motion.section>
  );
}

export default QuestionCountSelector;
