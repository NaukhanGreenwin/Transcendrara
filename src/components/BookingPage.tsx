import React, { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { enUS } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { Clock, MapPin, Video } from 'lucide-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface BookingSlot {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: 'in-person' | 'zoom';
}

const BookingPage = () => {
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);
  
  // Sample available slots
  const availableSlots: BookingSlot[] = [
    {
      id: '1',
      title: 'Available: In-Person Session',
      start: new Date(2024, 2, 20, 10, 0),
      end: new Date(2024, 2, 20, 11, 0),
      type: 'in-person'
    },
    {
      id: '2',
      title: 'Available: Zoom Session',
      start: new Date(2024, 2, 20, 14, 0),
      end: new Date(2024, 2, 20, 15, 0),
      type: 'zoom'
    },
    // Add more slots as needed
  ];

  const handleSelectSlot = (slot: BookingSlot) => {
    setSelectedSlot(slot);
  };

  return (
    <div className="py-12 bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Session</h1>
          <p className="text-xl text-gray-600">Select your preferred time and session type</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <BigCalendar
              localizer={localizer}
              events={availableSlots}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 600 }}
              views={['month', 'week', 'day']}
              selectable
              onSelectEvent={handleSelectSlot}
              className="font-sans"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Session Types</h2>
              <div className="space-y-4">
                <motion.div 
                  className="p-4 border rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="font-medium text-gray-900">In-Person Session</h3>
                  </div>
                  <p className="text-sm text-gray-600">Brentwood, Los Angeles, CA</p>
                </motion.div>

                <motion.div 
                  className="p-4 border rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-2">
                    <Video className="w-5 h-5 text-indigo-600 mr-2" />
                    <h3 className="font-medium text-gray-900">Zoom Session</h3>
                  </div>
                  <p className="text-sm text-gray-600">Online video consultation</p>
                </motion.div>
              </div>
            </div>

            {selectedSlot && (
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Selected Time Slot</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">
                      {format(selectedSlot.start, 'MMMM d, yyyy h:mm a')}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {selectedSlot.type === 'in-person' ? (
                      <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                    ) : (
                      <Video className="w-5 h-5 text-indigo-600 mr-2" />
                    )}
                    <span className="text-gray-700">
                      {selectedSlot.type === 'in-person' ? 'In-Person Session' : 'Zoom Session'}
                    </span>
                  </div>
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Confirm Booking
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;