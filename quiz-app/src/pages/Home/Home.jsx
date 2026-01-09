import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';

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

// Module-specific configurations
const MODULE_CONFIG = {
  bigdata: {
    title: 'Big Data Quiz Master',
    subtitle: <>
      Testez vos connaissances sur Hadoop, HDFS, MapReduce, Hive et plus encore !
      <br />Sélectionnez vos sujets et commencez à apprendre.
    </>,
    accentColor: '#f59e0b',
  },
  react: {
    title: 'React Quiz Master',
    subtitle: <>
      Testez vos connaissances sur React, CSS, API, Interfaces et Hébergement !
      <br />Sélectionnez vos sujets et commencez à apprendre.
    </>,
    accentColor: '#61dafb',
  },
};

function Home() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [questionCount, setQuestionCount] = useState(QUIZ_CONFIG.DEFAULT_QUESTIONS);
  const [loading, setLoading] = useState(true);
  const [maxQuestions, setMaxQuestions] = useState(QUIZ_CONFIG.MAX_QUESTIONS);
  const [currentModule, setCurrentModule] = useState(null);

  useEffect(() => {
    loadModuleAndTopics();
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

  const loadModuleAndTopics = async () => {
    try {
      // Get selected module from localStorage
      const moduleStr = localStorage.getItem('selectedModule');
      if (!moduleStr) {
        navigate('/');
        return;
      }

      const module = JSON.parse(moduleStr);
      setCurrentModule(module);

      // Load module index
      const indexResponse = await fetch(`/data/${module.indexFile}`);
      const indexData = await indexResponse.json();
      
      // Load each topic's data
      const topicsData = await Promise.all(
        indexData.topics.map(async (topic) => {
          const response = await fetch(`/data/${topic.filename}`);
          const data = await response.json();
          return {
            ...data,
            filename: topic.filename,
            id: topic.id,
            num_questions: topic.num_questions,
            // Normalize topic_name for both formats
            topic_name: data.topic_name || topic.topic_name || data.resource_name,
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
      moduleId: currentModule?.id,
    };
    
    localStorage.setItem('quizConfig', JSON.stringify(quizData));
    navigate('/quiz');
  };

  const goBackToModules = () => {
    localStorage.removeItem('selectedModule');
    navigate('/');
  };

  if (loading) {
    return <LoadingSpinner message="Chargement des sujets..." variant="sparkles" />;
  }

  const moduleConfig = currentModule ? MODULE_CONFIG[currentModule.id] : MODULE_CONFIG.bigdata;

  return (
    <div className="home-page" style={{ '--module-accent': moduleConfig.accentColor }}>
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
        {/* Back Button */}
        <motion.button
          className="back-to-modules-btn"
          onClick={goBackToModules}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} />
          Changer de Module
        </motion.button>

        <Hero 
          title={moduleConfig.title}
          subtitle={moduleConfig.subtitle}
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

        <Disclaimer moduleId={currentModule?.id} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
