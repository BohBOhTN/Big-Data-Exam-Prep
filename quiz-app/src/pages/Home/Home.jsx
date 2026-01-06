import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';

import { 
  LoadingSpinner, 
  Footer 
} from '../../components/common';
import { 
  Hero, 
  TopicCard, 
  QuestionCountSelector, 
  Disclaimer 
} from '../../components/home';
import { 
  getTopicIcon, 
  getTopicColor, 
  QUIZ_CONFIG 
} from '../../utils';

import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [questionCount, setQuestionCount] = useState(QUIZ_CONFIG.DEFAULT_QUESTIONS);
  const [loading, setLoading] = useState(true);
  const [maxQuestions, setMaxQuestions] = useState(QUIZ_CONFIG.MAX_QUESTIONS);

  useEffect(() => {
    loadTopics();
  }, []);

  useEffect(() => {
    if (selectedTopics.length > 0) {
      const totalAvailable = selectedTopics.reduce((sum, topic) => {
        return sum + (topic.num_questions || QUIZ_CONFIG.MAX_QUESTIONS);
      }, 0);
      setMaxQuestions(totalAvailable);
      if (questionCount > totalAvailable) {
        setQuestionCount(Math.min(totalAvailable, QUIZ_CONFIG.DEFAULT_QUESTIONS));
      }
    } else {
      setMaxQuestions(QUIZ_CONFIG.MAX_QUESTIONS);
    }
  }, [selectedTopics, questionCount]);

  const loadTopics = async () => {
    try {
      const indexResponse = await fetch('/data/_index.json');
      const indexData = await indexResponse.json();
      
      const topicsData = await Promise.all(
        indexData.files.map(async (file) => {
          const filename = file.output.split('\\').pop();
          const response = await fetch(`/data/${filename}`);
          const data = await response.json();
          return {
            ...data,
            filename: filename,
            id: filename.replace('_qcm.json', ''),
          };
        })
      );
      
      setTopics(topicsData);
      setLoading(false);
    } catch (error) {
      console.error('Error loading topics:', error);
      setLoading(false);
    }
  };

  const toggleTopic = (topic) => {
    setSelectedTopics(prev => {
      const isSelected = prev.find(t => t.id === topic.id);
      if (isSelected) {
        return prev.filter(t => t.id !== topic.id);
      }
      return [...prev, topic];
    });
  };

  const selectAllTopics = () => {
    if (selectedTopics.length === topics.length) {
      setSelectedTopics([]);
    } else {
      setSelectedTopics([...topics]);
    }
  };

  const startQuiz = () => {
    if (selectedTopics.length === 0 || questionCount === 0) return;
    
    const quizData = {
      topics: selectedTopics,
      questionCount,
      startTime: Date.now(),
    };
    
    localStorage.setItem('quizConfig', JSON.stringify(quizData));
    navigate('/quiz');
  };

  if (loading) {
    return <LoadingSpinner message="Chargement des sujets..." variant="sparkles" />;
  }

  return (
    <div className="home-page">
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <motion.div 
          className="bg-circle bg-circle-1"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="bg-circle bg-circle-2"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="container">
        <Hero 
          title="Big Data Quiz Master"
          subtitle={<>
            Testez vos connaissances sur Hadoop, HDFS, MapReduce, Hive et plus encore !
            <br />Sélectionnez vos sujets et commencez à apprendre.
          </>}
        />

        {/* Topic Selection */}
        <motion.section 
          className="topics-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="section-header">
            <h2>
              <BookOpen size={24} />
              Sélectionner les Sujets
            </h2>
            <button 
              className="btn btn-secondary select-all-btn"
              onClick={selectAllTopics}
            >
              {selectedTopics.length === topics.length ? 'Tout Désélectionner' : 'Tout Sélectionner'}
            </button>
          </div>

          <div className="topics-grid">
            {topics.map((topic, index) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                icon={getTopicIcon(topic.id)}
                color={getTopicColor(topic.id)}
                isSelected={!!selectedTopics.find(t => t.id === topic.id)}
                onClick={() => toggleTopic(topic)}
                index={index}
              />
            ))}
          </div>
        </motion.section>

        <QuestionCountSelector
          count={questionCount}
          onCountChange={setQuestionCount}
          maxQuestions={maxQuestions}
          minQuestions={QUIZ_CONFIG.MIN_QUESTIONS}
          step={QUIZ_CONFIG.STEP}
          quickSelectOptions={QUIZ_CONFIG.QUICK_SELECT_OPTIONS}
          selectedTopicsCount={selectedTopics.length}
        />

        {/* Start Button */}
        <motion.div 
          className="start-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button
            className="btn btn-primary start-btn"
            onClick={startQuiz}
            disabled={selectedTopics.length === 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer le Quiz
            <ArrowRight size={20} />
          </motion.button>
          {selectedTopics.length === 0 && (
            <p className="hint">Veuillez sélectionner au moins un sujet pour continuer</p>
          )}
        </motion.div>

        <Disclaimer />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
