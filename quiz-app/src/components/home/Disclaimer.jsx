import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import './Disclaimer.css';

const MODULE_DISCLAIMERS = {
  bigdata: "Ce quiz est un outil d'étude non officiel créé à partir du contenu du cours Big Data. Il peut contenir des erreurs. Utilisez-le comme complément à vos études, pas comme source principale.",
  react: "Ce quiz est un outil d'étude non officiel créé à partir du contenu du cours FRAMEWORK FRONTEND. Il peut contenir des erreurs. Utilisez-le comme complément à vos études, pas comme source principale.",
};

function Disclaimer({ message, moduleId }) {
  const disclaimerText = message || MODULE_DISCLAIMERS[moduleId] || MODULE_DISCLAIMERS.bigdata;

  return (
    <motion.div 
      className="disclaimer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      <AlertTriangle size={18} />
      <p>
        <strong>Avertissement :</strong> {disclaimerText}
      </p>
    </motion.div>
  );
}

export default Disclaimer;
