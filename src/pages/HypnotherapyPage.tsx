import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Check, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const HypnotherapyPage = ({ onPageChange }: { onPageChange: (page: string) => void }) => {
  const benefits = [
    "Break free from limiting beliefs and behaviors",
    "Overcome anxiety and stress",
    "Enhance confidence and self-esteem",
    "Improve sleep quality",
    "Manage pain and physical discomfort",
    "Achieve personal and professional goals"
  ];

  const process = [
    {
      title: "Initial Consultation",
      description: "A comprehensive discussion to understand your goals and create a personalized plan."
    },
    {
      title: "Customized Sessions",
      description: "Tailored hypnotherapy sessions designed to address your specific needs and objectives."
    },
    {
      title: "Integration",
      description: "Learn techniques to integrate positive changes into your daily life."
    },
    {
      title: "Ongoing Support",
      description: "Regular check-ins and adjustments to ensure lasting transformation."
    }
  ];

  return (
    <div className="py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Advanced Hypnotherapy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience profound transformation through guided hypnotic states that help reprogram 
              limiting beliefs and behaviors, unlocking your full potential.
            </p>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Begin Your Transformation Journey
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover how advanced hypnotherapy can help you unlock your full potential 
              and create lasting positive changes in your life.
            </p>
            <motion.button
              onClick={() => onPageChange('about')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium text-lg inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default HypnotherapyPage; 