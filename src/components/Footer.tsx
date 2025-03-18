import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const handlePageChange = (page: string) => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Change the page after scrolling
    onPageChange(page);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-purple-500" />
              <span className="text-xl font-bold text-white">Transcendara</span>
            </div>
            <p className="text-sm">
              Guiding ambitious minds to break free from mental & behavioural barriers, 
              unlock potential, and elevate from within.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-purple-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/transcendara?igsh=em05M2R5bXJxYmJl&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-purple-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-purple-500"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <motion.button 
                  onClick={() => handlePageChange('about')}
                  className="hover:text-purple-500 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  About Us
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => handlePageChange('services')}
                  className="hover:text-purple-500 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  Our Services
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => handlePageChange('pricing')}
                  className="hover:text-purple-500 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  Pricing
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => handlePageChange('booking')}
                  className="hover:text-purple-500 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  Book a Session
                </motion.button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              <span className="relative z-10">Our Services</span>
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-purple-500"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <motion.button 
                  onClick={() => handlePageChange('hypnotherapy')}
                  className="hover:text-purple-500 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  Advanced Hypnotherapy
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => handlePageChange('mindfulness')}
                  className="hover:text-purple-500 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  Mindfulness Training
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => handlePageChange('performance')}
                  className="hover:text-purple-500 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  Performance Coaching
                </motion.button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-purple-500"></div>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-500" />
                <span className="text-sm">Toronto, ON</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-500" />
                <span className="text-sm">+1 (905) 555-5555</span>  
              </li> 
              <li className="flex items-center space-x-3">  
                <Mail className="w-5 h-5 text-purple-500" />
                <span className="text-sm">contact@transcendara.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Transcendara. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 