import { Flag } from 'lucide-react';
import './QuestionNavigator.css';

function QuestionNavigator({ 
  questions, 
  currentIndex, 
  answers, 
  onNavigate, 
  onFinish,
  variant = 'desktop' 
}) {
  if (variant === 'mobile') {
    return (
      <div className="mobile-navigator">
        <div className="mobile-nav-scroll">
          {questions.map((_, idx) => (
            <button
              key={idx}
              className={`mobile-nav-dot ${
                idx === currentIndex ? 'current' : ''
              } ${answers[idx] ? 'answered' : ''}`}
              onClick={() => onNavigate(idx)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="question-navigator desktop-only">
      <h3>Questions</h3>
      <div className="navigator-grid">
        {questions.map((_, idx) => (
          <button
            key={idx}
            className={`nav-dot ${
              idx === currentIndex ? 'current' : ''
            } ${answers[idx] ? 'answered' : ''}`}
            onClick={() => onNavigate(idx)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
      <button 
        className="btn btn-primary finish-early-btn"
        onClick={onFinish}
      >
        <Flag size={16} />
        Terminer le Quiz
      </button>
    </div>
  );
}

export default QuestionNavigator;
