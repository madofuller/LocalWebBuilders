import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, Facebook, Twitter, ArrowRight, Menu, X, ShoppingCart, Star, Leaf, Flame, Sparkles
} from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

/* ============================================
   BUTCHER & BLOOM - Artisan Meats & Provisions
   Retro pastel blocks, playful typography, fun
   ============================================ */

const colors = {
  mint: '#B8E4D8',
  peach: '#FFCBA4',
  lavender: '#C5B9E8',
  yellow: '#FFE66D',
  coral: '#FF6B6B',
  blue: '#4ECDC4',
  cream: '#FFF9F0',
  black: '#1A1A1A',
  white: '#FFFFFF'
};

// Stock images - all working Unsplash URLs
const images = {
  hero: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=1200&q=80',
  sausage1: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
  sausage2: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
  bbq: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  recipe1: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  recipe2: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
  recipe3: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80',
  grill: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
  platter: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80',
};

// Translated content
const content = {
  heroTitle: {
    en: 'FLAVOR FIRST.\nALWAYS.',
    es: 'SABOR PRIMERO.\nSIEMPRE.',
    fr: 'SAVEUR D\'ABORD.\nTOUJOURS.',
  },
  heroDesc: {
    en: 'Small-batch artisan meats crafted with heritage recipes. Honest ingredients, bold flavors, unforgettable meals.',
    es: 'Carnes artesanales en pequeños lotes elaboradas con recetas tradicionales. Ingredientes honestos, sabores audaces.',
    fr: 'Viandes artisanales en petits lots élaborées avec des recettes traditionnelles. Ingrédients honnêtes, saveurs audacieuses.',
  },
  productsTitle: {
    en: 'Our Craft',
    es: 'Nuestro Arte',
    fr: 'Notre Art',
  },
  storyTitle: {
    en: 'Our Roots',
    es: 'Nuestras Raíces',
    fr: 'Nos Racines',
  },
  storyDesc: {
    en: 'We started in a small shop with one mission: bring back the art of real butchery and honest food.',
    es: 'Empezamos en una pequeña tienda con una misión: traer de vuelta el arte de la carnicería real.',
    fr: 'Nous avons commencé dans une petite boutique avec une mission: ramener l\'art de la vraie boucherie.',
  },
};

