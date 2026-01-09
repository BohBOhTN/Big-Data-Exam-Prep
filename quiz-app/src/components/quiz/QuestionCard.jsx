import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import OptionButton from './OptionButton';
import './QuestionCard.css';

function QuestionCard({ 
  question, 
  questionIndex, 
  selectedAnswer, 
  onSelectAnswer 
}) {
  const [showTip, setShowTip] = useState(false);

  // Check if this is a React question (has tip field)
  const hasTip = question.tip;

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
          <div className="question-header-right">
            {hasTip && (
              <button 
                className={`tip-btn ${showTip ? 'active' : ''}`}
                onClick={() => setShowTip(!showTip)}
                title="Afficher un indice"
              >
                <Lightbulb size={16} />
                <span>Astuce</span>
                {showTip ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            )}
            {selectedAnswer && (
              <span className="answered-badge">
                <CheckCircle2 size={16} />
                Répondu
              </span>
            )}
          </div>
        </div>

        {/* Tip section - only for React questions */}
        <AnimatePresence>
          {showTip && hasTip && (
            <motion.div 
              className="tip-container"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="tip-content">
                <Lightbulb size={16} />
                <span>{question.tip}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
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
