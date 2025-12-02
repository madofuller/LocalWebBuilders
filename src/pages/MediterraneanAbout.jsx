import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Leaf, Sun, Users } from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

const colors = {
  yellow: '#FFD93D',
  cream: '#FFF9E6',
  brown: '#5C4033',
  orange: '#E85D3B',
  green: '#4A7C59',
  white: '#FFFFFF'
};

const values = [
  { icon: Sun, title: 'Sunshine in Every Bowl', desc: 'We bring Mediterranean warmth to every dish we serve.' },
  { icon: Leaf, title: 'Fresh & Seasonal', desc: 'Locally sourced ingredients, prepared fresh daily.' },
  { icon: Heart, title: 'Made With Love', desc: 'Family recipes passed down through generations.' },
  { icon: Users, title: 'Community First', desc: 'Building connections one meal at a time.' }
];

const team = [
  { name: 'Maria Santos', role: 'Founder & Head Chef', img: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&q=80' },
  { name: 'Yusuf Al-Hassan', role: 'Executive Chef', img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80' },
  { name: 'Elena Papadopoulos', role: 'Pastry Chef', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80' }
];

export default function MediterraneanAbout() {
  return (
    <>
      <TemplateFloatingCTA templateName="Solara Mediterranean" templateSlug="solara" />
      <div className="min-h-screen pt-12" style={{ background: colors.yellow, fontFamily: "'Inter', sans-serif" }}>
        
        {/* Header */}
        <header className="py-4 px-6">
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
        <section className="py-20 px-6 text-center" style={{ background: colors.yellow }}>
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
          >
            Our Story
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.brown, opacity: 0.8 }}>
            Born from a love of Mediterranean sunshine and the simple joy of sharing good food with good people.
          </p>
        </section>

        {/* Story */}
        <section className="py-20 px-6" style={{ background: colors.cream }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
                >
                  From Our Kitchen<br/>To Your Table
                </h2>
                <p className="mb-4" style={{ color: colors.brown, opacity: 0.8 }}>
                  Solara started with a simple dream: to bring the warmth and vibrant flavors 
                  of the Mediterranean coast to our community. Founded in 2019 by Maria Santos, 
                  a first-generation immigrant from Portugal, we set out to create a space where 
                  every meal feels like a celebration.
                </p>
                <p className="mb-4" style={{ color: colors.brown, opacity: 0.8 }}>
                  Our recipes draw from the rich culinary traditions of Greece, Lebanon, Turkey, 
                  and North Africa. We believe food is meant to be shared, savored, and enjoyed 
                  without pretense.
                </p>
                <p style={{ color: colors.brown, opacity: 0.8 }}>
                  Every bowl we serve is made with fresh ingredients, prepared with care, and 
                  served with a smile. Welcome to our table.
                </p>
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                  alt="Chef cooking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6" style={{ background: colors.yellow }}>
          <div className="max-w-6xl mx-auto">
            <h2 
              className="text-3xl font-bold text-center mb-12"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
            >
              What We Believe
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl text-center"
                  style={{ background: colors.cream }}
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: colors.yellow }}
                  >
                    <value.icon size={24} style={{ color: colors.orange }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: colors.brown }}>{value.title}</h3>
                  <p className="text-sm" style={{ color: colors.brown, opacity: 0.7 }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6" style={{ background: colors.cream }}>
          <div className="max-w-5xl mx-auto">
            <h2 
              className="text-3xl font-bold text-center mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
            >
              Meet The Team
            </h2>
            <p className="text-center mb-12" style={{ color: colors.brown, opacity: 0.7 }}>
              The passionate people behind every dish
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((person, i) => (
                <div key={i} className="text-center">
                  <div className="aspect-square rounded-3xl overflow-hidden mb-4">
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: colors.brown }}>{person.name}</h3>
                  <p className="text-sm" style={{ color: colors.orange }}>{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center" style={{ background: colors.orange }}>
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.white }}
          >
            Ready to taste the sunshine?
          </h2>
          <p className="mb-8" style={{ color: colors.white, opacity: 0.9 }}>
            Visit us today or order online for pickup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/mediterranean/menu"
              className="px-8 py-4 rounded-full font-bold"
              style={{ background: colors.white, color: colors.orange }}
            >
              View Menu
            </Link>
            <Link 
              to="/mediterranean/locations"
              className="px-8 py-4 rounded-full font-bold"
              style={{ background: 'transparent', color: colors.white, border: '2px solid white' }}
            >
              Find Us
            </Link>
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
              <Link to="/mediterranean/locations" className="hover:opacity-100">Locations</Link>
              <Link to="/mediterranean/catering" className="hover:opacity-100">Catering</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

