import { ChevronLeft, ChevronRight, Flag } from 'lucide-react';
import './QuizNavigation.css';

function QuizNavigation({ 
  currentIndex, 
  totalQuestions, 
  onPrev, 
  onNext, 
  onFinish 
}) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestions - 1;

  return (
    <div className="quiz-navigation">
      <button 
        className="nav-btn"
        onClick={onPrev}
        disabled={isFirst}
      >
        <ChevronLeft size={20} />
        Précédent
      </button>
      
      {isLast ? (
        <button 
          className="btn btn-success finish-btn"
          onClick={onFinish}
        >
          <Flag size={18} />
          Terminer
        </button>
      ) : (
        <button 
          className="nav-btn nav-btn-next"
          onClick={onNext}
        >
          Suivant
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
}

export default QuizNavigation;
