import React from 'react';
import { Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The mindfulness techniques I learned here have become an essential part of my daily routine. My stress levels have decreased significantly.",
    author: "Arjun Patel",
    role: "Tech Entrepreneur"
  },
  {
    quote: "The personalized approach and genuine care for my progress made all the difference. I'm achieving goals I once thought impossible.",
    author: "Priya Sharma",
    role: "Wellness Coach"
  },
  {
    quote: "Through hypnotherapy, I've discovered new depths of clarity and purpose. The transformation has been remarkable.",
    author: "Zain Ahmed",
    role: "Creative Director"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformative Experiences</h2>
            <p className="text-xl text-gray-600">Hear from those who have embarked on their journey with us</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} className="h-full">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                <Quote className="w-10 h-10 text-purple-600 mb-6" />
                <p className="text-gray-600 mb-8 flex-grow text-lg italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-purple-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;