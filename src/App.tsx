/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import AboutAndAttractions from './components/AboutAndAttractions';
import LongDistance from './components/LongDistance';
import MeetAndGreet from './components/MeetAndGreet';
import Attractions from './components/Attractions';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <AboutAndAttractions />
        <LongDistance />
        <MeetAndGreet />
        <Attractions />
      </main>
      <Footer />
    </div>
  );
}
