import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const isServicePage = (page: string) => {
    return ['services', 'pricing', 'hypnotherapy', 'mindfulness', 'performance', 'group'].includes(page);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.button 
            onClick={() => onPageChange('home')}
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              Transcendara
            </span>
          </motion.button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              onClick={() => onPageChange('home')}
              className={`px-6 py-3 text-base font-medium rounded-full transition-all duration-300
                ${currentPage === 'home' 
                  ? 'bg-purple-100/80 text-purple-600 shadow-sm' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>

            {/* Services Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`px-6 py-3 text-base font-medium rounded-full transition-all duration-300 flex items-center space-x-2
                  ${isServicePage(currentPage)
                    ? 'bg-purple-100/80 text-purple-600 shadow-sm' 
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Services & Pricing</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg py-3 border border-gray-100"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <motion.button
                        onClick={() => { onPageChange('services'); setIsServicesOpen(false); }}
                        className="w-full px-4 py-3 text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Our Services
                      </motion.button>
                    </div>
                    <div className="px-4 py-2 border-b border-gray-100">
                      <motion.button
                        onClick={() => { onPageChange('pricing'); setIsServicesOpen(false); }}
                        className="w-full px-4 py-3 text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Pricing
                      </motion.button>
                    </div>
                    <div className="px-4 py-2">
                      <motion.button
                        onClick={() => { onPageChange('hypnotherapy'); setIsServicesOpen(false); }}
                        className="w-full px-4 py-3 text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Advanced Hypnotherapy
                      </motion.button>
                      <motion.button
                        onClick={() => { onPageChange('mindfulness'); setIsServicesOpen(false); }}
                        className="w-full px-4 py-3 text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Mindfulness Training
                      </motion.button>
                      <motion.button
                        onClick={() => { onPageChange('performance'); setIsServicesOpen(false); }}
                        className="w-full px-4 py-3 text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Performance Coaching
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              onClick={() => onPageChange('booking')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              className="p-2 rounded-full text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 