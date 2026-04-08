export default function MeetAndGreet() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold text-orange-500 mb-6 text-center lg:text-left">
              MEET & GREET inside O.R. TAMBO Arrivals Hall
            </h2>
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000" 
              alt="Airport Meet and Greet" 
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl font-bold text-emerald-900 mb-2 uppercase tracking-wide">
              Johannesburg Shuttle Service
            </h3>
            <h2 className="text-4xl font-bold text-orange-500 mb-8">
              RIDEZ SHUTTLE
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <span className="text-orange-500 font-bold italic">RIDEZ SHUTTLE</span> began operating in 2011 and has developed a reputation for being professional, thorough, efficient & punctual – for which we take great pride.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              We are also extremely proud of our <strong className="text-gray-900">5 Star Tripadvisor Reviews</strong>, having achieved certificates of excellence in 2018 & 2019, as well as Travellers Choice awards for 2020, 2022, 2023, 2024 & 2025. Our rates are highly competitive & our services unparalleled!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
