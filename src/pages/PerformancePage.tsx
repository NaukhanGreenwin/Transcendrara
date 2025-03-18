import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Zap, Trophy, ArrowRight, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const PerformancePage = ({ onPageChange }: { onPageChange: (page: string) => void }) => {
  const areas = [
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Goal Achievement",
      description: "Set and achieve ambitious goals through strategic planning and focused action"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Peak Performance",
      description: "Access your optimal state of performance through proven techniques"
    },
    {
      icon: <Trophy className="w-6 h-6 text-purple-600" />,
      title: "Success Mindset",
      description: "Develop the mental resilience and mindset required for sustained success"
    }
  ];

  const outcomes = [
    "Enhanced focus and concentration",
    "Improved decision-making abilities",
    "Greater emotional intelligence",
    "Better stress management",
    "Increased productivity",
    "Stronger leadership presence"
  ];

  return (
    <div className="py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <Rocket className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Performance Coaching</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock your peak performance potential through our integrated coaching approach that 
              aligns your mind, body, and spirit for optimal success.
            </p>
          </div>
        </AnimatedSection>

        {/* Areas of Focus */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Areas of Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {areas.map((area, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Coaching Programs */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1:1 Elite Coaching</h3>
              <p className="text-gray-600 mb-6">
                Personalized coaching sessions designed to help you break through limitations 
                and achieve extraordinary results in your chosen field.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Customized performance strategies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Regular progress tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Direct access to your coach</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Workshops</h3>
              <p className="text-gray-600 mb-6">
                Intensive group sessions focused on specific aspects of performance enhancement 
                and professional development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Interactive learning environment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Peer networking opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Practical skill development</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Outcomes Section */}
        <AnimatedSection>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Expected Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Elevate Your Performance?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take the first step towards achieving your highest potential with our 
              expert performance coaching.
            </p>
            <motion.button
              onClick={() => onPageChange('booking')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium text-lg inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Strategy Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PerformancePage; 