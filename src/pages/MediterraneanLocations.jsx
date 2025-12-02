import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Phone, Navigation } from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

const colors = {
  yellow: '#FFD93D',
  cream: '#FFF9E6',
  brown: '#5C4033',
  orange: '#E85D3B',
  green: '#4A7C59',
  white: '#FFFFFF'
};

const locations = [
  {
    name: 'Downtown',
    address: '425 Main Street, Suite 100',
    phone: '(555) 123-4567',
    hours: 'Mon-Sat 11am-9pm, Sun 11am-8pm',
    features: ['Dine-In', 'Takeout', 'Delivery'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80'
  },
  {
    name: 'Midtown',
    address: '892 Oak Avenue',
    phone: '(555) 234-5678',
    hours: 'Mon-Sat 11am-10pm, Sun 12pm-8pm',
    features: ['Dine-In', 'Patio', 'Catering'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80'
  },
  {
    name: 'Westside',
    address: '1456 Palm Drive',
    phone: '(555) 345-6789',
    hours: 'Daily 11am-9pm',
    features: ['Dine-In', 'Takeout', 'Online Ordering'],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80'
  }
];

export default function MediterraneanLocations() {
  return (
    <>
      <TemplateFloatingCTA templateName="Solara Mediterranean" templateSlug="solara" />
      <div className="min-h-screen pt-12" style={{ background: colors.cream, fontFamily: "'Inter', sans-serif" }}>
        
        {/* Header */}
        <header className="py-4 px-6" style={{ background: colors.yellow }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/mediterranean" className="flex items-center gap-2 hover:opacity-70" style={{ color: colors.brown }}>
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <Link to="/mediterranean" className="flex items-center gap-2">
              <span className="text-2xl">☀️</span>
              <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}>
                Solara
              </span>
            </Link>
            <Link to="/mediterranean/menu" className="text-sm font-medium" style={{ color: colors.brown }}>Menu</Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 px-6 text-center" style={{ background: colors.yellow }}>
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
          >
            Find Your Sunshine
          </h1>
          <p style={{ color: colors.brown, opacity: 0.8 }}>
            Three locations to serve you better
          </p>
        </section>

        {/* Locations */}
        <section className="py-16 px-6" style={{ background: colors.cream }}>
          <div className="max-w-5xl mx-auto space-y-12">
            {locations.map((loc, i) => (
              <div 
                key={i}
                className="grid md:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden"
                style={{ background: colors.white }}
              >
                <div className={`aspect-[4/3] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                </div>
                
                <div className={`p-8 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 
                    className="text-3xl font-bold mb-6"
                    style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
                  >
                    {loc.name}
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} style={{ color: colors.orange }} className="mt-1 flex-shrink-0" />
                      <span style={{ color: colors.brown }}>{loc.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={20} style={{ color: colors.orange }} className="mt-1 flex-shrink-0" />
                      <span style={{ color: colors.brown }}>{loc.hours}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={20} style={{ color: colors.orange }} className="mt-1 flex-shrink-0" />
                      <a href={`tel:${loc.phone}`} className="hover:underline" style={{ color: colors.brown }}>{loc.phone}</a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {loc.features.map((feature, j) => (
                      <span 
                        key={j}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ background: colors.yellow, color: colors.brown }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold"
                      style={{ background: colors.orange, color: colors.white }}
                    >
                      <Navigation size={18} />
                      Directions
                    </a>
                    <a 
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold"
                      style={{ background: colors.yellow, color: colors.brown }}
                    >
                      Order Online
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6" style={{ background: colors.yellow }}>
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">☀️</span>
              <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}>
                Solara
              </span>
            </div>
            <div className="flex justify-center gap-8 text-sm" style={{ color: colors.brown, opacity: 0.7 }}>
              <Link to="/mediterranean" className="hover:opacity-100">Home</Link>
              <Link to="/mediterranean/menu" className="hover:opacity-100">Menu</Link>
              <Link to="/mediterranean/about" className="hover:opacity-100">About</Link>
              <Link to="/mediterranean/catering" className="hover:opacity-100">Catering</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

