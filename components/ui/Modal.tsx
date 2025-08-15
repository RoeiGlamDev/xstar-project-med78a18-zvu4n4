import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0}}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg transform transition-all"
          >
            <div className="px-6 py-4 border-b border-orange-500">
              <h2 className="text-2xl font-bold text-orange-500">{title}</h2>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-orange-500 hover:text-orange-600 transition-colors"
                aria-label="Close Modal"
              >
                &times;
              </button>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700">{content}</p>
            </div>
            <div className="px-6 py-4 border-t border-orange-500">
              <button 
                onClick={onClose} 
                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition-colors"
                aria-label="Close"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;