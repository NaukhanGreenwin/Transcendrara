import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Mail, Calendar, Star, Quote } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Marriyam Rana</h1>
          <p className="text-xl font-light">Clinical Hypnotherapist & Mindfulness Coach</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info Cards */}
          <div className="space-y-6">
            {/* Specialties */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-purple-100">
              <h2 className="text-xl font-semibold text-purple-800 mb-6">Specialties</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Clinical Hypnotherapy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Mindfulness Training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Performance Coaching</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Stress Management</span>
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-purple-100">
              <h2 className="text-xl font-semibold text-purple-800 mb-6">Languages</h2>
              <div className="space-y-4">
                {['English', 'Urdu', 'Punjabi', 'Hindi'].map((language) => (
                  <div key={language} className="flex items-center space-x-3 text-gray-700">
                    <Languages className="w-5 h-5 text-purple-600" />
                    <span>{language}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-purple-100">
              <h2 className="text-xl font-semibold text-purple-800 mb-6">Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span>contact@transcendara.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span>Mon-Fri: 9AM-6PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="prose prose-purple max-w-none">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">About Me</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                With over a decade of experience in clinical hypnotherapy and mindfulness coaching, 
                I am dedicated to helping individuals unlock their full potential and achieve lasting 
                positive change in their lives.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                My approach combines traditional hypnotherapy techniques with modern mindfulness 
                practices, creating a unique and effective method for addressing various challenges 
                including anxiety, stress, personal development, and performance enhancement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe in empowering my clients with the tools and techniques they need to 
                maintain their progress long after our sessions conclude. My multilingual capabilities 
                allow me to connect with and serve a diverse client base, ensuring comfortable and 
                effective communication in their preferred language.
              </p>
            </div>

            {/* Book Button */}
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg 
                hover:bg-purple-700 transition duration-300"
              >
                Book a Session
              </motion.button>
            </div>

            {/* Testimonials */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-purple-800 mb-8">Client Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    text: "Marriyam's approach to hypnotherapy transformed my perspective on personal growth. Her sessions were both professional and deeply impactful.",
                    author: "Sarah M."
                  },
                  {
                    text: "The mindfulness techniques I learned have become an essential part of my daily routine. I'm grateful for Marriyam's guidance and expertise.",
                    author: "James R."
                  }
                ].map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-purple-50 p-6 rounded-2xl relative"
                  >
                    <Quote className="w-8 h-8 text-purple-300 absolute top-4 right-4" />
                    <div className="space-y-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic">{testimonial.text}</p>
                      <p className="text-purple-600 font-semibold">{testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage; 