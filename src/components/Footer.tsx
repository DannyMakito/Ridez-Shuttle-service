export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                R
              </div>
              <span className="text-xl font-bold text-white">Ridez Shuttle</span>
            </div>
            <p className="text-sm leading-relaxed">
              Providing reliable, safe, and comfortable shuttle services across South Africa since 2011. Your journey is our priority.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>Email: info@ridezshuttle.co.za</li>
              <li>Phone: +27 71 242 8838</li>
              <li>Address: O.R. Tambo International Airport, Johannesburg</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© 2026 Ridez Shuttle Service | All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
