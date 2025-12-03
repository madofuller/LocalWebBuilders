import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Phone, Navigation, Star } from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

const colors = {
  cream: '#F5E6D3',
  teal: '#1B4D5C',
  coral: '#E8805C',
  mustard: '#D4A84B',
  warmWhite: '#FAF6F1',
  darkText: '#1A1A1A'
};

const locations = [
  {
    name: 'South Lamar',
    city: 'Austin',
    address: '2115 South Lamar Blvd',
    phone: '(512) 555-0123',
    hours: 'Sun-Thu 11am-10pm, Fri-Sat 11am-11pm',
    features: ['Full Bar', 'Patio Seating', 'Private Events'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    mapUrl: '#'
  },
  {
    name: 'East 6th',
    city: 'Austin',
    address: '1801 East 6th Street',
    phone: '(512) 555-0456',
    hours: 'Sun-Thu 11am-10pm, Fri-Sat 11am-12am',
    features: ['Rooftop Bar', 'Live Music', 'Late Night'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    mapUrl: '#'
  },
  {
    name: 'Deep Ellum',
    city: 'Dallas',
    address: '2845 Main Street',
    phone: '(214) 555-0789',
    hours: 'Sun-Thu 11am-10pm, Fri-Sat 11am-11pm',
    features: ['Full Bar', 'Dog Friendly Patio', 'Brunch'],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
    mapUrl: '#'
  }
];

export default function BBQLocations() {
  return (
    <>
      <TemplateFloatingCTA templateName="Smoke & Ember BBQ" templateSlug="oakfire" />
      <div className="min-h-screen pt-12" style={{ background: colors.cream, fontFamily: "'Lato', sans-serif" }}>
        
        {/* Header */}
        <header className="py-6 px-6 border-b" style={{ borderColor: `${colors.teal}20` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/bbq" className="flex items-center gap-2 hover:opacity-70" style={{ color: colors.teal }}>
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <Link to="/bbq" className="text-2xl font-black tracking-wider" style={{ fontFamily: "'Oswald', sans-serif", color: colors.teal }}>
              SMOKE & EMBER
            </Link>
            <Link to="/bbq/menu" className="text-sm font-medium" style={{ color: colors.teal }}>Menu</Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 px-6 text-center" style={{ background: colors.teal }}>
          <h1 
            className="text-5xl md:text-6xl font-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.cream }}
          >
            Find Your Fire
          </h1>
          <p style={{ color: colors.cream, opacity: 0.8 }}>
            Three locations. Same legendary BBQ.
          </p>
        </section>

        {/* Locations Grid */}
        <section className="py-16 px-6" style={{ background: colors.warmWhite }}>
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {locations.map((loc, i) => (
                <div 
                  key={i}
                  className="grid md:grid-cols-2 gap-8 items-center"
                  style={{ flexDirection: i % 2 === 1 ? 'row-reverse' : 'row' }}
                >
                  <div className={`aspect-[4/3] rounded-3xl overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <span className="text-sm font-bold tracking-wider" style={{ color: colors.coral }}>
                      {loc.city.toUpperCase()}
                    </span>
                    <h2 
                      className="text-3xl md:text-4xl font-black mt-2 mb-6"
                      style={{ fontFamily: "'Oswald', sans-serif", color: colors.teal }}
                    >
                      {loc.name}
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin size={20} style={{ color: colors.coral }} className="mt-1 flex-shrink-0" />
                        <span style={{ color: colors.darkText }}>{loc.address}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={20} style={{ color: colors.coral }} className="mt-1 flex-shrink-0" />
                        <span style={{ color: colors.darkText }}>{loc.hours}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone size={20} style={{ color: colors.coral }} className="mt-1 flex-shrink-0" />
                        <a href={`tel:${loc.phone}`} className="hover:underline" style={{ color: colors.darkText }}>{loc.phone}</a>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {loc.features.map((feature, j) => (
                        <span 
                          key={j}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ background: `${colors.teal}15`, color: colors.teal }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={loc.mapUrl}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold"
                        style={{ background: colors.teal, color: colors.cream }}
                      >
                        <Navigation size={18} />
                        Get Directions
                      </a>
                      <a 
                        href={`tel:${loc.phone}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold"
                        style={{ background: 'transparent', color: colors.teal, border: `2px solid ${colors.teal}` }}
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 px-6" style={{ background: colors.cream }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl font-black mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
            >
              Coming Soon
            </h2>
            <p className="mb-8" style={{ color: colors.darkText, opacity: 0.7 }}>
              We're bringing the fire to new cities. Sign up to be the first to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full outline-none"
                style={{ background: colors.warmWhite, border: `1px solid ${colors.teal}30` }}
              />
              <button 
                className="px-6 py-3 rounded-full font-bold"
                style={{ background: colors.coral, color: colors.cream }}
              >
                Notify Me
              </button>
            </div>
            <div className="flex justify-center gap-8 mt-12 opacity-50">
              <span style={{ color: colors.teal }}>Houston</span>
              <span style={{ color: colors.teal }}>San Antonio</span>
              <span style={{ color: colors.teal }}>Fort Worth</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6" style={{ background: colors.teal }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-black tracking-wider mb-4" style={{ fontFamily: "'Oswald', sans-serif", color: colors.cream }}>
              SMOKE & EMBER
            </h2>
            <div className="flex justify-center gap-8 text-sm" style={{ color: colors.cream, opacity: 0.7 }}>
              <Link to="/bbq" className="hover:opacity-100">Home</Link>
              <Link to="/bbq/menu" className="hover:opacity-100">Menu</Link>
              <Link to="/bbq/about" className="hover:opacity-100">About</Link>
              <Link to="/bbq/catering" className="hover:opacity-100">Catering</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

