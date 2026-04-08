export default function LongDistance() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
              Johannesburg Shuttle Service
            </h2>
            <h3 className="text-xl font-bold text-emerald-900 mb-8 uppercase tracking-wide">
              Long Distance Specialists
            </h3>
            
            <p className="font-bold text-gray-900 mb-6">OUR COMMITMENT TO YOU !</p>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                <span className="text-orange-500 font-bold italic">Our Mission</span> to ensure that your transfers are as enjoyable and memorable as your holiday in South Africa.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="text-orange-500 font-bold italic">Our Aim</span> to get you to your destination safely, comfortably and happy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="text-orange-500 font-bold italic">Our Priority</span> customer safety & satisfaction is our main priority. So sit back, relax, take off your shoes and enjoy the ride!
              </p>
              <p className="text-gray-900 font-medium bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <span className="text-orange-600 font-bold uppercase">Please Note:</span> We always allow for comfort breaks along the route for toilet & snacks etc.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-orange-500 mb-8">
              Long Distance Transfers
            </h2>
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000" 
              alt="Long distance road trip" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg mb-8"
            />
            <ol className="space-y-4 text-gray-700 list-decimal list-inside pl-4 marker:text-emerald-600 marker:font-bold">
              <li className="leading-relaxed">
                We travel from <strong className="text-gray-900">Johannesburg</strong> or <strong className="text-gray-900">O R Tambo</strong> to most Tourist Destinations <strong className="text-gray-900">AND BACK</strong>
              </li>
              <li className="leading-relaxed">
                We also do collections from Tourist Destinations <strong className="text-gray-900">BACK TO JOHANNESBURG</strong>
              </li>
              <li className="leading-relaxed">
                We also do <strong className="text-gray-900">DOOR TO DOOR</strong> collections and drop off such as Private Residences, Hotels, Guesthouses, Bed & Breakfasts
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}
