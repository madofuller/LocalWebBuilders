import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Clock, Star, ChevronRight, Instagram, 
  Facebook, ArrowRight, Smartphone, Menu, X
} from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   SOLARA - Mediterranean Restaurant Showcase
   A perfect demo website for client presentations
   ============================================ */

const colors = {
  cream: '#F5E6D3',
  lightCream: '#FFF8E7',
  terracotta: '#E85D3B',
  golden: '#F4B942',
  warmBrown: '#8B4513',
  darkBrown: '#4A2C1C',
  mediumBrown: '#6B4423',
  white: '#FFFFFF',
  olive: '#6B7B3C'
};

// Stock image URLs from Unsplash
const images = {
  hero: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  shawarma: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80',
  salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
  lemon: 'https://images.unsplash.com/photo-1590502593747-42a996133562?w=600&q=80',
  dishes: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  drinks: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80',
  platter: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80',
  mezze: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&q=80',
  lamb: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80',
  interior: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  chef: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
  food1: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=400&q=80',
  food2: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  food3: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
  food4: 'https://images.unsplash.com/photo-1482049016gy-c6a48d54d5cb?w=400&q=80',
  food5: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&q=80',
  food6: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80',
  food7: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&q=80',
  food8: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&q=80',
};

// Sunburst SVG Pattern
const SunburstPattern = ({ className = "", opacity = 0.12 }) => (
  <svg className={`absolute pointer-events-none ${className}`} viewBox="0 0 400 400" fill="none">
    {[...Array(24)].map((_, i) => (
      <line
        key={i}
        x1="200" y1="200"
        x2={200 + 200 * Math.cos((i * 15 * Math.PI) / 180)}
        y2={200 + 200 * Math.sin((i * 15 * Math.PI) / 180)}
        stroke={colors.golden}
        strokeWidth="1"
        opacity={opacity}
      />
    ))}
  </svg>
);

// Decorative sunburst element
const SunburstDeco = ({ size = 120, color = colors.golden }) => (
  <svg width={size} height={size/2} viewBox="0 0 120 60" className="mx-auto">
    {[...Array(9)].map((_, i) => (
      <line
        key={i}
        x1="60" y1="60"
        x2={60 + 55 * Math.cos(((180 + i * 22.5) * Math.PI) / 180)}
        y2={60 + 55 * Math.sin(((180 + i * 22.5) * Math.PI) / 180)}
        stroke={color}
        strokeWidth="2"
      />
    ))}
  </svg>
);

