import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Clock, Users, ArrowLeft, Check, User, Mail, Phone } from 'lucide-react';

interface BookingFormProps {
  phase: number;
  setPhase: (phase: number) => void;
}

export default function BookingForm({ phase, setPhase }: BookingFormProps) {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);

  const cars = [
    { id: 1, name: 'Comfort - Sedan (3 seater)', pax: 3, bags: 3, price: 'R730.00', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=300&h=200' },
    { id: 2, name: 'Comfort - Van (8 seater)', pax: 8, bags: 8, price: 'R1035.00', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=300&h=200' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
      {/* Tabs - Only show in phase 1 */}
      {phase === 1 && (
        <div className="flex border-b border-gray-100">
          <button className="flex-1 py-4 px-2 text-sm font-semibold text-emerald-700 border-b-2 border-emerald-600 flex items-center justify-center gap-2">
            <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</div>
            South Africa
          </button>
          <button className="flex-1 py-4 px-2 text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
            Modify or Cancel Booking
          </button>
        </div>
      )}

      {/* Header for Phase 2 & 3 */}
      {phase > 1 && (
        <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
          <button 
            onClick={() => setPhase(phase - 1)}
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 font-medium mb-4 transition-colors border border-gray-200 rounded-full px-4 py-1.5 text-sm w-fit"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <h2 className="text-2xl font-bold text-gray-900">
            {phase === 2 ? 'Choose your ride' : 'Add Passenger Details'}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {phase === 2 ? 'Your ride, your choice! Take a look and pick the perfect one.' : 'Help us ensure a smooth journey! Please provide passenger details.'}
          </p>
        </div>
      )}

      {/* Form Content */}
      <div className="p-6 flex-1 overflow-y-auto custom-scrollbar relative">
        <AnimatePresence mode="wait">
          {phase === 1 && (
            <motion.div
              key="phase1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              {/* Ride Details */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Ride Details</h3>
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400"><MapPin size={18} /></div>
                  <input type="text" placeholder="Pickup Address" className="w-full bg-gray-50 border border-transparent focus:border-emerald-500 focus:bg-white rounded-t-xl py-3.5 pl-12 pr-4 outline-none transition-all" />
                  
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center cursor-pointer border-2 border-white shadow-sm">
                    <ArrowLeft size={14} className="rotate-90" />
                  </div>

                  <div className="h-[1px] bg-gray-200 mx-4" />
                  
                  <div className="absolute left-4 bottom-4 text-gray-400"><MapPin size={18} /></div>
                  <input type="text" placeholder="Dropoff Address" className="w-full bg-gray-50 border border-transparent focus:border-emerald-500 focus:bg-white rounded-b-xl py-3.5 pl-12 pr-4 outline-none transition-all" />
                </div>
              </div>

              {/* Date & Time */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Date & Time</h3>
                <div className="flex gap-3 mb-3">
                  <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Calendar size={16} /></div>
                    <input type="text" placeholder="Date" className="w-full bg-gray-50 rounded-xl py-3 pl-10 pr-4 outline-none focus:bg-white focus:border-emerald-500 border border-transparent" />
                  </div>
                  <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Clock size={16} /></div>
                    <input type="text" placeholder="--:-- --" className="w-full bg-gray-50 rounded-xl py-3 pl-10 pr-4 outline-none focus:bg-white focus:border-emerald-500 border border-transparent" />
                  </div>
                </div>
                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                  <span className="text-sm font-medium text-gray-700">Add return trip</span>
                  <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm" />
                  </div>
                </div>
              </div>

              {/* Passengers */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">No. of Passengers</h3>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Users size={16} /></div>
                  <select className="w-full bg-gray-50 rounded-xl py-3 pl-10 pr-4 outline-none appearance-none focus:bg-white focus:border-emerald-500 border border-transparent text-gray-600">
                    <option>No. Of Passengers</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
              </div>

              {/* Additional Request */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Additional Request</h3>
                <div className="flex gap-3">
                  <label className="flex-1 flex items-center gap-2 bg-gray-50 p-3 rounded-xl cursor-pointer border border-transparent hover:border-gray-200">
                    <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                    <span className="text-sm text-gray-700">Add baby seat</span>
                  </label>
                  <label className="flex-1 flex items-center gap-2 bg-gray-50 p-3 rounded-xl cursor-pointer border border-transparent hover:border-gray-200">
                    <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                    <span className="text-sm text-gray-700">Trailer</span>
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {cars.map(car => (
                <div 
                  key={car.id} 
                  className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${selectedCar === car.id ? 'border-emerald-600 shadow-md' : 'border-gray-100 hover:border-emerald-200'}`}
                  onClick={() => setSelectedCar(car.id)}
                >
                  <div className="p-4 flex gap-4">
                    <img src={car.image} alt={car.name} className="w-32 h-20 object-cover rounded-lg" />
                    <div>
                      <h4 className="font-bold text-gray-900">{car.name}</h4>
                      <div className="text-sm text-gray-500 mt-2 space-y-1">
                        <div className="flex items-center gap-2"><User size={14} /> Max {car.pax} Persons</div>
                        <div className="flex items-center gap-2"><MapPin size={14} /> {car.bags} large bags</div>
                      </div>
                    </div>
                  </div>
                  <div className={`p-4 flex items-center justify-between border-t ${selectedCar === car.id ? 'bg-emerald-50 border-emerald-100' : 'bg-gray-50 border-gray-100'}`}>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Fee</div>
                      <div className="text-lg font-bold text-gray-900">{car.price}</div>
                    </div>
                    <button className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors ${selectedCar === car.id ? 'bg-emerald-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                      {selectedCar === car.id && <Check size={16} />}
                      Select Car
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {phase === 3 && (
            <motion.div
              key="phase3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><User size={18} /></div>
                  <input type="text" placeholder="Name" className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-emerald-500 transition-colors" />
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><User size={18} /></div>
                  <input type="text" placeholder="Surname" className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-emerald-500 transition-colors" />
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Mail size={18} /></div>
                  <input type="email" placeholder="Email" className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-emerald-500 transition-colors" />
                </div>
                <div className="flex gap-3">
                  <select className="w-1/3 border border-gray-200 rounded-xl py-3.5 px-4 outline-none focus:border-emerald-500 transition-colors bg-white">
                    <option>+27 (ZA)</option>
                    <option>+1 (US)</option>
                    <option>+44 (UK)</option>
                  </select>
                  <div className="relative flex-1">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Phone size={18} /></div>
                    <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-emerald-500 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Button */}
      <div className="p-6 bg-white border-t border-gray-100">
        <button 
          onClick={() => {
            if (phase === 1) setPhase(2);
            else if (phase === 2 && selectedCar) setPhase(3);
            else if (phase === 3) alert('Booking Confirmed!');
          }}
          disabled={phase === 2 && !selectedCar}
          className="w-full bg-emerald-900 hover:bg-emerald-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors text-lg"
        >
          {phase === 1 ? 'Get Instant Quote' : 'Confirm'}
        </button>
      </div>
    </div>
  );
}
