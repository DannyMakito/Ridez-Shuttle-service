export default function Attractions() {
  const destinations = [
    "SUN CITY",
    "HOEDSPRUIT",
    "DRAKENSBERG",
    "NAMBITI GAME RESERVE",
    "MABULA GAME RESERVE",
    "KRUGER NATIONAL PARK",
    "MADIKWE GAME RESERVE",
    "MARATABA GAME RESERVE",
    "SABI SANDS GAME RESERVE",
    "BLACK RHINO GAME RESERVE",
    "PILANESBERG GAME RESERVE",
    "WELGEVONDEN GAME RESERVE"
  ];

  const attractions = [
    "Apartheid Museum",
    "Mandela Museum Soweto",
    "Lion and Safari Park",
    "Cheetah Reserve",
    "Elephant Sanctuary",
    "Lesedi Cultural Village",
    "Haartebeespoort Dam"
  ];

  return (
    <section className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">
              LONG DISTANCE TRANSFERS
            </h2>
            <p className="text-emerald-100 mb-8 text-lg">
              WE TRAVEL TO ALL GAME RESERVES & LODGES<br/>
              Transfers from Johannesburg and Return
            </p>
            
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
              Our Destinations Include:
            </h3>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destinations.map((dest, i) => (
                <li key={i} className="flex items-center gap-2 text-emerald-50">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  {dest}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-8 text-center md:text-left">
              Popular Tourist Attractions
            </h2>
            
            <div className="space-y-4">
              {attractions.map((attr, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="block text-center md:text-left text-lg text-emerald-50 hover:text-orange-400 transition-colors underline underline-offset-4 decoration-emerald-700 hover:decoration-orange-400"
                >
                  {attr}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
