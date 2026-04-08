import { ShieldCheck, Award, UserCheck } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Driver" 
              className="rounded-2xl shadow-2xl object-cover h-[400px] w-full"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-6">
              Why choose Ridez Shuttle
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We have an experienced core team that takes your comfort extremely seriously. We go the extra mile to make sure your transport needs are met and exceeded. Return customers lie at the core of our business.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Because we own, maintain and manage all our own vehicles and employ full-time drivers, everyone in our company is fully invested in your experience. We focus on service excellence – and customer care.
            </p>
            <p className="text-emerald-800 font-semibold mb-10">
              Our drivers are proud to represent us and we're proud to have them on our team!
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Satisfied<br/>Customers</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  <Award size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Professional<br/>Agents</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  <UserCheck size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Professional<br/>Drivers</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
