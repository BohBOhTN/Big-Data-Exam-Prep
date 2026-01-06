import { motion, AnimatePresence } from 'framer-motion';
import './Modal.css';

function Modal({ 
  isOpen, 
  onClose, 
  icon: Icon,
  iconColor = '#f59e0b',
  title, 
  children, 
  actions,
  variant = 'default'
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={`modal ${variant === 'danger' ? 'modal-cancel' : ''}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {Icon && <Icon size={48} color={iconColor} />}
            {title && <h3>{title}</h3>}
            <div className="modal-content">
              {children}
            </div>
            {actions && (
              <div className="modal-actions">
                {actions}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