export default function CalaShowcase() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TemplateFloatingCTA templateName="Solara Mediterranean" templateSlug="solara" />
      <div className="min-h-screen pt-12" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* ========== STICKY HEADER ========== */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 shadow-lg' : 'py-5'
        }`}
        style={{ 
          background: isScrolled ? colors.cream : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/mediterranean/menu"
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
              style={{ color: colors.darkBrown }}
            >
              MENU
            </Link>
            <a 
              href="#locations"
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
              style={{ color: colors.darkBrown }}
            >
              LOCATIONS
            </a>
            <a 
              href="#about"
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
              style={{ color: colors.darkBrown }}
            >
              ABOUT
            </a>
          </nav>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: colors.terracotta }}
            >
              <span className="text-white text-lg">☀</span>
            </div>
            <span 
              className="text-3xl font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.darkBrown }}
            >
              Solara
            </span>
          </div>

          {/* Right Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Catering', 'Gift Cards'].map(item => (
              <a 
                key={item}
                href="#"
                className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                style={{ color: colors.darkBrown }}
              >
                {item.toUpperCase()}
              </a>
            ))}
            <a 
              href="#order"
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
              style={{ background: colors.terracotta, color: colors.white }}
            >
              ORDER NOW
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: colors.darkBrown }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 py-6 px-6 shadow-lg"
            style={{ background: colors.cream }}
          >
            {['Menu', 'Locations', 'About', 'Catering', 'Gift Cards'].map(item => (
              <a 
                key={item}
                href="#"
                className="block py-3 text-lg font-medium border-b"
                style={{ color: colors.darkBrown, borderColor: colors.warmBrown + '20' }}
              >
                {item}
              </a>
            ))}
            <a 
              href="#"
              className="block mt-4 py-3 text-center rounded-full font-semibold"
              style={{ background: colors.terracotta, color: colors.white }}
            >
              ORDER NOW
            </a>
          </div>
        )}
      </header>

      {/* ========== HERO SECTION ========== */}
      <section 
        className="min-h-screen relative flex items-center overflow-hidden pt-20"
        style={{ background: colors.cream }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <SunburstPattern className="w-full h-full" opacity={0.08} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="text-center lg:text-left">
              <SunburstDeco />
              
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold mt-8 mb-6 leading-none"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.darkBrown }}
              >
                Sunny Food.<br/>
                <span style={{ color: colors.terracotta }}>Golden Mood.</span>
              </h1>
              
              <p 
                className="text-xl md:text-2xl mb-10 max-w-lg mx-auto lg:mx-0"
                style={{ color: colors.mediumBrown, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
              >
                Mediterranean cuisine made with love, served with sunshine
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#menu"
                  className="px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
                  style={{ background: colors.terracotta, color: colors.white }}
                >
                  View Our Menu
                  <ChevronRight size={20} />
                </a>
                <a 
                  href="#locations"
                  className="px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 border-2 inline-flex items-center justify-center gap-2"
                  style={{ borderColor: colors.terracotta, color: colors.terracotta, background: 'transparent' }}
                >
                  Find a Location
                </a>
              </div>
            </div>

            {/* Right - Hero Visual Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main large card */}
                <div className="col-span-2 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={images.hero}
                    alt="Mediterranean feast"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Smaller cards */}
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src={images.salad}
                    alt="Fresh salad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src={images.lemon}
                    alt="Fresh ingredients"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TAGLINE BANNER ========== */}
      <section 
        className="py-16 text-center relative overflow-hidden"
        style={{ background: colors.lightCream }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.darkBrown }}
          >
            Mediterranean Food.<br/>Universal Comfort.
          </h2>
        </div>
      </section>

      {/* ========== CATEGORY CARDS ========== */}
      <section 
        className="py-20 relative"
        style={{ background: colors.cream }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Our Dishes', subtitle: 'Fresh & Flavorful', img: images.dishes },
              { title: 'Drinks & Desserts', subtitle: 'Sweet Endings', img: images.drinks }
            ].map((card, i) => (
              <div 
                key={i}
                className="relative rounded-3xl overflow-hidden min-h-[300px] cursor-pointer group"
              >
                <img 
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <p className="text-white/70 text-sm mb-1">{card.subtitle}</p>
                  <h3 
                    className="text-3xl md:text-4xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROMISE SECTION ========== */}
      <section 
        className="py-20 text-center"
        style={{ background: colors.lightCream }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <span className="text-4xl">☀️</span>
          </div>
          <p 
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide"
            style={{ color: colors.darkBrown, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }}
          >
            FRESH INGREDIENTS TO MAKE YOUR MOUTH WATER,<br/>
            A SMILE ON YOUR FACE AND<br/>
            SUNSHINE ON YOUR LUNCH BREAK
          </p>
        </div>
      </section>

      {/* ========== APP SECTION ========== */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{ background: colors.golden }}
      >
        <div className="absolute inset-0">
          <SunburstPattern className="w-full h-full" opacity={0.15} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.darkBrown }}
              >
                Our Mobile App
              </h2>
              <div 
                className="space-y-4 text-lg"
                style={{ color: colors.darkBrown }}
              >
                <p>
                  Short on time during your lunch break? 
                  Order directly from the Solara mobile app 15 minutes 
                  before your meal and pick up your order 
                  without waiting.
                </p>
                <p>
                  <strong>The bonus?</strong> Get an exclusive 
                  30% off your first order through the app.
                </p>
              </div>
              
              <a 
                href="#"
                className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105"
                style={{ background: colors.darkBrown, color: colors.cream }}
              >
                <Smartphone size={20} />
                Download the App
              </a>
            </div>

            {/* Right - Phone Mockup */}
            <div className="flex justify-center">
              <div 
                className="w-64 h-[500px] rounded-[3rem] p-3 shadow-2xl"
                style={{ background: colors.darkBrown }}
              >
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={images.platter}
                    alt="App preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MENU HIGHLIGHTS ========== */}
      <section 
        id="menu"
        className="py-20"
        style={{ background: colors.lightCream }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SunburstDeco color={colors.terracotta} />
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.darkBrown }}
            >
              Featured Dishes
            </h2>
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Shawarma Plate', desc: 'Marinated chicken, fragrant rice, house sauce, grilled vegetables', price: '$14.90', img: images.shawarma },
              { name: 'Mezze Platter', desc: 'Mediterranean assortment, hummus, falafel, tabbouleh, warm pita', price: '$16.90', img: images.mezze },
              { name: 'Lamb Kofta', desc: 'Grilled lamb skewers, tzatziki, Mediterranean salad, rice pilaf', price: '$18.90', img: images.lamb }
            ].map((item, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-lg transition-transform group-hover:scale-110">
                  <img 
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: colors.darkBrown }}
                >
                  {item.name}
                </h3>
                <p className="text-sm mb-3" style={{ color: colors.mediumBrown }}>
                  {item.desc}
                </p>
                <p 
                  className="text-xl font-bold"
                  style={{ color: colors.terracotta }}
                >
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 border-2"
              style={{ borderColor: colors.darkBrown, color: colors.darkBrown }}
            >
              View Full Menu
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ========== LOCATIONS ========== */}
      <section 
        id="locations"
        className="py-20"
        style={{ background: colors.cream }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Card 1 */}
            <div 
              className="rounded-3xl overflow-hidden"
              style={{ background: colors.lightCream, border: `2px solid ${colors.warmBrown}20` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={images.interior}
                  alt="Restaurant interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 
                  className="text-2xl font-bold mb-2 flex items-center gap-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.darkBrown }}
                >
                  Our Locations 📍
                </h3>
                <p className="mb-6" style={{ color: colors.mediumBrown }}>
                  We currently have 4 locations across the city. We hope 
                  to see you soon at one of our Solara restaurants.
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105"
                  style={{ background: colors.darkBrown, color: colors.cream }}
                >
                  Find a Location
                </a>
              </div>
            </div>

            {/* Location Card 2 */}
            <div 
              className="rounded-3xl p-8 md:p-10 flex flex-col justify-center"
              style={{ background: colors.golden }}
            >
              <h3 
                className="text-2xl font-bold mb-2 flex items-center gap-2"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.darkBrown }}
              >
                Get It Delivered 🚴
              </h3>
              <p className="mb-6" style={{ color: colors.darkBrown }}>
                Want to stay home? Our meals are 
                available on delivery platforms (Uber Eats, DoorDash).
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105 self-start"
                style={{ background: colors.darkBrown, color: colors.cream }}
              >
                Order Delivery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INSTAGRAM FEED ========== */}
      <section 
        className="py-20"
        style={{ background: colors.lightCream }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: colors.terracotta }}
              >
                <span className="text-white text-xl">☀</span>
              </div>
              <div>
                <p className="font-bold" style={{ color: colors.darkBrown }}>Solara</p>
                <p className="text-sm" style={{ color: colors.mediumBrown }}>@eatsolara</p>
              </div>
            </div>
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: colors.terracotta, color: colors.white }}
            >
              <Instagram size={16} />
              Follow
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[images.food1, images.food2, images.food3, images.food5, images.food6, images.food7, images.food8, images.platter].map((img, i) => (
              <div 
                key={i}
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 group"
              >
                <img 
                  src={img}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{ background: colors.terracotta }}
      >
        <div className="absolute inset-0">
          <SunburstPattern className="w-full h-full" opacity={0.1} />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p 
            className="text-xl mb-4 tracking-widest"
            style={{ color: colors.cream, opacity: 0.8 }}
          >
            SOLARA
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Arrive hungry,<br/>
            <span style={{ color: colors.golden }}>leave smiling!</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a 
              href="#"
              className="px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg"
              style={{ background: colors.cream, color: colors.terracotta }}
            >
              Reserve a Table
            </a>
            <a 
              href="#"
              className="px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 border-2"
              style={{ borderColor: colors.cream, color: colors.cream }}
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer 
        className="py-16"
        style={{ background: colors.darkBrown }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Section */}
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Logo & Social */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: colors.terracotta }}
                >
                  <span className="text-white text-lg">☀</span>
                </div>
                <span 
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.cream }}
                >
                  Solara
                </span>
              </div>
              <p className="text-sm mb-6" style={{ color: colors.cream, opacity: 0.7 }}>
                Sunny Food, Golden Mood.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ background: colors.terracotta }}
                  >
                    <Icon size={18} color={colors.cream} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: 'Locations', links: ['Downtown', 'Midtown', 'Uptown', 'Westside'] },
              { title: 'Explore', links: ['Menu', 'Locations', 'About Us', 'Catering'] },
              { title: 'Support', links: ['Gift Cards', 'Mobile App', 'Delivery', 'Contact'] }
            ].map((col, i) => (
              <div key={i}>
                <h4 
                  className="font-bold mb-4"
                  style={{ color: colors.cream }}
                >
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a 
                        href="#"
                        className="text-sm hover:underline transition-colors"
                        style={{ color: colors.cream, opacity: 0.7 }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div 
            className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: `1px solid ${colors.cream}20` }}
          >
            <p className="text-sm" style={{ color: colors.cream, opacity: 0.5 }}>
              © 2025 Solara Mediterranean Kitchen. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookies'].map(link => (
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
    </>
  );
}
