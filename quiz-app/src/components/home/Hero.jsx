import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import './Hero.css';

function Hero({ title, subtitle }) {
  return (
    <motion.header 
      className="hero"
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
        <Rocket size={48} />
      </motion.div>
      <h1>{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
    </motion.header>
  );
}

export default Hero;
