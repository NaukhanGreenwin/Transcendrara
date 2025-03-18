import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Clock, ArrowRight, Check, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const GroupSessionsPage = ({ onPageChange }: { onPageChange: (page: string) => void }) => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-purple-600" />,
      title: "Shared Growth",
      description: "Learn and grow together in a supportive community environment"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Safe Space",
      description: "Experience transformation in a confidential and nurturing setting"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Regular Sessions",
      description: "Consistent practice and support for lasting change"
    }
  ];

  const sessions = [
    {
      title: "Mindfulness Circle",
      description: "Weekly group meditation and mindfulness practice",
      duration: "60 minutes",
      frequency: "Every Tuesday",
      capacity: "8-12 participants"
    },
    {
      title: "Transformation Workshop",
      description: "Monthly intensive group hypnotherapy sessions",
      duration: "2 hours",
      frequency: "First Saturday",
      capacity: "6-8 participants"
    },
    {
      title: "Performance Mastermind",
      description: "Bi-weekly group coaching for peak performance",
      duration: "90 minutes",
      frequency: "Every other Thursday",
      capacity: "6-10 participants"
    }
  ];

  return (
    <div className="py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Group Sessions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of collective transformation through our carefully curated 
              group sessions, designed to foster growth, connection, and shared learning.
            </p>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Group Sessions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Available Sessions */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Available Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sessions.map((session, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{session.title}</h3>
                  <p className="text-gray-600 mb-4">{session.description}</p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 text-sm">{session.duration}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 text-sm">{session.frequency}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 text-sm">{session.capacity}</span>
                    </li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* What to Expect */}
        <AnimatedSection>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">Professional facilitation</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">Supportive community</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">Structured learning</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">Practice materials</span>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Next Session
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the power of group transformation and connect with like-minded 
              individuals on their journey to growth and success.
            </p>
            <motion.button
              onClick={() => onPageChange('booking')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium text-lg inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Spot
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default GroupSessionsPage; 