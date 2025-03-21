import React from 'react';
import { Video, Phone, Package, Users } from 'lucide-react';

interface PricingOption {
  title: string;
  duration: string;
  price: number;
  location: string;
  description?: string;
  icon: React.ReactNode;
  isPackage?: boolean;
}

const PricingPage = () => {
  const sessions: PricingOption[] = [
    {
      title: "Complimentary Phone Consultation",
      duration: "30 minutes",
      price: 0,
      description: "One time use only",
      location: "Phone call",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "Initial Hypnosis Session",
      duration: "1 hour 20 minutes",
      price: 150,
      description: "First time hypnosis clients",
      location: "Online via Zoom",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Follow-up Hypnosis Session",
      duration: "50 minutes",
      price: 100,
      description: "For returning clients",
      location: "Online via Zoom",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Group Session Relaxation Hypnotherapy",
      duration: "50 minutes",
      price: 150,
      description: "Group relaxation session via Zoom",
      location: "Online via Zoom",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const packages: PricingOption[] = [
    {
      title: "6 Sessions Package",
      duration: "1 hour 20 minutes",
      price: 550,
      description: "1 hour 20 min first session booking. Remaining 50 minute bookings will be scheduled after each session.",
      location: "Online via Zoom",
      icon: <Package className="w-6 h-6" />,
      isPackage: true,
    },
    {
      title: "12 Sessions Package",
      duration: "1 hour 20 minutes",
      price: 1100,
      description: "1 hour 20 minute first session booking. Remaining 50 minute bookings will be scheduled after each session.",
      location: "Online via Zoom",
      icon: <Package className="w-6 h-6" />,
      isPackage: true,
    },
    {
      title: "20 Sessions Package",
      duration: "1 hour 20 minutes",
      price: 1800,
      description: "1 hour 20 minute first session booking. Remaining 50 minute bookings will be scheduled after each session.",
      location: "Online via Zoom",
      icon: <Package className="w-6 h-6" />,
      isPackage: true,
    },
  ];

  const PricingCard = ({ option }: { option: PricingOption }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${option.isPackage ? 'bg-purple-100' : 'bg-indigo-100'}`}>
          {option.icon}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
          <p className="text-gray-600">{option.duration}</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">${option.price}</span>
          {option.price > 0 && <span className="text-gray-600 ml-1">.00</span>}
        </div>
        <p className="text-gray-600">{option.location}</p>
      </div>
      {option.description && (
        <p className="text-sm text-gray-600 mb-6">{option.description}</p>
      )}
      <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
        Book Now
      </button>
    </div>
  );

  return (
    <div className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hypnosis Sessions & Packages</h1>
          <p className="text-xl text-gray-600">All sessions are conducted virtually via Zoom</p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Individual Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <PricingCard key={index} option={session} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Session Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PricingCard key={index} option={pkg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;