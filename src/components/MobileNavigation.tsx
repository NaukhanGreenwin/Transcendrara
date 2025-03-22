import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

interface MobileNavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  currentPage, 
  onPageChange, 
  isOpen,
  onClose
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const isServicePage = (page: string) => {
    return ['services', 'pricing', 'hypnotherapy', 'mindfulness', 'performance', 'group'].includes(page);
  };

  const handleMenuItemClick = (page: string) => {
    onPageChange(page);
    onClose();
    setIsServicesOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            <motion.button
              onClick={() => handleMenuItemClick('home')}
              className={`w-full px-4 py-3 text-left rounded-xl transition-all duration-300 ${
                currentPage === 'home' ? 'bg-purple-100/80 text-purple-600' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
              }`}
              whileHover={{ x: 5 }}
            >
              Home
            </motion.button>

            {/* Mobile Services Dropdown */}
            <div>
              <motion.button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full px-4 py-3 text-left rounded-xl transition-all duration-300 flex items-center justify-between ${
                  isServicePage(currentPage) ? 'bg-purple-100/80 text-purple-600' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                }`}
                whileHover={{ x: 5 }}
              >
                <span>Services & Pricing</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 mt-2 space-y-1 border-l-2 border-purple-100 pl-4"
                  >
                    <motion.button
                      onClick={() => handleMenuItemClick('services')}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Our Services
                    </motion.button>
                    <motion.button
                      onClick={() => handleMenuItemClick('pricing')}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Pricing
                    </motion.button>
                    <motion.button
                      onClick={() => handleMenuItemClick('hypnotherapy')}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Advanced Hypnotherapy
                    </motion.button>
                    <motion.button
                      onClick={() => handleMenuItemClick('mindfulness')}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Mindfulness Training
                    </motion.button>
                    <motion.button
                      onClick={() => handleMenuItemClick('performance')}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Performance Coaching
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="https://calendly.com/marriyam83/30min?month=2025-03"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-3 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              onClick={() => onClose()}
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation; 