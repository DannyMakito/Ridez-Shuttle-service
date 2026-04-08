import { useState } from 'react';
import BookingForm from './BookingForm';
import { motion, AnimatePresence } from 'motion/react';

export default function Hero() {
  const [phase, setPhase] = useState(1);

  return (
    <section className="relative bg-emerald-900 min-h-[600px] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {phase === 1 ? (
            <motion.div 
              key="bg-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800/90 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000" 
                alt="City at night" 
                className="w-full h-full object-cover object-right"
              />
            </motion.div>
          ) : (
            <motion.div 
              key="bg-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-900/80 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" 
                alt="Safari landscape" 
                className="w-full h-full object-cover object-right"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left: Booking Form */}
        <div className="w-full lg:w-[480px] flex-shrink-0">
          <BookingForm phase={phase} setPhase={setPhase} />
        </div>

        {/* Right: Dynamic Text */}
        <div className="w-full lg:flex-1 text-white">
          <AnimatePresence mode="wait">
            {phase === 1 ? (
              <motion.div
                key="text-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-xl"
              >
                <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                  Experience <span className="font-bold">Premium</span><br />
                  Shuttle Services in<br />
                  <span className="font-bold">South Africa</span>
                </h1>
              </motion.div>
            ) : (
              <motion.div
                key="text-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-xl"
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-orange-400 leading-tight mb-6 italic">
                  Your Journey,<br />
                  Elevated.
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
