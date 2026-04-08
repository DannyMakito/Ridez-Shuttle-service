import React from 'react';

export default function AboutAndAttractions() {
  const attractions = [
    "Apartheid Museum",
    "Mandela Museum Soweto",
    "Lion and Safari Park",
    "Cheetah Reserve",
    "Elephant Sanctuary",
    "Lesedi Cultural Village",
    "Haartebeespoort Dam"
  ];

  const gallery = [
    { title: "Lion & Safari Park", image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&q=80&w=800" },
    { title: "Johannesburg City", image: "https://images.unsplash.com/photo-1577971132997-c10be9372519?auto=format&fit=crop&q=80&w=800" },
    { title: "Elephant Sanctuary", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=800" },
    { title: "Cheetah Reserve", image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&q=80&w=800" },
    { title: "Cultural Village", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800" },
    { title: "Nature Reserves", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              <strong className="text-orange-500">Ridez Shuttle</strong> roars with pride in offering you affordable, safe and reliable shuttles and transfers to various destinations. Our Johannesburg Shuttle Service includes destination shuttle & tour services, as well as airport shuttles and airport transfers. We recognise the importance of reliable and affordable shuttle and transfer services that offer you safe road travel to your destination.
            </p>
            
            <h3 className="text-2xl font-bold text-orange-500 text-center py-4">
              Johannesburg Shuttle Service - Ridez Shuttle
            </h3>
            
            <p>
              <strong className="text-orange-500">Johannesburg</strong> (Jo'burg) being the biggest major city in the country lives up to its latter name as the Place of Gold, not only because of the gold deposits found in the surrounding areas and the fact that it is where gold was first discovered, but also because it is a sparkling, golden city, with a lifestyle that has a wealth of different cultures, thriving businesses, places to play, shopaholics's paradises.
            </p>
            
            <p>
              With over 9 million people roaming trendy suburbs with restaurant-lined streets, flocking to exhibitions, concerts, gigs, theatres, casinos and more, Johannesburg is the playground for the rich and famous to explore the adventures, bright lights, tourist attractions, clubs, restaurants & malls.
            </p>
            
            <p>
              Johannesburg, or the "City of Gold" is South Africa's most populated city and the cosmopolitan business centre of the country.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed">
              When making use of our Ridez Shuttle's Transport Services, you will find we guarantee service satisfaction with friendly customer service, high regard for your personal safety and competitive rates. Our professional airport shuttle and transfer services ensure you have a pleasant experience, be it for business or pleasure. We offer top-class transport from Johannesburg to any destination in South Africa.
            </p>

            <div className="text-center pt-4">
              <h3 className="text-2xl font-bold text-orange-500 mb-8">
                Popular Tourist Attractions
              </h3>
              <ul className="space-y-5">
                {attractions.map((attr, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-700 hover:text-emerald-600 underline underline-offset-8 decoration-gray-200 hover:decoration-emerald-600 transition-all text-lg">
                      {attr}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="text-3xl font-bold text-orange-500 mb-10 text-center">
            Lion & Safari Park & Other Attractions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <h4 className="text-white font-bold text-xl">{item.title}</h4>
                  <div className="w-12 h-1 bg-orange-500 mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
