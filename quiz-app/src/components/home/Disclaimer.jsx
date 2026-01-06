import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import './Disclaimer.css';

function Disclaimer({ message }) {
  return (
    <motion.div 
      className="disclaimer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      <AlertTriangle size={18} />
      <p>
        <strong>Avertissement :</strong> {message || "Ce quiz est un outil d'étude non officiel créé à partir du contenu du cours Big Data. Il peut contenir des erreurs. Utilisez-le comme complément à vos études, pas comme source principale."}
      </p>
    </motion.div>
  );
}

export default Disclaimer;
