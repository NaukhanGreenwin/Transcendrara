import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is hypnotherapy and how does it work?",
    answer: "Hypnotherapy is a therapeutic technique that uses guided relaxation and focused attention to achieve heightened state of awareness. In this state, you're more open to suggestions and can work on modifying unwanted behaviors, managing pain, or addressing emotional challenges."
  },
  {
    question: "Is hypnotherapy safe?",
    answer: "Yes, hypnotherapy is completely safe when conducted by a trained professional. You remain in control throughout the session and cannot be made to do anything against your will. It's a natural state of focused attention that we all experience daily."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies depending on your specific goals and circumstances. While some clients experience significant changes in 3-6 sessions, others benefit from longer-term support. We'll discuss your needs during the initial consultation."
  },
  {
    question: "What can hypnotherapy help with?",
    answer: "Hypnotherapy can help with various issues including anxiety, stress management, phobias, smoking cessation, weight management, sleep problems, confidence building, and performance enhancement. It's particularly effective for breaking unwanted habits and establishing positive behaviors."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white rounded-lg border border-gray-200">
                <button
                  className="w-full px-6 py-4 flex justify-between items-start text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <span className="mt-1 flex-shrink-0 ml-2">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;