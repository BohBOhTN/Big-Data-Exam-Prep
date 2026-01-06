import { motion } from 'framer-motion';
import { Sparkles, Loader2 } from 'lucide-react';
import './LoadingSpinner.css';

function LoadingSpinner({ message = 'Chargement...', variant = 'default' }) {
  const Icon = variant === 'sparkles' ? Sparkles : Loader2;
  
  return (
    <div className="loading-spinner">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Icon size={48} color="#6366f1" />
      </motion.div>
      <p>{message}</p>
    </div>
  );
}

export default LoadingSpinner;
