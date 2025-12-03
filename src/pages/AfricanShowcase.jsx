import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, ChevronRight, Instagram, 
  Facebook, ArrowRight, Menu, X, Twitter, ShoppingBag
} from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

/* ============================================
   SAFARI SPICE - African Flavors Brand
   Bold, vibrant, primary colors, energetic
   ============================================ */

const colors = {
  red: '#E63946',
  green: '#2D9E4F',
  yellow: '#FFD23F',
  blue: '#1D3557',
  orange: '#F77F00',
  cream: '#FFF8E8',
  white: '#FFFFFF',
  darkText: '#1A1A1A'
};

// Stock images
const images = {
  hero: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80',
  jollof: 'https://images.unsplash.com/photo-1574653853027-5d209339c167?w=600&q=80',
  spices: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
  stew: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
  peppers: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600&q=80',
  cooking: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  ingredients: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&q=80',
  bowl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
  platter: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  rice: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80',
  meat: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
  snacks: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80',
  recipe1: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80',
  recipe2: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  recipe3: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
};

// Wavy divider shape
const WavyDivider = ({ color, flip = false }) => (
  <svg 
    viewBox="0 0 1200 120" 
    preserveAspectRatio="none" 
    className={`w-full h-20 ${flip ? 'rotate-180' : ''}`}
    style={{ display: 'block' }}
  >
    <path 
      d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" 
      fill={color}
    />
  </svg>
);

