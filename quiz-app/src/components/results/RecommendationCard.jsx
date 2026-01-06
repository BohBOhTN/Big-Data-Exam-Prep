import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import './RecommendationCard.css';

function RecommendationCard({ recommendation, index }) {
  const { topic, pdf, displayName } = recommendation;
  
  const badgeStyle = {
    background: topic.percentage < 50 
      ? 'rgba(239, 68, 68, 0.2)' 
      : 'rgba(245, 158, 11, 0.2)',
    color: topic.percentage < 50 ? '#ef4444' : '#f59e0b'
  };

  return (
    <motion.div 
      className="recommendation-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 * index }}
    >
      <div className="rec-header">
        <FileText size={32} color="#6366f1" />
        <div className="rec-score-badge" style={badgeStyle}>
          {topic.percentage}%
        </div>
      </div>
      <h3>{displayName}</h3>
      <p>Score : {topic.correct}/{topic.total} questions</p>
      <a 
        href={`/pdfs/${pdf}`}
        download={pdf}
        className="rec-pdf-download"
      >
        <Download size={16} />
        <span>Télécharger le PDF</span>
      </a>
    </motion.div>
  );
}

export default RecommendationCard;
