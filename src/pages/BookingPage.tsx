import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const BookingPage = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Book a Session - Transcendara Wellness</title>
        <meta name="description" content="Schedule your session with Transcendara Wellness. Take the first step towards transformation." />
      </Helmet>

      <AnimatedSection>
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Book Your Session
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Take the first step towards transformation. Choose a time that works best for you.
            </motion.p>
          </div>

          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/naukhan1" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default BookingPage; 