function AfricanShowcaseContent() {
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
      <TemplateFloatingCTA templateName="Safari Spice" templateSlug="safari-spice" />
      <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* ========== HEADER ========== */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
        style={{ background: colors.green }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/african/shop"
              className="text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity"
              style={{ color: colors.white }}
            >
              Shop
            </Link>
            <Link 
              to="/african/recipes"
              className="text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity"
              style={{ color: colors.white }}
            >
              Recipes
            </Link>
            <a 
              href="#about"
              className="text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity"
              style={{ color: colors.white }}
            >
              About
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <span 
              className="text-3xl md:text-4xl font-black"
              style={{ fontFamily: "'Fredoka', sans-serif", color: colors.yellow }}
            >
              SAFARI
            </span>
            <span 
              className="text-3xl md:text-4xl font-black"
              style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
            >
              SPICE
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#"
              className="text-sm font-semibold hover:opacity-70 transition-opacity"
              style={{ color: colors.white }}
            >
              Flavor Notes
            </a>
            <div style={{ color: colors.white }}>
              <LanguageToggle style="buttons" />
            </div>
            <Link 
              to="/african/order"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-transform hover:scale-105"
              style={{ background: colors.yellow, color: colors.darkText }}
            >
              <ShoppingBag size={16} />
              {t('orderOnline')}
            </Link>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: colors.white }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section 
        className="min-h-screen relative flex items-center pt-20 overflow-hidden"
        style={{ background: colors.green }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8"
                style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
              >
                AFRICAN<br/>
                FLAVORS<br/>
                <span style={{ color: colors.yellow }}>IN AN INSTANT.</span>
              </h1>
              
              <p 
                className="text-xl mb-10 max-w-md"
                style={{ color: colors.white, opacity: 0.9 }}
              >
                Authentic West African spice blends and sauces. 
                Bold flavors, no shortcuts.
              </p>
              
              <a 
                href="#shop"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
                style={{ background: colors.yellow, color: colors.darkText }}
              >
                Discover Products
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={images.hero}
                  alt="African spices"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TAGLINE ========== */}
      <section 
        className="py-16 text-center"
        style={{ background: colors.cream }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-4xl">✨</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
          >
            Classic Recipes and Fresh<br/>Takes, Made for You
          </h2>
          <p className="mt-4" style={{ color: colors.darkText, opacity: 0.6 }}>
            By our family to yours, for flavorful meals
          </p>
        </div>
      </section>

      {/* ========== PRODUCTS ========== */}
      <section id="shop" className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'JOLLOF', desc: 'Rice Seasoning', img: images.rice, price: '$12', color: colors.red },
              { name: 'SUYA', desc: 'Spice Blend', img: images.meat, price: '$10', color: colors.orange },
              { name: 'JOLLY PUFFS', desc: 'Snack Mix', img: images.snacks, price: '$8', color: colors.yellow }
            ].map((product, i) => (
              <Link 
                key={i}
                to="/african/product"
                className="rounded-3xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] group block"
              >
                <div className="aspect-square overflow-hidden" style={{ background: product.color }}>
                  <img 
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center" style={{ background: colors.white }}>
                  <h3 
                    className="text-2xl font-black mb-1"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: colors.darkText }}
                  >
                    {product.name}
                  </h3>
                  <p style={{ color: colors.darkText, opacity: 0.6 }}>{product.desc}</p>
                  <p 
                    className="text-xl font-bold mt-2"
                    style={{ color: colors.green }}
                  >
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/african/product"
              className="inline-flex items-center gap-2 text-lg font-semibold underline"
              style={{ color: colors.green }}
            >
              Shop All Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== BRAND STORY ========== */}
      <section className="relative">
        <WavyDivider color={colors.red} />
        <div className="py-20" style={{ background: colors.red }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
                style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
              >
                SAFARI SPICE BRINGS<br/>
                <span style={{ color: colors.yellow }}>AFRICAN FLAVORS</span><br/>
                EVERYWHERE
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div 
                className="rounded-3xl p-8 md:p-12"
                style={{ background: colors.orange }}
              >
                <h3 
                  className="text-3xl font-black mb-4"
                  style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
                >
                  FEELING<br/>OMNIVOROUS?
                </h3>
                <p style={{ color: colors.white, opacity: 0.9 }}>
                  Our sauces work with everything—chicken, beef, fish, 
                  tofu, vegetables. One bottle, endless possibilities.
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full font-semibold"
                  style={{ background: colors.white, color: colors.orange }}
                >
                  Shop Sauces
                </a>
              </div>

              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src={images.stew}
                  alt="African stew"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <WavyDivider color={colors.red} flip />
      </section>

      {/* ========== SPICY FEATURE ========== */}
      <section className="py-20" style={{ background: colors.blue }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={images.peppers}
                alt="Spicy peppers"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 
                className="text-4xl md:text-5xl font-black mb-6"
                style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
              >
                SPICY, SMOKY,<br/>
                <span style={{ color: colors.yellow }}>SO-GOOD</span><br/>
                FLAVOR TWO WAYS
              </h2>
              <p className="text-lg mb-8" style={{ color: colors.white, opacity: 0.8 }}>
                A balanced and robust blend of spices. 
                Perfect on proteins, vegetables, or anything 
                that needs a kick.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105"
                style={{ background: colors.yellow, color: colors.darkText }}
              >
                Shop Scotch Bonnet Blends
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== RECIPES ========== */}
      <section id="recipes" className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
            >
              FLAVOR NOTES
            </h2>
            <p style={{ color: colors.darkText, opacity: 0.6 }}>
              Test kitchen updates, recipes and more
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Quick Weekday Supper Jollof', img: images.recipe1, tag: 'RECIPES', color: colors.red },
              { title: 'Homemade Nigerian Chin Chin', img: images.recipe2, tag: 'RECIPES', color: colors.orange },
              { title: 'Spiced Lamb Suya Skewers', img: images.recipe3, tag: 'RECIPES', color: colors.green }
            ].map((recipe, i) => (
              <div 
                key={i}
                className="rounded-3xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] group"
                style={{ background: colors.white }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={recipe.img}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span 
                    className="text-xs font-bold tracking-wider"
                    style={{ color: recipe.color }}
                  >
                    {recipe.tag}
                  </span>
                  <h3 
                    className="text-xl font-bold mt-2"
                    style={{ color: colors.darkText }}
                  >
                    {recipe.title}
                  </h3>
                  <a 
                    href="#"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold"
                    style={{ color: colors.green }}
                  >
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-20" style={{ background: colors.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Keisha Okafor', quote: "This is Nigerian grandma-approved. In taste test with my mum, she couldn't tell the difference. I call that a win!", img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80' },
              { name: 'DiLara', quote: "Safari Spice hit me with a flavor bomb like I've never experienced before. I was blown away at the convenience of joy in a jar.", img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
              { name: 'Chris', quote: "Let's just say that once my friends tried this, I now trust no one around this product at my house 😂", img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' }
            ].map((testimonial, i) => (
              <div 
                key={i}
                className="p-8 rounded-3xl"
                style={{ background: colors.cream }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: colors.darkText }}>{testimonial.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-yellow-500">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ color: colors.darkText, opacity: 0.8 }}>"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRESS ========== */}
      <section className="py-12" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {['Bon Appétit', 'NYTimes', 'VOGUE', 'Eater', 'LA Times'].map((pub, i) => (
              <span 
                key={i}
                className="text-xl md:text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 relative" style={{ background: colors.green }}>
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: `url(${images.ingredients})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
          >
            TAKE YOUR TASTEBUDS<br/>
            <span style={{ color: colors.yellow }}>FOR A TRIP</span>
          </h2>
          <p className="mb-8" style={{ color: colors.white, opacity: 0.8 }}>
            We ship nationwide. Enjoy African flavors anywhere you are.
          </p>
          <a 
            href="#shop"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105"
            style={{ background: colors.yellow, color: colors.darkText }}
          >
            Shop Now
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-16" style={{ background: colors.blue }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span 
                  className="text-2xl font-black"
                  style={{ fontFamily: "'Fredoka', sans-serif", color: colors.yellow }}
                >
                  SAFARI
                </span>
                <span 
                  className="text-2xl font-black"
                  style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
                >
                  SPICE
                </span>
              </div>
              <p className="text-sm mb-6" style={{ color: colors.white, opacity: 0.6 }}>
                African flavors, delivered.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ background: colors.green }}
                  >
                    <Icon size={18} color={colors.white} />
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: 'Shop', links: ['All Products', 'Bundles', 'Gift Sets', 'Merch'] },
              { title: 'Learn', links: ['Recipes', 'About Us', 'Our Story', 'FAQ'] },
              { title: 'Support', links: ['Contact', 'Shipping', 'Returns', 'Wholesale'] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4" style={{ color: colors.white }}>
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a 
                        href="#"
                        className="text-sm hover:underline"
                        style={{ color: colors.white, opacity: 0.6 }}
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
            style={{ borderTop: `1px solid ${colors.white}20` }}
          >
            <p className="text-sm" style={{ color: colors.white, opacity: 0.5 }}>
              © 2025 Safari Spice Co. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms'].map(link => (
                <a 
                  key={link}
                  href="#"
                  className="text-sm hover:underline"
                  style={{ color: colors.white, opacity: 0.5 }}
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

export default function AfricanShowcase() {
  return (
    <LanguageProvider>
      <AfricanShowcaseContent />
    </LanguageProvider>
  );
}
