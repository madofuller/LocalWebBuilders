import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Clock, Star, ChevronRight, Instagram, 
  Facebook, ArrowRight, Menu, X, Flame
} from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import { OrderButtons } from '../components/OnlineOrdering';
import { MapEmbed, LocationCard } from '../components/MapEmbed';

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

// Ordering links configuration - customize per restaurant
const orderingLinks = [
  { platform: 'doordash', url: 'https://doordash.com' },
  { platform: 'ubereats', url: 'https://ubereats.com' },
  { platform: 'direct', url: '#order' },
];

// Location data for maps
const locationData = [
  {
    name: 'Oakfire Austin',
    address: '1234 South Congress Ave, Austin, TX 78704',
    phone: '(512) 555-0123',
    hours: [
      { days: 'Mon-Thu', time: '11am - 9pm' },
      { days: 'Fri-Sat', time: '11am - 10pm' },
      { days: 'Sunday', time: '11am - 8pm' },
    ],
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&q=80',
  },
  {
    name: 'Oakfire Dallas',
    address: '5678 Main Street, Dallas, TX 75201',
    phone: '(214) 555-0456',
    hours: [
      { days: 'Mon-Thu', time: '11am - 9pm' },
      { days: 'Fri-Sat', time: '11am - 10pm' },
      { days: 'Sunday', time: '11am - 8pm' },
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  },
];

// Translated content
const content = {
  heroTitle: {
    en: 'Smoked meats,\nboozy slushees,\nrad veggies,\nchill vibes.',
    es: 'Carnes ahumadas,\nslushees con licor,\nverduras increíbles,\nvibraciones relajadas.',
    fr: 'Viandes fumées,\nslushees alcoolisés,\nlégumes savoureux,\nambiance décontractée.',
  },
  heroDesc: {
    en: 'Oakfire is Texas-style barbecue meets Asian smokehouse. Come for the brisket, stay for the frozen cocktails and the best damn sides you\'ve ever had.',
    es: 'Oakfire es barbacoa texana con toques de ahumado asiático. Ven por el brisket, quédate por los cócteles helados y las mejores guarniciones que hayas probado.',
    fr: 'Oakfire est un barbecue texan qui rencontre le fumoir asiatique. Venez pour le brisket, restez pour les cocktails glacés et les meilleurs accompagnements que vous ayez jamais goûtés.',
  },
  viewMenu: {
    en: 'VIEW FULL MENU',
    es: 'VER MENÚ COMPLETO',
    fr: 'VOIR LE MENU COMPLET',
  },
  locationsTitle: {
    en: 'Kick back, relax,\nand stay awhile.',
    es: 'Relájate, descansa,\ny quédate un rato.',
    fr: 'Détendez-vous,\net restez un moment.',
  },
  locationsDesc: {
    en: 'Top-shelf patios, beautiful indoors, and an atmosphere that feels like a backyard BBQ with your coolest friends.',
    es: 'Terrazas de primera, interiores hermosos y un ambiente que se siente como una barbacoa en el jardín con tus mejores amigos.',
    fr: 'Terrasses haut de gamme, intérieurs magnifiques et une atmosphère de barbecue entre amis.',
  },
  foundersTitle: {
    en: 'JAKE\nTHORNTON\n×\nMARCUS\nREED',
    es: 'JAKE\nTHORNTON\n×\nMARCUS\nREED',
    fr: 'JAKE\nTHORNTON\n×\nMARCUS\nREED',
  },
  foundersDesc: {
    en: 'What happens when a legendary pitmaster teams up with an award-winning chef? Magic. Pure, smoky, delicious magic. Oakfire was born from their shared obsession with fire, flavor, and good times.',
    es: '¿Qué pasa cuando un legendario maestro del ahumado se une con un chef galardonado? Magia. Pura magia ahumada y deliciosa. Oakfire nació de su obsesión compartida por el fuego, el sabor y los buenos momentos.',
    fr: 'Que se passe-t-il quand un légendaire maître du fumoir fait équipe avec un chef primé? De la magie. Pure, fumée, délicieuse magie. Oakfire est né de leur obsession commune pour le feu, la saveur et les bons moments.',
  },
  drinksTitle: {
    en: 'Drinks so good,\nyou\'ll forget about the meat.\n(almost)',
    es: 'Bebidas tan buenas,\nque olvidarás la carne.\n(casi)',
    fr: 'Des boissons si bonnes,\nvous oublierez la viande.\n(presque)',
  },
  drinksDesc: {
    en: 'Our bar program is as serious as our smoker. Fresh-squeezed cocktails, boozy slushees, Texas beers on tap, and a curated wine list.',
    es: 'Nuestro programa de bar es tan serio como nuestro ahumador. Cócteles recién exprimidos, slushees con licor, cervezas texanas de barril y una selección de vinos.',
    fr: 'Notre programme de bar est aussi sérieux que notre fumoir. Cocktails fraîchement pressés, slushees alcoolisés, bières texanes à la pression et une sélection de vins.',
  },
};

function BBQShowcaseContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, tCustom } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TemplateFloatingCTA templateName="Oakfire BBQ" templateSlug="oakfire" />
      <div className="min-h-screen" style={{ fontFamily: "'Lato', sans-serif" }}>
      
      {/* ========== HEADER ========== */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
        style={{ background: colors.cream }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-xs tracking-widest" style={{ color: colors.teal }}>EST. 2018</span>
            <nav className="hidden md:flex items-center gap-6">
              {[
                { label: 'Menu', href: '/bbq/menu' },
                { label: 'About', href: '/bbq/about' },
                { label: 'Locations', href: '#locations' }
              ].map(item => (
                <Link 
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                  style={{ color: colors.teal }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div 
            className="text-2xl md:text-3xl font-black tracking-widest"
            style={{ fontFamily: "'Alfa Slab One', serif", color: colors.teal }}
          >
            OAKFIRE
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                to="/bbq/locations"
                className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                style={{ color: colors.teal }}
              >
                {t('locations')}
              </Link>
              <Link 
                to="/bbq/catering"
                className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                style={{ color: colors.teal }}
              >
                Catering
              </Link>
            </nav>
            {/* Language Toggle */}
            <div className="hidden sm:block" style={{ color: colors.teal }}>
              <LanguageToggle style="buttons" />
            </div>
            <Link 
              to="/bbq/order"
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105 inline-block"
              style={{ background: colors.coral, color: colors.cream }}
            >
              {t('orderOnline').toUpperCase()}
            </Link>
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
                {tCustom(content.heroTitle).split('\n').map((line, i) => (
                  <span key={i}>
                    {i === 1 ? <span style={{ fontStyle: 'italic' }}>{line}</span> : line}
                    {i < 3 && <br/>}
                  </span>
                ))}
              </h1>
              
              <p 
                className="text-lg mb-8 max-w-md"
                style={{ color: colors.darkText, opacity: 0.7 }}
              >
                {tCustom(content.heroDesc)}
              </p>
              
              <Link 
                to="/bbq/menu"
                className="inline-flex items-center gap-2 text-sm font-semibold underline hover:opacity-70 transition-opacity"
                style={{ color: colors.teal }}
              >
                {tCustom(content.viewMenu)}
                <ArrowRight size={16} />
              </Link>
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
              {t('menu').toUpperCase()}
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.cream }}
            >
              {tCustom(content.drinksTitle).split('\n').map((line, i) => (
                <span key={i}>{line}{i < 2 && <br/>}</span>
              ))}
            </h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: colors.cream, opacity: 0.8 }}>
              {tCustom(content.drinksDesc)}
            </p>
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
              {tCustom(content.locationsTitle).split('\n').map((line, i) => (
                <span key={i}>
                  {i === 1 ? <span style={{ fontStyle: 'italic' }}>{line}</span> : line}
                  {i === 0 && <br/>}
                </span>
              ))}
            </h2>
            <p className="text-lg" style={{ color: colors.darkText, opacity: 0.7 }}>
              {tCustom(content.locationsDesc)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locationData.map((loc, i) => (
              <LocationCard
                key={i}
                name={loc.name}
                address={loc.address}
                phone={loc.phone}
                hours={loc.hours}
                image={loc.image}
                accentColor={colors.coral}
              />
            ))}
          </div>
          
          {/* Online Ordering Section */}
          <div className="mt-16 text-center">
            <h3 
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.teal }}
            >
              {t('orderOnline')}
            </h3>
            <OrderButtons 
              links={orderingLinks}
              layout="row"
              size="lg"
              className="justify-center"
            />
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
                JAKE<br/>THORNTON<br/>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: 'italic' }}>×</span><br/>
                MARCUS<br/>REED
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
    </>
  );
}

// Wrap with LanguageProvider
export default function BBQShowcase() {
  return (
    <LanguageProvider>
      <BBQShowcaseContent />
    </LanguageProvider>
  );
}
