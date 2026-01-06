import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './TopicCard.css';

function TopicCard({ 
  topic, 
  icon: Icon, 
  color, 
  isSelected, 
  onClick, 
  index = 0 
}) {
  return (
    <motion.div
      className={`topic-card ${isSelected ? 'selected' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ '--topic-color': color }}
    >
      <div className="topic-icon" style={{ background: `${color}20` }}>
        <Icon size={28} color={color} />
      </div>
      <div className="topic-info">
        <h3>{topic.topic_name}</h3>
        <span className="question-count">
          {topic.num_questions} questions
        </span>
      </div>
      <div className={`topic-checkbox ${isSelected ? 'checked' : ''}`}>
        {isSelected && <CheckCircle2 size={24} />}
      </div>
    </motion.div>
  );
}

export default TopicCard;
