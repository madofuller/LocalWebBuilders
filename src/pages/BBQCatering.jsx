import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Utensils, Calendar, Phone, Mail, Check, ArrowRight } from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

const colors = {
  cream: '#F5E6D3',
  teal: '#1B4D5C',
  coral: '#E8805C',
  mustard: '#D4A84B',
  warmWhite: '#FAF6F1',
  darkText: '#1A1A1A',
  peach: '#FFDAB3'
};

const packages = [
  {
    name: 'The Backyard',
    price: 25,
    unit: 'per person',
    min: '20 guests minimum',
    description: 'Perfect for casual gatherings',
    includes: [
      'Choice of 2 smoked meats',
      'Choice of 3 sides',
      'House-made sauces',
      'Pickles & onions',
      'White bread',
      'Plates, napkins, utensils'
    ]
  },
  {
    name: 'The Pitmaster',
    price: 40,
    unit: 'per person',
    min: '30 guests minimum',
    popular: true,
    description: 'Our most popular package',
    includes: [
      'Choice of 3 smoked meats',
      'Choice of 4 sides',
      'House-made sauces',
      'Pickles & onions',
      'Jalapeño cheddar sausage',
      'Dessert (banana pudding)',
      'Sweet tea & lemonade',
      'Full service setup'
    ]
  },
  {
    name: 'The Whole Hog',
    price: 65,
    unit: 'per person',
    min: '50 guests minimum',
    description: 'The ultimate BBQ experience',
    includes: [
      'All smoked meats',
      'All sides',
      'Premium beef ribs',
      'Full dessert spread',
      'Open bar setup',
      'On-site pitmaster',
      'Custom menu planning',
      'Event coordination'
    ]
  }
];

const eventTypes = [
  { name: 'Corporate Events', icon: '🏢' },
  { name: 'Weddings', icon: '💒' },
  { name: 'Private Parties', icon: '🎉' },
  { name: 'Film & Production', icon: '🎬' },
  { name: 'Festivals', icon: '🎪' },
  { name: 'Holiday Parties', icon: '🎄' }
];

export default function BBQCatering() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '', guests: '', date: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours.');
  };

  return (
    <>
      <TemplateFloatingCTA templateName="Oakfire BBQ" templateSlug="oakfire" />
      <div className="min-h-screen pt-12" style={{ background: colors.cream, fontFamily: "'Lato', sans-serif" }}>
        
        {/* Header */}
        <header className="py-6 px-6 border-b" style={{ borderColor: `${colors.teal}20` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/bbq" className="flex items-center gap-2 hover:opacity-70" style={{ color: colors.teal }}>
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <Link to="/bbq" className="text-2xl font-black tracking-wider" style={{ fontFamily: "'Oswald', sans-serif", color: colors.teal }}>
              OAKFIRE
            </Link>
            <Link to="/bbq/menu" className="text-sm font-medium" style={{ color: colors.teal }}>Menu</Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-20 px-6" style={{ background: colors.teal }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl md:text-7xl font-black mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.cream }}
            >
              Let Us Bring<br/>The Fire To You
            </h1>
            <p className="text-lg mb-8" style={{ color: colors.cream, opacity: 0.8 }}>
              From intimate gatherings to large-scale events, we bring our signature 
              Texas-Asian smokehouse experience anywhere in the Austin & Dallas areas.
            </p>
            <a 
              href="#inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg"
              style={{ background: colors.coral, color: colors.cream }}
            >
              Request A Quote
              <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-16 px-6" style={{ background: colors.warmWhite }}>
          <div className="max-w-6xl mx-auto">
            <h2 
              className="text-3xl font-black text-center mb-12"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
            >
              We Cater All Events
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {eventTypes.map((type, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer"
                  style={{ background: colors.cream }}
                >
                  <span className="text-4xl mb-3 block">{type.icon}</span>
                  <span className="text-sm font-medium" style={{ color: colors.teal }}>{type.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-6" style={{ background: colors.cream }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-4xl font-black mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
              >
                Catering Packages
              </h2>
              <p style={{ color: colors.darkText, opacity: 0.7 }}>
                Choose a package or let us create a custom menu for your event
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <div 
                  key={i}
                  className={`rounded-3xl p-8 relative ${pkg.popular ? 'ring-2' : ''}`}
                  style={{ 
                    background: colors.warmWhite,
                    ringColor: pkg.popular ? colors.coral : 'transparent'
                  }}
                >
                  {pkg.popular && (
                    <div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold"
                      style={{ background: colors.coral, color: colors.cream }}
                    >
                      MOST POPULAR
                    </div>
                  )}

                  <h3 
                    className="text-2xl font-black mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif", color: colors.teal }}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: colors.darkText, opacity: 0.6 }}>
                    {pkg.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-black" style={{ color: colors.coral }}>${pkg.price}</span>
                    <span className="text-sm ml-2" style={{ color: colors.darkText, opacity: 0.6 }}>{pkg.unit}</span>
                    <p className="text-xs mt-1" style={{ color: colors.darkText, opacity: 0.5 }}>{pkg.min}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: colors.coral }} />
                        <span className="text-sm" style={{ color: colors.darkText }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#inquiry"
                    className="block text-center py-3 rounded-full font-bold transition-all hover:scale-105"
                    style={{ 
                      background: pkg.popular ? colors.coral : 'transparent',
                      color: pkg.popular ? colors.cream : colors.teal,
                      border: pkg.popular ? 'none' : `2px solid ${colors.teal}`
                    }}
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 px-6" style={{ background: colors.peach }}>
          <div className="max-w-6xl mx-auto">
            <h2 
              className="text-3xl font-black text-center mb-8"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
            >
              Past Events
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
                'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80',
                'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
                'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80'
              ].map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                  <img src={img} alt="Event" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section id="inquiry" className="py-20 px-6" style={{ background: colors.teal }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-4xl font-black mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.cream }}
              >
                Request A Quote
              </h2>
              <p style={{ color: colors.cream, opacity: 0.8 }}>
                Tell us about your event and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={{ background: colors.cream }}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={{ background: colors.cream }}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={{ background: colors.cream }}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <select 
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={{ background: colors.cream }}
                  onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                >
                  <option value="">Event Type</option>
                  {eventTypes.map((type, i) => (
                    <option key={i} value={type.name}>{type.name}</option>
                  ))}
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="number"
                  placeholder="Number of Guests"
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={{ background: colors.cream }}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                />
                <input 
                  type="date"
                  placeholder="Event Date"
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={{ background: colors.cream }}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <textarea 
                placeholder="Tell us about your event..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                style={{ background: colors.cream }}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              <button 
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02]"
                style={{ background: colors.coral, color: colors.cream }}
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6" style={{ background: colors.darkText }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-black tracking-wider mb-4" style={{ fontFamily: "'Oswald', sans-serif", color: colors.cream }}>
              OAKFIRE
            </h2>
            <p className="mb-6" style={{ color: colors.cream, opacity: 0.5 }}>smokehouse & bar</p>
            <div className="flex justify-center gap-8 text-sm" style={{ color: colors.cream, opacity: 0.7 }}>
              <Link to="/bbq" className="hover:opacity-100">Home</Link>
              <Link to="/bbq/menu" className="hover:opacity-100">Menu</Link>
              <Link to="/bbq/about" className="hover:opacity-100">About</Link>
              <Link to="/bbq/locations" className="hover:opacity-100">Locations</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

