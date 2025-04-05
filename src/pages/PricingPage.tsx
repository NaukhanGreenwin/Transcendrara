import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Video, Phone, Package, ArrowUpRight, Users } from 'lucide-react';

interface PricingCardProps {
  title: string;
  duration: string;
  price: string;
  description?: string;
  icon: React.ReactNode;
  isPackage?: boolean;
  onBookNow: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  duration, 
  price, 
  description, 
  icon,
  isPackage,
  onBookNow
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
  >
    <div className="flex items-start justify-between mb-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <Clock className="w-5 h-5 mr-2" />
          <span className="text-base">{duration}</span>
        </div>
        <div className="flex items-center text-gray-600">
          {icon && <div className="text-gray-500 mr-2">{icon}</div>}
        </div>
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold text-purple-600">{price}</div>
      </div>
    </div>
    {description && (
      <p className="text-gray-600 text-base mb-6">{description}</p>
    )}
    <div className="flex justify-end">
      <motion.button
        onClick={onBookNow}
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-600 hover:text-purple-500 transition-colors text-sm flex items-center"
      >
        Contact Us
        <ArrowUpRight className="ml-2 w-4 h-4" />
      </motion.button>
    </div>
  </motion.div>
);

const PricingPage = () => {
  const handleBookNow = () => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Navigate to contact page
    window.location.href = '#contact';
    // Trigger a page change event that the parent component can listen for
    const event = new CustomEvent('pageChange', { detail: { page: 'contact' } });
    window.dispatchEvent(event);
  };

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hypnosis Pricing
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            All sessions are conducted virtually via Zoom
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <PricingCard
            title="Complimentary Initial Consultation"
            duration="30 minutes"
            price="Free"
            description="One time use only"
            icon={<Phone className="w-5 h-5" />}
            onBookNow={handleBookNow}
          />
          <PricingCard
            title="Initial Hypnosis Session"
            duration="50 minutes"
            price="$150"
            description="First time hypnosis clients"
            icon={<Video className="w-5 h-5" />}
            onBookNow={handleBookNow}
          />
          <PricingCard
            title="Follow-up Hypnosis Session"
            duration="50 minutes"
            price="$100"
            description="For returning clients"
            icon={<Video className="w-5 h-5" />}
            onBookNow={handleBookNow}
          />
          <PricingCard
            title="Group Session Relaxation Hypnotherapy"
            duration="50 minutes"
            price="$150"
            description="Group relaxation session via Zoom"
            icon={<Users className="w-5 h-5" />}
            onBookNow={handleBookNow}
          />
        </div>

        {/* Packages */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="6 Sessions Package"
              duration="50 minutes"
              price="$550"
              description="50 minute sessions, scheduled after each completed session."
              icon={<Package className="w-5 h-5" />}
              isPackage
              onBookNow={handleBookNow}
            />
            <PricingCard
              title="12 Sessions Package"
              duration="50 minutes"
              price="$1,100"
              description="50 minute sessions, scheduled after each completed session."
              icon={<Package className="w-5 h-5" />}
              isPackage
              onBookNow={handleBookNow}
            />
            <PricingCard
              title="20 Sessions Package"
              duration="50 minutes"
              price="$1,600"
              description="50 minute sessions, scheduled after each completed session."
              icon={<Package className="w-5 h-5" />}
              isPackage
              onBookNow={handleBookNow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage; 