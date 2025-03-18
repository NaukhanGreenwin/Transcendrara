import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  text: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ text }) => {
  return (
    <motion.div 
      className="flex items-center space-x-3"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
      <span className="text-gray-700 text-lg">{text}</span>
    </motion.div>
  );
};

export default BenefitCard; 