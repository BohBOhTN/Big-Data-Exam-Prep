import { motion } from 'framer-motion';
import { Clock, X } from 'lucide-react';
import './QuizHeader.css';

function QuizHeader({ 
  currentIndex, 
  totalQuestions, 
  topicName, 
  elapsedTime, 
  onCancel,
  formatTime 
}) {
  return (
    <motion.header 
      className="quiz-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="header-left">
        <span className="question-counter">
          Question {currentIndex + 1} sur {totalQuestions}
        </span>
        <span className="topic-badge">
          {topicName}
        </span>
      </div>
      <div className="header-right">
        <div className="timer">
          <Clock size={18} />
          {formatTime(elapsedTime)}
        </div>
        <button 
          className="cancel-btn"
          onClick={onCancel}
          title="Annuler le quiz"
        >
          <X size={20} />
        </button>
      </div>
    </motion.header>
  );
}

export default QuizHeader;
