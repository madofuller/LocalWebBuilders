import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, ChevronRight, Instagram, 
  Facebook, ArrowRight, Menu, X, Users, Utensils, ChefHat
} from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

/* ============================================
   JOYFUL TABLE - Catering & Events Agency
   Elegant, peachy, illustrated style
   ============================================ */

const colors = {
  peach: '#FFEEE4',
  coral: '#FF6B4A',
  cream: '#FFF9F5',
  warmWhite: '#FFFBF8',
  orange: '#FF8564',
  darkText: '#2D2A26',
  mutedText: '#6B6560',
  accent: '#FFB299'
};

// Stock images
const images = {
  hero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
  tablescape: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
  chef: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  plating: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  wedding: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  corporate: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
  party: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
  dessert: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
  appetizer: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80',
  wine: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80',
  cheese: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&q=80',
  shrimp: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
  bread: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
  salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
  cake: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&q=80',
  venue1: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
  venue2: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80',
};

function CateringShowcaseContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TemplateFloatingCTA templateName="Joyful Table Catering" templateSlug="joyful-table" />
      <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: colors.peach }}>
      
      {/* ========== HEADER ========== */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 shadow-md' : 'py-5'
        }`}
        style={{ background: isScrolled ? colors.peach : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span 
            className="text-3xl md:text-4xl font-black tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.coral }}
          >
            JOYFUL TABLE
          </span>

          <nav className="hidden md:flex items-center gap-6">
            {['Services', 'Portfolio', 'About', 'Contact'].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                style={{ color: colors.darkText }}
              >
                {item}
              </a>
            ))}
            <div style={{ color: colors.darkText }}>
              <LanguageToggle style="buttons" />
            </div>
            <Link 
              to="/catering/order"
              className="px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105"
              style={{ background: colors.coral, color: colors.cream }}
            >
              {t('orderOnline').toUpperCase()}
            </Link>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: colors.coral }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={images.hero}
            alt="Elegant dining"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-8"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.coral }}
            >
              THE CATERING AGENCY<br/>
              SPECIALIZED IN<br/>
              <span style={{ color: colors.darkText }}>(VERY) GOOD TASTE</span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl mb-10 max-w-xl"
              style={{ color: colors.mutedText }}
            >
              We create memorable culinary experiences for your most important moments.
            </p>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
              style={{ background: colors.coral, color: colors.cream }}
            >
              Contact Us
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ========== INTRO BANNER ========== */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{ background: colors.cream }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden">
            <img src={images.plating} alt="Food" className="w-full h-full object-cover" />
          </div>
          <h2 
            className="text-3xl md:text-5xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
          >
            HERE WE ORGANIZE YOUR<br/>
            JOYFUL EVENTS, AT THE<br/>
            TABLE ESSENTIALLY.
          </h2>
        </div>
      </section>

      {/* ========== FOOD GALLERY ========== */}
      <section className="py-8" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[images.dessert, images.appetizer, images.wine, images.cheese, images.shrimp, images.bread, images.salad, images.cake].map((img, i) => (
              <div 
                key={i}
                className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <img src={img} alt={`Food ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
          >
            OUR SERVICES
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'For Businesses', desc: 'Corporate events, team lunches, conferences, product launches', img: images.corporate },
              { icon: Utensils, title: 'For Individuals', desc: 'Weddings, birthdays, anniversaries, private dinners', img: images.wedding },
              { icon: ChefHat, title: 'For Chefs', desc: 'Pop-ups, collaborations, culinary consulting', img: images.chef }
            ].map((service, i) => (
              <div 
                key={i}
                className="rounded-3xl overflow-hidden text-center group cursor-pointer transition-all hover:shadow-lg"
                style={{ background: colors.warmWhite, border: `2px solid ${colors.coral}30` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: colors.peach }}
                  >
                    <service.icon size={28} style={{ color: colors.coral }} />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: colors.mutedText }}>{service.desc}</p>
                  <div 
                    className="w-10 h-10 rounded-full mx-auto mt-6 flex items-center justify-center"
                    style={{ background: colors.coral }}
                  >
                    <ArrowRight size={16} color={colors.cream} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO ========== */}
      <section id="portfolio" className="py-20" style={{ background: colors.peach }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
          >
            PORTFOLIO
          </h2>
          <p className="mb-12" style={{ color: colors.mutedText }}>Our recent culinary creations</p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Weddings', 'Corporate', 'Private'].map((tab, i) => (
              <button 
                key={tab}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'shadow-md' : ''}`}
                style={{ 
                  background: i === 0 ? colors.coral : 'transparent',
                  color: i === 0 ? colors.cream : colors.darkText,
                  border: i === 0 ? 'none' : `1px solid ${colors.coral}50`
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Sarah & Michael', type: 'Wedding', img: images.wedding, location: 'Garden Estate' },
              { title: 'Tech Summit 2024', type: 'Corporate', img: images.corporate, location: 'Downtown Convention' },
              { title: 'The Andersons', type: 'Anniversary', img: images.party, location: 'Private Residence' },
              { title: 'Startup Launch', type: 'Corporate', img: images.venue1, location: 'Rooftop Venue' },
              { title: 'Emily & James', type: 'Wedding', img: images.tablescape, location: 'Vineyard Estate' },
              { title: 'Holiday Gala', type: 'Corporate', img: images.venue2, location: 'Grand Ballroom' }
            ].map((item, i) => (
              <div 
                key={i}
                className="rounded-3xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
                style={{ background: colors.warmWhite }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium mb-1" style={{ color: colors.coral }}>{item.type}</p>
                  <h3 
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: colors.mutedText }}>{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
              >
                ABOUT US
              </h2>
              <div className="space-y-4 text-lg" style={{ color: colors.mutedText }}>
                <p>
                  Founded in 2018, Joyful Table was born from a simple belief: 
                  that exceptional food brings people together in extraordinary ways.
                </p>
                <p>
                  Our team of passionate chefs and event coordinators work 
                  tirelessly to transform your vision into an unforgettable 
                  culinary experience.
                </p>
                <p>
                  From intimate dinners to grand celebrations, we handle 
                  every detail with care and creativity.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                {['Farm-to-table ingredients', 'Custom menu design', 'Full-service coordination', 'Sustainable practices'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: colors.coral }}
                    >
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span style={{ color: colors.darkText }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={images.chef}
                alt="Our chef"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-24 relative overflow-hidden" style={{ background: colors.coral }}>
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: `url(${images.tablescape})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.cream }}
          >
            SHALL WE<br/>SET THE TABLE?
          </h2>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold transition-all hover:scale-105"
            style={{ background: colors.cream, color: colors.coral }}
          >
            Get Started
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-16" style={{ background: colors.darkText }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span 
              className="text-2xl font-black"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.cream }}
            >
              JOYFUL TABLE
            </span>
            
            <nav className="flex flex-wrap justify-center gap-8">
              {['Services', 'Portfolio', 'About', 'Contact'].map(item => (
                <a 
                  key={item}
                  href="#"
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: colors.cream }}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a 
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{ background: colors.coral }}
                >
                  <Icon size={18} color={colors.cream} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 text-center" style={{ borderTop: `1px solid ${colors.cream}20` }}>
            <p className="text-sm" style={{ color: colors.cream, opacity: 0.5 }}>
              © 2025 Joyful Table Catering. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default function CateringShowcase() {
  return (
    <LanguageProvider>
      <CateringShowcaseContent />
    </LanguageProvider>
  );
}
