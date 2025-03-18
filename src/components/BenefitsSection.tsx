import React from 'react';
import { motion } from 'framer-motion';
import BenefitCard from './BenefitCard';

const benefits = [
  "Break free from limiting beliefs and behaviors",
  "Enhance confidence and self-esteem",
  "Manage pain and physical discomfort",
  "Overcome anxiety and stress",
  "Improve sleep quality",
  "Achieve personal and professional goals"
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Benefits</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} text={benefit} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection; 