function GourmetMeatsShowcaseContent() {
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
      <TemplateFloatingCTA templateName="Butcher & Bloom" templateSlug="butcher-bloom" />
      <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: colors.cream }}>
      
      {/* ========== HEADER ========== */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-sm' : 'py-4'}`}
        style={{ background: colors.cream }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-6">
            {['Shop', 'Our Story'].map(item => (
              <a key={item} href="#" className="text-sm hover:opacity-70" style={{ color: colors.black }}>
                {item}
              </a>
            ))}
          </nav>

          <span 
            className="text-3xl"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.black }}
          >
            Butcher <span className="font-bold not-italic">&</span> BLOOM
          </span>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm hover:opacity-70" style={{ color: colors.black }}>Recipes</a>
            <div style={{ color: colors.black }}>
              <LanguageToggle style="buttons" />
            </div>
            <Link 
              to="/gourmet-meats/order"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: colors.coral, color: colors.white }}
            >
              <ShoppingCart size={16} />
              {t('orderOnline')}
            </Link>
          </div>

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
            <a 
              href="#"
              className="block py-3 text-lg font-medium border-b"
              style={{ color: colors.black, borderColor: colors.coral + '30' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </a>
            <a 
              href="#"
              className="block py-3 text-lg font-medium border-b"
              style={{ color: colors.black, borderColor: colors.coral + '30' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Story
            </a>
            <a 
              href="#"
              className="block py-3 text-lg font-medium border-b"
              style={{ color: colors.black, borderColor: colors.coral + '30' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Recipes
            </a>
            <div className="flex items-center justify-between py-3" style={{ color: colors.black }}>
              <span>Language:</span>
              <LanguageToggle style="buttons" />
            </div>
            <Link 
              to="/gourmet-meats/order"
              className="flex items-center justify-center gap-2 mt-4 py-3 rounded-full font-medium"
              style={{ background: colors.coral, color: colors.white }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingCart size={16} />
              {t('orderOnline')}
            </Link>
          </div>
        )}
      </header>

      {/* ========== HERO ========== */}
      <section className="min-h-screen relative pt-20" style={{ background: colors.peach }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6"
                style={{ fontFamily: "'Fredoka', sans-serif", color: colors.black }}
              >
                {tCustom(content.heroTitle).split('\n').map((line, i) => (
                  <span key={i}>
                    {i === 1 ? <span className="line-through decoration-4">{line.replace('.', '')}</span> : line}
                    {i === 0 && <br/>}
                    {i === 1 && '.'}
                  </span>
                ))}
              </h1>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src={images.hero} alt="Artisan meats" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== MISSION STATEMENT ========== */}
      <section className="py-20" style={{ background: colors.mint }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "'Fredoka', sans-serif", color: colors.black }}
          >
            REAL FOOD.<br/>REAL GOOD.
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.black, opacity: 0.8 }}>
            We believe in food that tells a story. Every cut, every 
            link, every bite comes from farms we know and recipes 
            passed down through generations. No shortcuts, no 
            compromises—just honest food made the right way.
          </p>
        </div>
      </section>

      {/* ========== FEATURED PRODUCTS ========== */}
      <section className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.black }}
            >
              Crafted With Care
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'HICKORY MAPLE', sub: 'Heritage Pork Sausage', img: images.sausage1, color: colors.lavender },
              { name: 'CHIMICHURRI', sub: 'Grass-Fed Beef Link', img: images.bbq, color: colors.yellow },
              { name: 'GARDEN HERB', sub: 'Free-Range Chicken', img: images.sausage2, color: colors.mint }
            ].map((item, i) => (
              <div key={i} className="rounded-3xl overflow-hidden group cursor-pointer" style={{ background: item.color }}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1" style={{ color: colors.black }}>{item.name}</h3>
                  <p className="text-sm" style={{ color: colors.black, opacity: 0.7 }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6" style={{ color: colors.black, opacity: 0.7 }}>
              From breakfast to dinner, we've got you covered.<br/>
              Taste the difference quality makes.
            </p>
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold"
              style={{ background: colors.coral, color: colors.white }}
            >
              Shop All Products
            </a>
          </div>
        </div>
      </section>

      {/* ========== WHERE TO FIND US ========== */}
      <section className="py-8" style={{ background: colors.lavender }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span 
              className="text-2xl"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.black }}
            >
              Find Us Near You
            </span>
            <div className="flex items-center gap-8">
              {['Farmers Markets', 'Local Grocers', 'Online Shop', 'Restaurants'].map((store, i) => (
                <span key={i} className="text-sm font-bold" style={{ color: colors.black, opacity: 0.6 }}>
                  {store}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR PROMISE ========== */}
      <section className="py-20" style={{ background: colors.blue }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-6xl md:text-8xl font-black mb-8"
              style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
            >
              OUR PROMISE
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Local First', desc: 'We source from farms within 100 miles whenever possible.', Icon: Leaf },
              { title: 'No Fillers', desc: 'Just meat, spices, and love. Nothing you can\'t pronounce.', Icon: Flame },
              { title: 'Sustainable', desc: 'Good for you, good for farmers, good for the planet.', Icon: Sparkles }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl text-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <item.Icon size={48} className="mb-4 mx-auto" style={{ color: colors.white }} />
                <h4 
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.white }}
                >
                  {item.title}
                </h4>
                <p className="text-sm" style={{ color: colors.white, opacity: 0.9 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RECIPES ========== */}
      <section className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.black }}
            >
              Cook something amazing
            </h2>
            <a href="#" className="px-6 py-2 rounded-full text-sm font-bold" style={{ background: colors.coral, color: colors.white }}>
              All Recipes
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Sunday Brunch Hash', img: images.recipe1 },
              { title: 'Backyard Cookout', img: images.recipe2 },
              { title: 'One-Pan Wonder', img: images.recipe3 }
            ].map((recipe, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={recipe.img}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 
                  className="text-xl"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.black }}
                >
                  {recipe.title} →
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL ========== */}
      <section className="py-20" style={{ background: colors.peach }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 
            className="text-3xl mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.black }}
          >
            What folks are saying
          </h3>
          
          <div className="rounded-3xl p-8" style={{ background: colors.white }}>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={colors.yellow} color={colors.yellow} />
              ))}
            </div>
            <p className="text-xl mb-4" style={{ color: colors.black }}>
              "Finally, sausages that taste like they should. My kids actually 
              ask for seconds now. This is what real food is supposed to be."
            </p>
            <p className="text-sm" style={{ color: colors.black, opacity: 0.6 }}>— Sarah M., Austin TX</p>
          </div>
        </div>
      </section>

      {/* ========== FEATURED IN ========== */}
      <section className="py-12" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm mb-6" style={{ color: colors.black, opacity: 0.5 }}>AS FEATURED IN</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {['Food & Wine', 'Bon Appetit', 'Eater', 'Local News', 'Texas Monthly'].map((pub, i) => (
              <span 
                key={i}
                className="text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.black }}
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INSTAGRAM ========== */}
      <section className="py-20" style={{ background: colors.mint }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg mb-4" style={{ color: colors.black }}>@butcherandbloom</p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {[images.sausage1, images.bbq, images.recipe1, images.sausage2, images.recipe2, images.recipe3, images.grill, images.hero].map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src={img}
                  alt={`Instagram ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-16" style={{ background: colors.black }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <span 
                className="text-2xl"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.white }}
              >
                Butcher <span className="font-bold not-italic">&</span> BLOOM
              </span>
            </div>
            {[
              { title: 'SHOP', links: ['All Products', 'Best Sellers', 'Gift Boxes'] },
              { title: 'RECIPES', links: ['Quick Meals', 'Grilling', 'Brunch Ideas'] },
              { title: 'STAY IN TOUCH', links: ['Get weekly recipes', 'and exclusive offers.'] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4" style={{ color: colors.white }}>{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm hover:underline" style={{ color: colors.white, opacity: 0.7 }}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 pt-8" style={{ borderTop: `1px solid ${colors.white}20` }}>
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: colors.coral }}>
                <Icon size={18} color={colors.white} />
              </a>
            ))}
          </div>
          <p className="text-center text-sm mt-8" style={{ color: colors.white, opacity: 0.5 }}>
            © 2025 Butcher & Bloom. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default function GourmetMeatsShowcase() {
  return (
    <LanguageProvider>
      <GourmetMeatsShowcaseContent />
    </LanguageProvider>
  );
}
