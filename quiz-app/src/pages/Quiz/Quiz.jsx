import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, LogOut } from 'lucide-react';

import { LoadingSpinner, Modal, ProgressBar } from '../../components/common';
import { 
  QuizHeader, 
  QuestionCard, 
  QuestionNavigator, 
  QuizNavigation 
} from '../../components/quiz';
import { formatTime, shuffleArray } from '../../utils';

import './Quiz.css';

function Quiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [showConfirmCancel, setShowConfirmCancel] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    loadQuizQuestions();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  const loadQuizQuestions = async () => {
    try {
      const configStr = localStorage.getItem('quizConfig');
      if (!configStr) {
        navigate('/home');
        return;
      }

      const config = JSON.parse(configStr);
      const { topics, questionCount, moduleId } = config;

      let allQuestions = [];
      
      for (const topic of topics) {
        const response = await fetch(`/data/${topic.filename}`);
        const data = await response.json();
        
        // Normalize questions based on module format
        const normalizedQuestions = data.questions.map(q => {
          // Check if it's React format (has 'question' and 'options' as object)
          if (q.question && typeof q.options === 'object' && !Array.isArray(q.options)) {
            // React format - convert to standard format
            const optionsArray = Object.entries(q.options).map(([letter, text]) => ({
              letter: letter.toUpperCase(),
              text: text,
              is_correct: q.correct_answer.toLowerCase() === letter.toLowerCase(),
            }));
            
            return {
              question_number: q.id,
              question_text: q.question,
              options: optionsArray,
              correct_answer: q.correct_answer.toUpperCase(),
              tip: q.tip || '',
              explanation: q.explanation || '',
              section: q.section || '',
              topic_id: topic.id,
              topic_name: data.topic_name || topic.topic_name || topic.id,
            };
          } else {
            // Big Data format - already in standard format
            return {
              ...q,
              topic_id: topic.id,
              topic_name: data.topic_name || topic.topic_name || topic.id,
            };
          }
        });
        
        allQuestions = [...allQuestions, ...normalizedQuestions];
      }

      const shuffled = shuffleArray(allQuestions);
      const selectedQuestions = shuffled.slice(0, Math.min(questionCount, shuffled.length));
      
      setQuestions(selectedQuestions);
      setLoading(false);
    } catch (error) {
      console.error('Error loading questions:', error);
      navigate('/home');
    }
  };

  const handleSelectAnswer = (questionIndex, letter) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: letter,
    }));
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentIndex(index);
  };

  const finishQuiz = () => {
    const results = {
      questions,
      answers,
      totalTime: elapsedTime,
      timestamp: Date.now(),
    };
    
    localStorage.setItem('quizResults', JSON.stringify(results));
    navigate('/results');
  };

  const cancelQuiz = () => {
    localStorage.removeItem('quizConfig');
    navigate('/home');
  };

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  if (loading) {
    return <LoadingSpinner message="Préparation de votre quiz..." />;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-page">
      <QuizHeader
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        topicName={currentQuestion.topic_name}
        elapsedTime={elapsedTime}
        onCancel={() => setShowConfirmCancel(true)}
        formatTime={formatTime}
      />

      <ProgressBar 
        progress={progress}
        label={`${answeredCount}/${questions.length} répondu`}
      />

      <div className="quiz-content">
        <QuestionCard
          question={currentQuestion}
          questionIndex={currentIndex}
          selectedAnswer={answers[currentIndex]}
          onSelectAnswer={handleSelectAnswer}
        />

        <QuizNavigation
          currentIndex={currentIndex}
          totalQuestions={questions.length}
          onPrev={goToPrev}
          onNext={goToNext}
          onFinish={() => setShowConfirmFinish(true)}
        />
      </div>

      <QuestionNavigator
        questions={questions}
        currentIndex={currentIndex}
        answers={answers}
        onNavigate={goToQuestion}
        onFinish={() => setShowConfirmFinish(true)}
        variant="desktop"
      />

      <QuestionNavigator
        questions={questions}
        currentIndex={currentIndex}
        answers={answers}
        onNavigate={goToQuestion}
        onFinish={() => setShowConfirmFinish(true)}
        variant="mobile"
      />

      {/* Confirm Finish Modal */}
      <Modal
        isOpen={showConfirmFinish}
        onClose={() => setShowConfirmFinish(false)}
        icon={AlertCircle}
        iconColor="#f59e0b"
        title="Terminer le Quiz ?"
        actions={
          <>
            <button 
              className="btn btn-secondary"
              onClick={() => setShowConfirmFinish(false)}
            >
              Continuer le Quiz
            </button>
            <button 
              className="btn btn-success"
              onClick={finishQuiz}
            >
              Soumettre les Réponses
            </button>
          </>
        }
      >
        <p>
          Vous avez répondu à <strong>{answeredCount}</strong> sur <strong>{questions.length}</strong> questions.
          {answeredCount < questions.length && (
            <span className="warning-text">
              <br />Les questions non répondues seront marquées comme incorrectes.
            </span>
          )}
        </p>
      </Modal>

      {/* Confirm Cancel Modal */}
      <Modal
        isOpen={showConfirmCancel}
        onClose={() => setShowConfirmCancel(false)}
        icon={LogOut}
        iconColor="#ef4444"
        title="Abandonner le Quiz ?"
        variant="danger"
        actions={
          <>
            <button 
              className="btn btn-secondary"
              onClick={() => setShowConfirmCancel(false)}
            >
              Continuer le Quiz
            </button>
            <button 
              className="btn btn-danger"
              onClick={cancelQuiz}
            >
              Abandonner
            </button>
          </>
        }
      >
        <p>
          Vous avez répondu à <strong>{answeredCount}</strong> question{answeredCount > 1 ? 's' : ''}.
          <br />
          Il vous reste <strong>{questions.length - answeredCount}</strong> question{questions.length - answeredCount > 1 ? 's' : ''} à répondre.
          <span className="warning-text">
            <br /><br />Votre progression sera perdue si vous quittez maintenant.
          </span>
        </p>
      </Modal>
    </div>
  );
}

export default Quiz;
