import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, Code, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

import { LoadingSpinner, Footer } from '../../components/common';
import './ModuleSelector.css';

const MODULE_ICONS = {
  Database: Database,
  Code: Code,
  BookOpen: BookOpen,
};

function ModuleSelector() {
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredModule, setHoveredModule] = useState(null);

  useEffect(() => {
    loadModules();
  }, []);

  const loadModules = async () => {
    try {
      const response = await fetch('/data/modules/_modules.json');
      const data = await response.json();
      setModules(data.modules);
      setLoading(false);
    } catch (error) {
      console.error('Error loading modules:', error);
      setLoading(false);
    }
  };

  const selectModule = (module) => {
    localStorage.setItem('selectedModule', JSON.stringify(module));
    navigate('/home');
  };

  const getModuleIcon = (iconName) => {
    return MODULE_ICONS[iconName] || BookOpen;
  };

  if (loading) {
    return <LoadingSpinner message="Chargement des modules..." variant="sparkles" />;
  }

  return (
    <div className="module-selector-page">
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
        <motion.div 
          className="bg-circle bg-circle-3"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container">
        {/* Hero Section */}
        <motion.header 
          className="module-hero"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="hero-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <Sparkles size={48} />
          </motion.div>
          <h1>Quiz Master</h1>
          <p className="hero-subtitle">
            Choisissez votre domaine d'apprentissage et testez vos connaissances
          </p>
        </motion.header>

        {/* Module Cards */}
        <motion.section 
          className="modules-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="section-title">
            <BookOpen size={24} />
            Sélectionnez un Module
          </h2>

          <div className="modules-grid">
            {modules.map((module, index) => {
              const IconComponent = getModuleIcon(module.icon);
              return (
                <motion.div
                  key={module.id}
                  className={`module-card ${hoveredModule === module.id ? 'hovered' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  onMouseEnter={() => setHoveredModule(module.id)}
                  onMouseLeave={() => setHoveredModule(null)}
                  onClick={() => selectModule(module)}
                  style={{ '--module-color': module.color }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="module-card-glow" />
                  
                  <div className="module-icon-wrapper">
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>

                  <div className="module-content">
                    <h3>{module.name}</h3>
                    <p className="module-description">{module.description}</p>
                    
                    <div className="module-stats">
                      <div className="stat">
                        <span className="stat-value">{module.totalTopics}</span>
                        <span className="stat-label">Sujets</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{module.totalQuestions}</span>
                        <span className="stat-label">Questions</span>
                      </div>
                    </div>
                  </div>

                  <div className="module-action">
                    <span>Commencer</span>
                    <ArrowRight size={20} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Info Section */}
        <motion.section 
          className="info-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="info-card">
            <h4>🎯 Comment ça marche ?</h4>
            <ol>
              <li>Choisissez un module (Big Data ou React)</li>
              <li>Sélectionnez les sujets qui vous intéressent</li>
              <li>Définissez le nombre de questions</li>
              <li>Testez vos connaissances et améliorez-vous !</li>
            </ol>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}

export default ModuleSelector;
