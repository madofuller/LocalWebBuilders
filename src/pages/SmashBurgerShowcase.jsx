import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, ArrowRight, Menu, X, ShoppingBag, Flame
} from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

/* ============================================
   GRIDDLE HOUSE - Classic American Smash Burgers
   Bold, punchy, no-nonsense burger joint
   ============================================ */

const colors = {
  yellow: '#FFE135',
  black: '#1A1A1A',
  white: '#FFFFFF',
  cream: '#FFF9E8',
  red: '#E63946'
};

// Stock images
const images = {
  hero: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80',
  burger1: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80',
  burger2: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80',
  burger3: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
  shake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
  interior: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80',
  insta1: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&q=80',
  insta2: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&q=80',
  insta3: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&q=80',
  insta4: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=300&q=80',
};

// Jagged edge SVG
const JaggedEdge = ({ color }) => (
  <svg viewBox="0 0 1200 50" preserveAspectRatio="none" className="w-full h-8" style={{ display: 'block' }}>
    <path 
      d="M0,50 L30,0 L60,50 L90,0 L120,50 L150,0 L180,50 L210,0 L240,50 L270,0 L300,50 L330,0 L360,50 L390,0 L420,50 L450,0 L480,50 L510,0 L540,50 L570,0 L600,50 L630,0 L660,50 L690,0 L720,50 L750,0 L780,50 L810,0 L840,50 L870,0 L900,50 L930,0 L960,50 L990,0 L1020,50 L1050,0 L1080,50 L1110,0 L1140,50 L1170,0 L1200,50 L1200,50 L0,50 Z"
      fill={color}
    />
  </svg>
);

// Translated content
const content = {
  heroTitle: {
    en: 'SMASHED FLAT.\nSEARED CRISPY.\nSTACKED HIGH.',
    es: 'APLASTADA.\nDORADA CRUJIENTE.\nAPLILADA ALTO.',
    fr: 'ÉCRASÉ À PLAT.\nGRILLÉ CROUSTILLANT.\nEMPILÉ HAUT.',
  },
  pickup: {
    en: 'PICKUP',
    es: 'RECOGER',
    fr: 'À EMPORTER',
  },
  delivery: {
    en: 'DELIVERY',
    es: 'ENTREGA',
    fr: 'LIVRAISON',
  },
  menuTitle: {
    en: 'THE MENU',
    es: 'EL MENÚ',
    fr: 'LE MENU',
  },
  aboutTitle: {
    en: 'THE GRIDDLE WAY',
    es: 'EL ESTILO GRIDDLE',
    fr: 'LA MÉTHODE GRIDDLE',
  },
  aboutDesc: {
    en: 'Fresh beef balls meet hot steel. The sizzle, the crust, the drip. This is how a burger should be. No freezers, no microwaves, no shortcuts.',
    es: 'Bolas de carne fresca sobre acero caliente. El chisporroteo, la costra, el goteo. Así debería ser una hamburguesa.',
    fr: 'Des boules de bœuf frais sur l\'acier chaud. Le grésillement, la croûte, le jus. C\'est ainsi qu\'un burger devrait être.',
  },
};

