import { Menu, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            R
          </div>
          <span className="text-2xl font-bold text-emerald-900">Ridez Shuttle</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium">Services</a>
          <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium">Destinations</a>
          <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium">Reviews</a>
          <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+27712428838" className="flex items-center gap-2 text-emerald-700 font-semibold">
            <Phone size={20} />
            <span>+27 71 242 8838</span>
          </a>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors">
            Book Now
          </button>
        </div>

        <button className="md:hidden text-gray-600">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}
