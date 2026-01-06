import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import OptionButton from './OptionButton';
import './QuestionCard.css';

function QuestionCard({ 
  question, 
  questionIndex, 
  selectedAnswer, 
  onSelectAnswer 
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionIndex}
        className="question-card"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="question-header">
          <span className="question-number">Q{questionIndex + 1}</span>
          {selectedAnswer && (
            <span className="answered-badge">
              <CheckCircle2 size={16} />
              Répondu
            </span>
          )}
        </div>
        
        <h2 className="question-text">{question.question_text}</h2>

        <div className="options-list">
          {question.options.map((option, idx) => (
            <OptionButton
              key={option.letter}
              option={option}
              isSelected={selectedAnswer === option.letter}
              onClick={() => onSelectAnswer(questionIndex, option.letter)}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default QuestionCard;