function SmashBurgerShowcaseContent() {
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
      <TemplateFloatingCTA templateName="Griddle House Burgers" templateSlug="griddle house" />
      <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: colors.cream }}>
      
      {/* ========== HEADER ========== */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
        style={{ background: colors.cream }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: colors.yellow }}
            >
              <Flame size={22} style={{ color: colors.black }} />
            </div>
            <div className="flex flex-col leading-none">
              <span 
                className="text-xl md:text-2xl font-black tracking-tight"
                style={{ color: colors.black }}
              >
                GRIDDLE
              </span>
              <span 
                className="text-xs md:text-sm font-bold tracking-widest"
                style={{ color: colors.red }}
              >
                HOUSE
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/smash-burger/menu" className="text-sm font-bold hover:opacity-70" style={{ color: colors.black }}>
              MENU
            </Link>
            <a href="#locations" className="text-sm font-bold hover:opacity-70" style={{ color: colors.black }}>
              OUR SPOTS
            </a>
            <a href="#about" className="text-sm font-bold hover:opacity-70" style={{ color: colors.black }}>
              OUR STORY
            </a>
            <div style={{ color: colors.black }}>
              <LanguageToggle style="buttons" />
            </div>
          </nav>

          <Link 
            to="/smash-burger/order"
            className="hidden md:block px-5 py-2.5 font-bold text-sm"
            style={{ background: colors.black, color: colors.yellow }}
          >
            [ {t('orderOnline').toUpperCase()} ]
          </Link>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: colors.black }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 py-6 px-6 shadow-lg z-50"
            style={{ background: colors.cream }}
          >
            <Link 
              to="/smash-burger/menu"
              className="block py-3 text-lg font-bold border-b"
              style={{ color: colors.black, borderColor: colors.black + '20' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              MENU
            </Link>
            <a 
              href="#locations"
              className="block py-3 text-lg font-bold border-b"
              style={{ color: colors.black, borderColor: colors.black + '20' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              OUR SPOTS
            </a>
            <a 
              href="#about"
              className="block py-3 text-lg font-bold border-b"
              style={{ color: colors.black, borderColor: colors.black + '20' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              OUR STORY
            </a>
            <div className="flex items-center justify-between py-3" style={{ color: colors.black }}>
              <span className="font-bold">LANGUAGE:</span>
              <LanguageToggle style="buttons" />
            </div>
            <Link 
              to="/smash-burger/order"
              className="block mt-4 py-3 text-center font-bold"
              style={{ background: colors.black, color: colors.yellow }}
              onClick={() => setMobileMenuOpen(false)}
            >
              [ {t('orderOnline').toUpperCase()} ]
            </Link>
          </div>
        )}
      </header>

      {/* ========== HERO ========== */}
      <section className="min-h-screen relative pt-20" style={{ background: colors.yellow }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
                style={{ fontFamily: "'Arial Black', sans-serif", color: colors.black }}
              >
                {tCustom(content.heroTitle).split('\n').map((line, i) => (
                  <span key={i}>{line}{i < 3 && <br/>}</span>
                ))}
              </h1>
              <div className="flex gap-4">
                <Link to="/smash-burger/order" className="px-6 py-3 font-bold text-sm" style={{ background: colors.black, color: colors.yellow }}>
                  [ {tCustom(content.pickup)} ]
                </Link>
                <Link to="/smash-burger/order" className="px-6 py-3 font-bold text-sm" style={{ background: colors.black, color: colors.yellow }}>
                  [ {tCustom(content.delivery)} ]
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={images.hero}
                alt="Smash burger"
                className="w-full rounded-lg shadow-2xl"
              />
              {/* Floating burger images */}
              <img 
                src={images.burger2}
                alt="Burger"
                className="absolute -top-10 -right-10 w-32 h-32 object-cover rounded-full border-4 border-black shadow-lg hidden lg:block"
              />
              <img 
                src={images.burger3}
                alt="Burger"
                className="absolute -bottom-10 -left-10 w-24 h-24 object-cover rounded-full border-4 border-black shadow-lg hidden lg:block"
              />
            </div>
          </div>
        </div>
        <JaggedEdge color={colors.cream} />
      </section>

      {/* ========== SMASH DESCRIPTION ========== */}
      <section className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-black mb-6"
                style={{ fontFamily: "'Arial Black', sans-serif", color: colors.black }}
              >
                SMASH BURGER :
              </h2>
              <p className="text-lg mb-6" style={{ color: colors.black, opacity: 0.8 }}>
                A beef patty well well well smashed on a screaming hot 
                griddle, 240°C minimum, so it gets crispy on the outside 
                but stays juicy on the inside. In two words: absolute madness.
              </p>
              <p className="text-sm mb-6" style={{ color: colors.black, opacity: 0.6 }}>
                source: the smash pros at Griddle House
              </p>
              <a href="#" className="font-bold text-sm underline" style={{ color: colors.black }}>
                [LEARN MORE →]
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={images.burger1} alt="Burger" className="rounded-lg shadow-lg" />
              <img src={images.fries} alt="Fries" className="rounded-lg shadow-lg" />
              {/* Speech bubble */}
              <div 
                className="col-span-2 p-4 rounded-lg text-center relative"
                style={{ background: colors.black }}
              >
                <span className="font-bold" style={{ color: colors.yellow }}>BUN AT WAR</span>
                <div 
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45"
                  style={{ background: colors.black }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VIEW MENU CTA ========== */}
      <section className="py-16" style={{ background: colors.yellow }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <img src={images.burger2} alt="Burger" className="w-32 h-32 object-cover rounded-full" />
            <h2 
              className="text-4xl md:text-6xl font-black text-center"
              style={{ fontFamily: "'Arial Black', sans-serif", color: colors.black }}
            >
              [VIEW THE MENU]
            </h2>
            <div className="relative">
              <img src={images.burger3} alt="Burger" className="w-32 h-32 object-cover rounded-full" />
              {/* Speech bubble */}
              <div 
                className="absolute -top-8 -right-4 px-3 py-2 rounded-lg text-xs font-bold"
                style={{ background: colors.white, color: colors.black }}
              >
                DON'T CLICK<br/>IF YOU'RE<br/>HUNGRY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INSTAGRAM GRID ========== */}
      <section className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-bold" style={{ color: colors.black }}>[FOLLOW US ON INSTA]</span>
            <Instagram size={20} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[images.insta1, images.insta2, images.insta3, images.insta4].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg">
                <img src={img} alt={`Instagram ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="font-bold" style={{ color: colors.black }}>[@GRIDDLEHOUSE]</span>
          </div>
        </div>
      </section>

      {/* ========== SCROLLING TEXT ========== */}
      <section className="py-8 overflow-hidden" style={{ background: colors.yellow }}>
        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black mx-8" style={{ fontFamily: "'Arial Black', sans-serif", color: colors.black }}>
              SMASH BURGERS
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-8" style={{ background: colors.black }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-bold text-sm" style={{ color: colors.yellow }}>[WE'LL KEEP YOU POSTED]</span>
            <div className="flex gap-2">
              <input 
                type="email"
                placeholder="EMAIL ADDRESS"
                className="px-4 py-2 text-sm"
                style={{ background: colors.cream, color: colors.black }}
              />
              <button className="px-4 py-2 font-bold text-sm" style={{ background: colors.yellow, color: colors.black }}>
                SUBSCRIBE
              </button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="font-bold text-sm" style={{ color: colors.yellow }}>INSTAGRAM</a>
              <a href="#" className="font-bold text-sm" style={{ color: colors.yellow }}>MENU</a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-20" style={{ background: colors.black }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div 
              className="w-16 h-16 rounded-xl flex items-center justify-center"
              style={{ background: colors.yellow }}
            >
              <Flame size={36} style={{ color: colors.black }} />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span 
              className="text-6xl md:text-8xl font-black tracking-tight"
              style={{ color: colors.white }}
            >
              GRIDDLE
            </span>
            <span 
              className="text-2xl md:text-4xl font-bold tracking-[0.3em]"
              style={{ color: colors.yellow }}
            >
              HOUSE
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs" style={{ color: colors.white, opacity: 0.5 }}>
            <span>©2025 Griddle House Burgers</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default function SmashBurgerShowcase() {
  return (
    <LanguageProvider>
      <SmashBurgerShowcaseContent />
    </LanguageProvider>
  );
}
