import { CheckCircle2, XCircle, Lightbulb } from 'lucide-react';
import './QuestionReview.css';

function QuestionReview({ question }) {
  const { isCorrect, question_text, userAnswer, correct_answer, conseil } = question;

  return (
    <div className={`question-review ${isCorrect ? 'correct' : 'wrong'}`}>
      <div className="question-status">
        {isCorrect ? (
          <CheckCircle2 size={18} color="#22c55e" />
        ) : (
          <XCircle size={18} color="#ef4444" />
        )}
      </div>
      <div className="question-content">
        <p className="question-text-review">{question_text}</p>
        <div className="answer-details">
          {!isCorrect && userAnswer && (
            <span className="your-answer">
              Votre réponse : <strong>{userAnswer}</strong>
            </span>
          )}
          {!isCorrect && !userAnswer && (
            <span className="your-answer unanswered">
              Non répondu
            </span>
          )}
          <span className="correct-answer">
            Réponse correcte : <strong>{correct_answer}</strong>
          </span>
        </div>
        {conseil && (
          <div className="conseil">
            <Lightbulb size={14} />
            <span>{conseil}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionReview;
