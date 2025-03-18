import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Video, Phone, Package } from 'lucide-react';

interface PricingCardProps {
  title: string;
  duration: string;
  price: string;
  description?: string;
  icon: React.ReactNode;
  isPackage?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  duration, 
  price, 
  description, 
  icon,
  isPackage 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Clock className="w-4 h-4 mr-2" />
          <span>{duration}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-purple-600">{price}</div>
      </div>
    </div>
    {description && (
      <p className="text-gray-600 text-sm mb-4">{description}</p>
    )}
    <div className="flex items-center justify-between">
      <div className="text-gray-500">
        {icon}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-6 py-2 rounded-lg ${
          isPackage 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
        } transition-colors font-medium`}
      >
        Book Now
      </motion.button>
    </div>
  </motion.div>
);

const PricingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Delve Hypnosis Pricing</h1>
          <p className="text-xl text-gray-600">Choose the session that best fits your needs</p>
        </div>

        {/* Individual Sessions */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Individual Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Brentwood, CA In-Office Session"
              duration="50 minutes"
              price="$275"
              description="Appointments available in the Brentwood neighborhood of Los Angeles, CA."
              icon={<MapPin className="w-5 h-5" />}
            />
            <PricingCard
              title="Brentwood, CA Initial Appointment"
              duration="1 hour 20 minutes"
              price="$275"
              description="Appointments available in the Brentwood neighborhood of Los Angeles, CA."
              icon={<MapPin className="w-5 h-5" />}
            />
            <PricingCard
              title="Initial Zoom Hypnosis Session"
              duration="1 hour 20 minutes"
              price="$175"
              description="First time hypnosis clients"
              icon={<Video className="w-5 h-5" />}
            />
            <PricingCard
              title="50 minute Zoom Hypnosis Session"
              duration="50 minutes"
              price="$150"
              icon={<Video className="w-5 h-5" />}
            />
            <PricingCard
              title="Complimentary Phone Consultation"
              duration="20 minutes"
              price="Free"
              description="One time use only"
              icon={<Phone className="w-5 h-5" />}
            />
          </div>
        </div>

        {/* Packages */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="6 Zoom Sessions Package"
              duration="1 hour 20 minutes"
              price="$850"
              description="1 hour 20 min first session booking. Remaining 50 minute bookings will be scheduled after each session."
              icon={<Package className="w-5 h-5" />}
              isPackage
            />
            <PricingCard
              title="12 Zoom Sessions Package"
              duration="1 hour 20 minutes"
              price="$1,600"
              description="1 hour 20 minute first session booking. Remaining 50 minute bookings will be scheduled after each session."
              icon={<Package className="w-5 h-5" />}
              isPackage
            />
            <PricingCard
              title="20 Zoom Sessions Package"
              duration="1 hour 20 minutes"
              price="$2,500"
              description="1 hour 20 minute first session booking. Remaining 50 minute bookings will be scheduled after each session."
              icon={<Package className="w-5 h-5" />}
              isPackage
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingPage; 