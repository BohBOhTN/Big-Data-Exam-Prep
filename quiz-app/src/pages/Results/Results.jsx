import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { 
  CheckCircle2, 
  XCircle,
  BookOpen,
  RotateCcw,
  Home,
  Clock,
  Target,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

import { 
  ScoreCircle, 
  StatCard, 
  TopicPerformanceItem, 
  RecommendationCard 
} from '../../components/results';
import { 
  formatTimeVerbose, 
  analyzeQuizResults,
  PDF_MAPPING,
  TOPIC_DISPLAY_NAMES
} from '../../utils';

import './Results.css';

function Results() {
  const navigate = useNavigate();
  const [results, setResults] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [currentModule, setCurrentModule] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Load module info
    const moduleStr = localStorage.getItem('selectedModule');
    if (moduleStr) {
      setCurrentModule(JSON.parse(moduleStr));
    }

    const resultsStr = localStorage.getItem('quizResults');
    if (!resultsStr) {
      navigate('/');
      return;
    }
    
    const data = JSON.parse(resultsStr);
    setResults(data);
    
    // Show confetti if score is good
    const { questions, answers } = data;
    const correctCount = questions.filter((q, idx) => {
      const userAnswer = answers[idx];
      return userAnswer === q.correct_answer;
    }).length;
    
    const percentage = (correctCount / questions.length) * 100;
    if (percentage >= 70) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [navigate]);

  const analysis = useMemo(() => {
    return analyzeQuizResults(results, {
      pdfMapping: PDF_MAPPING,
      topicDisplayNames: TOPIC_DISPLAY_NAMES,
    });
  }, [results]);

  const toggleTopicExpand = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  const restartQuiz = () => {
    localStorage.removeItem('quizResults');
    navigate('/home');
  };

  const goToModuleSelector = () => {
    localStorage.removeItem('quizResults');
    localStorage.removeItem('selectedModule');
    navigate('/');
  };

  if (!results || !analysis) {
    return (
      <div className="results-loading">
        <p>Chargement des résultats...</p>
      </div>
    );
  }

  return (
    <div className="results-page">
      {showConfetti && (
        <Confetti 
          recycle={false} 
          numberOfPieces={300}
          width={windowSize.width}
          height={windowSize.height}
        />
      )}
      
      <div className="container">
        {/* Hero Score Section */}
        <motion.section 
          className="score-hero"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ScoreCircle 
            percentage={analysis.overallPercentage} 
            grade={analysis.grade} 
          />
          
          <motion.div 
            className="score-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1>{analysis.grade.message}</h1>
            <p className="score-summary">
              Vous avez répondu correctement à <strong>{analysis.correctCount}</strong> sur <strong>{analysis.totalQuestions}</strong> questions
            </p>
          </motion.div>
        </motion.section>

        {/* Stats Cards */}
        <motion.section 
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <StatCard 
            icon={CheckCircle2} 
            value={analysis.correctCount} 
            label="Correct" 
            variant="correct" 
          />
          <StatCard 
            icon={XCircle} 
            value={analysis.wrongCount} 
            label="Incorrect" 
            variant="wrong" 
          />
          <StatCard 
            icon={Clock} 
            value={formatTimeVerbose(analysis.totalTime)} 
            label="Temps" 
            variant="time" 
          />
          <StatCard 
            icon={Target} 
            value={analysis.topicAnalysis.length} 
            label="Sujets" 
            variant="topics" 
          />
        </motion.section>

        {/* Topic Performance */}
        <motion.section 
          className="topic-performance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2>
            <TrendingUp size={24} />
            Performance par Sujet
          </h2>
          
          <div className="topic-list">
            {analysis.topicAnalysis.map((topic, idx) => (
              <TopicPerformanceItem
                key={topic.id}
                topic={topic}
                index={idx}
                isExpanded={expandedTopics[topic.id]}
                onToggle={() => toggleTopicExpand(topic.id)}
              />
            ))}
          </div>
        </motion.section>

        {/* Recommendations */}
        {analysis.recommendations.length > 0 && (
          <motion.section 
            className="recommendations"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2>
              <AlertTriangle size={24} />
              Ressources Recommandées
            </h2>
            <p className="recommendations-intro">
              Selon votre performance, nous vous recommandons de réviser ces sujets :
            </p>
            <p className="moodle-notice">
              <BookOpen size={16} />
              {currentModule?.id === 'react' ? (
                <>Tous les supports recommandés proviennent de <strong>Google Classroom</strong> pour le cours <strong>"FRAMEWORK FRONTEND"</strong>.</>
              ) : (
                <>Tous les supports recommandés proviennent de la <strong>Plateforme Moodle</strong> pour le cours <strong>"Framework et technologies Big Data"</strong>.</>
              )}
            </p>
            
            <div className="recommendation-cards">
              {analysis.recommendations.map((rec, idx) => (
                <RecommendationCard 
                  key={rec.topic.id} 
                  recommendation={rec} 
                  index={idx} 
                />
              ))}
            </div>
          </motion.section>
        )}

        {/* Action Buttons */}
        <motion.section 
          className="actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <button className="btn btn-primary" onClick={restartQuiz}>
            <RotateCcw size={18} />
            Nouveau Quiz
          </button>
          <button className="btn btn-secondary" onClick={goToModuleSelector}>
            <Home size={18} />
            Changer de Module
          </button>
        </motion.section>
      </div>
    </div>
  );
}

export default Results;
