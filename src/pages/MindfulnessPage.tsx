import React from 'react';
import { motion } from 'framer-motion';
import { Bot as Lotus, Check, ArrowRight, Heart, Brain, Smile } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const MindfulnessPage = ({ onPageChange }: { onPageChange: (page: string) => void }) => {
  const benefits = [
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Enhanced Mental Clarity",
      description: "Develop sharper focus and clearer thinking patterns"
    },
    {
      icon: <Heart className="w-6 h-6 text-purple-600" />,
      title: "Stress Reduction",
      description: "Learn techniques to manage and reduce daily stress"
    },
    {
      icon: <Smile className="w-6 h-6 text-purple-600" />,
      title: "Emotional Balance",
      description: "Cultivate greater emotional awareness and stability"
    }
  ];

  const techniques = [
    "Breath Awareness Meditation",
    "Body Scan Practice",
    "Mindful Movement",
    "Loving-Kindness Meditation",
    "Mindful Eating",
    "Walking Meditation"
  ];

  return (
    <div className="py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <Lotus className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Mindfulness Training</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the transformative power of mindfulness through our comprehensive training program, 
              designed to help you cultivate presence, reduce stress, and enhance overall well-being.
            </p>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Benefits</h2>
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

        {/* Techniques Section */}
        <AnimatedSection>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {techniques.map((technique, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{technique}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Training Options */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Individual Sessions</h3>
              <p className="text-gray-600 mb-4">
                One-on-one mindfulness training tailored to your specific needs and goals. 
                Perfect for those seeking personalized guidance and support.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">Personalized instruction</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">Custom practice plans</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Group Classes</h3>
              <p className="text-gray-600 mb-4">
                Join our supportive community classes to learn and practice mindfulness 
                techniques in a collaborative environment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">Community support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">Regular sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">Shared learning experience</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Start Your Mindfulness Journey Today
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join us to discover the transformative power of mindfulness and create lasting 
              positive changes in your life.
            </p>
            <motion.button
              onClick={() => onPageChange('booking')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium text-lg inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default MindfulnessPage; 