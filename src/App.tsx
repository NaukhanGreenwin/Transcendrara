import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Brain, Rocket, ArrowUpRight, Bot as Lotus, Waves, Heart, Star, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PricingPage from './pages/PricingPage';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import AnimatedSection from './components/AnimatedSection';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import HypnotherapyPage from './pages/HypnotherapyPage';
import MindfulnessPage from './pages/MindfulnessPage';
import PerformancePage from './pages/PerformancePage';
import GroupSessionsPage from './pages/GroupSessionsPage';
import BenefitsSection from './components/BenefitsSection';
import AboutPage from './pages/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Add event listener for custom pageChange events
  useEffect(() => {
    const handlePageChangeEvent = (event: CustomEvent) => {
      if (event.detail && event.detail.page) {
        setCurrentPage(event.detail.page);
      }
    };

    // Add event listener
    window.addEventListener('pageChange', handlePageChangeEvent as EventListener);

    // Check for hash in URL
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'services', 'about', 'pricing', 'hypnotherapy', 'mindfulness', 'performance', 'group'].includes(hash)) {
      setCurrentPage(hash);
    }

    // Cleanup
    return () => {
      window.removeEventListener('pageChange', handlePageChangeEvent as EventListener);
    };
  }, []);

  const HomePage = () => (
    <>
      <Helmet>
        <title>Transcendara Wellness - Transform Your Mind, Transform Your Life</title>
        <meta name="description" content="Experience transformative healing through advanced hypnotherapy and mindfulness techniques. Break free from limitations and unlock your highest potential." />
        <meta property="og:title" content="Transcendara Wellness - Transform Your Mind, Transform Your Life" />
        <meta property="og:description" content="Experience transformative healing through advanced hypnotherapy and mindfulness techniques. Break free from limitations and unlock your highest potential." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transcendara Wellness - Transform Your Mind, Transform Your Life" />
        <meta name="twitter:description" content="Experience transformative healing through advanced hypnotherapy and mindfulness techniques." />
      </Helmet>

      {/* Hero Section */}
      <header className="relative overflow-hidden mt-16">
        <div className="absolute inset-0">
          <motion.img 
            src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&q=80"
            alt="Peaceful meditation background"
            className="w-full h-full object-cover opacity-20"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-32">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
              Transcendara Wellness
            </h1>
            <div className="flex items-center justify-center text-xl text-indigo-600 mb-8">
              <Sparkles className="w-6 h-6 mr-2" />
              <span>Transcend limits & thrive</span>
              <Sparkles className="w-6 h-6 ml-2" />
            </div>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
              Guiding ambitious minds to break free from mental & behavioural barriers, 
              unlock potential, and elevate from within.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                onClick={() => setCurrentPage('services')}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:opacity-90 transition-opacity flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button 
                onClick={() => setCurrentPage('pricing')}
                className="bg-purple-100 text-purple-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-purple-200 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Pricing
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <AnimatedSection>
        <section className="py-20 bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.img 
                  src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80"
                  alt="Serene meditation and mind transformation"
                  className="rounded-lg shadow-xl object-cover h-[500px] w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Mind, Transform Your Life</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Transcendara Wellness, we believe in the power of transformative healing through advanced hypnotherapy 
                  and mindfulness techniques. Our approach combines ancient wisdom with modern neuroscience to help you 
                  overcome limitations and achieve your highest potential.
                </p>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Heart className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-gray-700">Personalized healing journey</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Star className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-gray-700">Evidence-based techniques</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Users className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-gray-700">Supportive community</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Services Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-b from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Comprehensive healing solutions tailored to your needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Advanced Hypnotherapy</h3>
                <p className="text-gray-600 text-center">Experience deep transformation through guided hypnotic states that reprogram limiting beliefs and behaviors.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Lotus className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Mindfulness Training</h3>
                <p className="text-gray-600 text-center">Learn powerful mindfulness techniques to stay present, reduce stress, and enhance mental clarity.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Performance Coaching</h3>
                <p className="text-gray-600 text-center">Unlock peak performance through integrated coaching that aligns mind, body, and spirit.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Information Section */}
      <AnimatedSection>
        <section className="py-20 bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Begin Your Healing Journey</h2>
              <p className="text-xl text-gray-600 mb-8">Discover our transformative services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.div 
                  className="bg-purple-50 p-6 rounded-lg" 
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Personalized Care</h3>
                  </div>
                  <p className="text-gray-600">Experience a tailored approach designed to meet your unique needs and goals.</p>
                </motion.div>
                <motion.div 
                  className="bg-indigo-50 p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-indigo-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Expert Guidance</h3>
                  </div>
                  <p className="text-gray-600">Benefit from professional expertise and compassionate support throughout your journey.</p>
                </motion.div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Take the Next Step</h3>
                <p className="text-gray-600 mb-8">
                  Ready to begin your transformative journey? Book your session now and 
                  take the first step towards positive change.
                </p>
                <motion.a 
                  href="https://calendly.com/marriyam83/30min?month=2025-03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Your Session
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <Waves className="text-indigo-50 w-full h-full opacity-50" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards your transformation journey. 
              Book your session today.
            </p>
            <motion.a 
              href="https://calendly.com/marriyam83/30min?month=2025-03"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:opacity-90 transition-opacity inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Session
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </section>
      </AnimatedSection>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage onPageChange={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'hypnotherapy' && <HypnotherapyPage onPageChange={setCurrentPage} />}
        {currentPage === 'mindfulness' && <MindfulnessPage onPageChange={setCurrentPage} />}
        {currentPage === 'performance' && <PerformancePage onPageChange={setCurrentPage} />}
        {currentPage === 'group' && <GroupSessionsPage onPageChange={setCurrentPage} />}
      </AnimatePresence>

      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;