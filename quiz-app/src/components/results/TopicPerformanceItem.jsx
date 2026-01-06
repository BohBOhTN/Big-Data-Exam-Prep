import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import QuestionReview from './QuestionReview';
import './TopicPerformanceItem.css';

function TopicPerformanceItem({ 
  topic, 
  index, 
  isExpanded, 
  onToggle 
}) {
  const getProgressStyle = () => {
    if (topic.percentage >= 70) {
      return 'var(--gradient-2)';
    } else if (topic.percentage >= 50) {
      return 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)';
    }
    return 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
  };

  const getPercentageClass = () => {
    if (topic.percentage >= 70) return 'good';
    if (topic.percentage >= 50) return 'medium';
    return 'poor';
  };

  return (
    <motion.div 
      className="topic-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <div 
        className="topic-header"
        onClick={onToggle}
      >
        <div className="topic-info">
          <h3>{topic.name}</h3>
          <span className="topic-stats">
            {topic.correct}/{topic.total} correct
          </span>
        </div>
        <div className="topic-score">
          <div className="topic-progress-bar">
            <motion.div 
              className="topic-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${topic.percentage}%` }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              style={{ background: getProgressStyle() }}
            />
          </div>
          <span className={`topic-percentage ${getPercentageClass()}`}>
            {topic.percentage}%
          </span>
          <button className="expand-btn">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <motion.div 
          className="topic-questions"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          {topic.questions.map((q, qIdx) => (
            <QuestionReview key={qIdx} question={q} />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default TopicPerformanceItem;
