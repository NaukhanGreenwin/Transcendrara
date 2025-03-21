import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot as Lotus, Rocket, Users, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, onSelect }) => (
  <motion.div 
    className="bg-white rounded-xl shadow-lg p-8 cursor-pointer"
    whileHover={{ y: -10 }}
    onClick={onSelect}
  >
    <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{title}</h3>
    <p className="text-gray-600 text-center mb-6">{description}</p>
    <motion.div 
      className="flex items-center justify-center text-purple-600 font-medium"
      whileHover={{ x: 5 }}
    >
      Learn More <ArrowRight className="w-5 h-5 ml-2" />
    </motion.div>
  </motion.div>
);

const ServicesPage = ({ onPageChange }: { onPageChange: (page: string) => void }) => {
  return (
    <div className="py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of transformative services designed to help you unlock your full potential
              and achieve lasting positive change.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              title="Advanced Hypnotherapy"
              description="Experience profound transformation through guided hypnotic states that help reprogram limiting beliefs and behaviors."
              icon={<Brain className="w-8 h-8 text-purple-600" />}
              onSelect={() => onPageChange('hypnotherapy')}
            />
            <ServiceCard
              title="Mindfulness Training"
              description="Learn powerful mindfulness techniques to enhance presence, reduce stress, and cultivate mental clarity."
              icon={<Lotus className="w-8 h-8 text-purple-600" />}
              onSelect={() => onPageChange('mindfulness')}
            />
            <ServiceCard
              title="Performance Coaching"
              description="Unlock peak performance through integrated coaching that aligns your mind, body, and spirit."
              icon={<Rocket className="w-8 h-8 text-purple-600" />}
              onSelect={() => onPageChange('performance')}
            />
            <ServiceCard
              title="Group Sessions"
              description="Join our supportive community sessions for shared growth, learning, and transformation."
              icon={<Users className="w-8 h-8 text-purple-600" />}
              onSelect={() => onPageChange('group')}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Areas We Can Help With:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Stress Relief</h3>
                <p className="text-sm text-gray-600">Release tension and find calm through effective hypnotherapy techniques.</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Confidence & Self-Esteem</h3>
                <p className="text-sm text-gray-600">Build unshakable confidence and embrace your true worth.</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Overcoming Procrastination</h3>
                <p className="text-sm text-gray-600">Transform hesitation into action and achieve your goals.</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Peak Performance</h3>
                <p className="text-sm text-gray-600">Reach your highest potential in work, sports, and creative pursuits.</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Breaking Habits</h3>
                <p className="text-sm text-gray-600">Release unwanted patterns and behaviors for lasting change.</p>
                <p className="text-sm text-gray-600">(e.g., smoking, overeating)</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Phobia/Fear Reduction</h3>
                <p className="text-sm text-gray-600">Overcome limiting fears and live with greater freedom.</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Anxiety</h3>
                <p className="text-sm text-gray-600">Find relief from anxiety and develop lasting coping skills.</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Weight Loss</h3>
                <p className="text-sm text-gray-600">Transform your relationship with food and achieve sustainable results.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-20 text-center px-4 sm:px-0">
            <motion.a
              href="https://calendly.com/marriyam83/30min?month=2025-03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium text-lg inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ServicesPage; 