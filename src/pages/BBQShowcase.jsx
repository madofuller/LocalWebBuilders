import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Clock, Star, ChevronRight, Instagram, 
  Facebook, ArrowRight, Menu, X, Flame
} from 'lucide-react';

/* ============================================
   OAKFIRE - Smokehouse & Bar
   Texas BBQ vibes, vintage, hand-drawn feel
   ============================================ */

const colors = {
  cream: '#F5E6D3',
  teal: '#1B4D5C',
  darkTeal: '#0F3A47',
  coral: '#E8805C',
  mustard: '#D4A84B',
  warmWhite: '#FAF6F1',
  darkText: '#1A1A1A',
  lightText: '#F5E6D3'
};

// Stock images
const images = {
  hero: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80',
  brisket: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  ribs: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  veggies: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
  beer: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80',
  cocktail: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80',
  whiskey: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80',
  wine: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80',
  austin: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&q=80',
  dallas: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  pitmaster: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
  smoker: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
  sides: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&q=80',
  patio: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80',
};

// Hand-drawn style decorative elements
const SmokeWisp = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 200" fill="none">
    <path 
      d="M50 200 Q30 150 50 120 Q70 90 50 60 Q30 30 50 0" 
      stroke={colors.coral} 
      strokeWidth="3" 
      fill="none"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export default function BBQShowcase() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Lato', sans-serif" }}>
      
      {/* ========== HEADER ========== */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
        style={{ background: colors.cream }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-xs tracking-widest" style={{ color: colors.teal }}>EST. 2018</span>
            <nav className="hidden md:flex items-center gap-6">
              {['Menu', 'Drinks', 'Locations'].map(item => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                  style={{ color: colors.teal }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div 
            className="text-2xl md:text-3xl font-black tracking-widest"
            style={{ fontFamily: "'Alfa Slab One', serif", color: colors.teal }}
          >
            OAKFIRE
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              {['Catering', 'Events'].map(item => (
                <a 
                  key={item}
                  href="#"
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                  style={{ color: colors.teal }}
                >
                  {item}
                </a>
              ))}
            </nav>
            <a 
              href="#order"
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
              style={{ background: colors.coral, color: colors.cream }}
            >
              ORDER
            </a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: colors.teal }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section 
        className="min-h-screen relative flex items-center pt-20 overflow-hidden"
        style={{ background: colors.cream }}
      >
        {/* Decorative elements */}
        <div className="absolute top-32 right-20 w-24 opacity-60">
          <SmokeWisp />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.teal }}
              >
                Smoked meats,<br/>
                <span style={{ fontStyle: 'italic' }}>boozy slushees,</span><br/>
                rad veggies,<br/>
                chill vibes.
              </h1>
              
              <p 
                className="text-lg mb-8 max-w-md"
                style={{ color: colors.darkText, opacity: 0.7 }}
              >
                Oakfire is Texas-style barbecue meets Asian smokehouse. 
                Come for the brisket, stay for the frozen cocktails and 
                the best damn sides you've ever had.
              </p>
              
              <a 
                href="#menu"
                className="inline-flex items-center gap-2 text-sm font-semibold underline hover:opacity-70 transition-opacity"
                style={{ color: colors.teal }}
              >
                VIEW FULL MENU
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={images.hero}
                  alt="Smoked meat"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corner element */}
              <div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ background: colors.mustard }}
              >
                <Flame size={40} color={colors.cream} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LOW & SLOW ========== */}
      <section className="py-20" style={{ background: colors.warmWhite }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={images.brisket}
                alt="Slow smoked brisket"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm tracking-widest mb-4" style={{ color: colors.coral }}>
                SLOW SMOKED DAILY
              </p>
              <h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.teal }}
              >
                Low & slow<br/>
                <span style={{ fontStyle: 'italic' }}>is the only<br/>way to go.</span>
              </h2>
              <p className="text-lg mb-8" style={{ color: colors.darkText, opacity: 0.7 }}>
                We smoke our meats for 14+ hours over post oak. 
                Each cut is hand-rubbed with our signature spice 
                blend and cooked until it's fall-apart tender.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold underline"
                style={{ color: colors.teal }}
              >
                LEARN ABOUT OUR PROCESS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VEGGIES ========== */}
      <section className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-widest mb-4" style={{ color: colors.coral }}>
                NOT JUST MEAT
              </p>
              <h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.teal }}
              >
                Veggies<br/>
                <span style={{ fontStyle: 'italic' }}>everyone</span><br/>
                will love.
              </h2>
              <p className="text-lg mb-8" style={{ color: colors.darkText, opacity: 0.7 }}>
                Our vegetable sides and mains are anything but an afterthought. 
                Think miso-glazed sweet potatoes, smoked cauliflower 
                with tahini, and charred broccolini that'll make 
                you forget the meat entirely.
              </p>
            </div>

            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={images.veggies}
                alt="Fresh vegetables"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== DRINKS SECTION ========== */}
      <section id="drinks" className="py-20" style={{ background: colors.teal }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest mb-4" style={{ color: colors.coral }}>
              BEVERAGE PROGRAM
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.cream }}
            >
              Grab a drink and let the<br/>good times flow.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Craft Beer', img: images.beer },
              { name: 'Frozen Cocktails', img: images.cocktail },
              { name: 'Whiskey', img: images.whiskey },
              { name: 'Natural Wine', img: images.wine }
            ].map((drink, i) => (
              <div 
                key={i}
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 relative group"
              >
                <img 
                  src={drink.img}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                  <span className="text-sm font-semibold" style={{ color: colors.cream }}>
                    {drink.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LOCATIONS ========== */}
      <section id="locations" className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.teal }}
            >
              Kick back, relax,<br/>
              <span style={{ fontStyle: 'italic' }}>and stay awhile.</span>
            </h2>
            <p className="text-lg" style={{ color: colors.darkText, opacity: 0.7 }}>
              Top-shelf patios, beautiful indoors, and an atmosphere 
              that feels like a backyard BBQ with your coolest friends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { city: 'Austin', address: '2115 South Congress Ave', img: images.austin },
              { city: 'Dallas', address: '1530 Main Street', img: images.dallas }
            ].map((loc, i) => (
              <div 
                key={i}
                className="rounded-3xl overflow-hidden group cursor-pointer"
                style={{ background: colors.teal }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={loc.img}
                    alt={loc.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 
                    className="text-3xl font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: colors.cream }}
                  >
                    {loc.city}
                  </h3>
                  <p style={{ color: colors.cream, opacity: 0.7 }}>{loc.address}</p>
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-semibold"
                    style={{ color: colors.coral }}
                  >
                    VIEW DETAILS
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOUNDERS ========== */}
      <section className="py-20" style={{ background: colors.warmWhite }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 
                className="text-5xl md:text-7xl font-black leading-none mb-8"
                style={{ fontFamily: "'Alfa Slab One', serif", color: colors.teal }}
              >
                AARON<br/>FRANKLIN<br/>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: 'italic' }}>×</span><br/>
                TYSON<br/>COLE
              </h2>
            </div>

            <div>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl mb-8">
                <img 
                  src={images.pitmaster}
                  alt="Our founders"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg mb-6" style={{ color: colors.darkText, opacity: 0.7 }}>
                In 2018, award-winning pitmasters came together to create 
                something new: a place where Texas BBQ traditions meet 
                bold Asian flavors.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold underline"
                style={{ color: colors.teal }}
              >
                READ OUR STORY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL ========== */}
      <section className="py-20 relative" style={{ background: colors.cream }}>
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(${images.patio})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.teal }}
          >
            Best. Guests.<br/>Ever.*
          </h3>
          
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill={colors.mustard} color={colors.mustard} />
            ))}
          </div>

          <blockquote 
            className="text-xl italic mb-6"
            style={{ color: colors.darkText }}
          >
            "This place is what BBQ dreams are made of. The brisket 
            alone is worth the trip, but the frozen margaritas and 
            smoked cauliflower? *Chef's kiss*"
          </blockquote>
          
          <p className="text-sm" style={{ color: colors.darkText, opacity: 0.5 }}>
            — Food & Wine Magazine
          </p>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-20" style={{ background: colors.teal }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.cream }}
          >
            Get the latest
          </h2>
          <p className="mb-8" style={{ color: colors.cream, opacity: 0.7 }}>
            New menu drops, events, and secret menu items. No spam, we promise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-sm outline-none"
              style={{ background: colors.cream, color: colors.darkText }}
            />
            <button 
              className="px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105"
              style={{ background: colors.coral, color: colors.cream }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-16" style={{ background: colors.darkTeal }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <span 
                className="text-2xl font-black tracking-widest"
                style={{ fontFamily: "'Alfa Slab One', serif", color: colors.cream }}
              >
                OAKFIRE
              </span>
              <p className="mt-4 text-sm" style={{ color: colors.cream, opacity: 0.6 }}>
                A smokehouse & bar
              </p>
            </div>

            {[
              { title: 'Locations', links: ['Austin', 'Dallas', 'Coming Soon'] },
              { title: 'Menu', links: ['Food', 'Drinks', 'Catering'] },
              { title: 'Connect', links: ['Instagram', 'Twitter', 'Contact'] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4" style={{ color: colors.cream }}>
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a 
                        href="#"
                        className="text-sm hover:underline"
                        style={{ color: colors.cream, opacity: 0.6 }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div 
            className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: `1px solid ${colors.cream}20` }}
          >
            <p className="text-sm" style={{ color: colors.cream, opacity: 0.5 }}>
              © 2025 Oakfire Smokehouse. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms'].map(link => (
                <a 
                  key={link}
                  href="#"
                  className="text-sm hover:underline"
                  style={{ color: colors.cream, opacity: 0.5 }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
