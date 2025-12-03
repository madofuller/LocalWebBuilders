import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, Facebook, Twitter, ArrowRight, Menu, X, ShoppingCart, Star
} from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

/* ============================================
   PHIL'S PRIME - Gourmet Meats & Sausages
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

function GourmetMeatsShowcaseContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TemplateFloatingCTA templateName="Phil's Prime" templateSlug="phils-prime" />
      <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: colors.cream }}>
      
      {/* ========== HEADER ========== */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-sm' : 'py-4'}`}
        style={{ background: colors.cream }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-6">
            {['Products', 'Our Story'].map(item => (
              <a key={item} href="#" className="text-sm hover:opacity-70" style={{ color: colors.black }}>
                {item}
              </a>
            ))}
          </nav>

          <span 
            className="text-3xl"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.black }}
          >
            Phil's <span className="font-bold not-italic">PRIME</span>
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
        </div>
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
                CALLING ALL<br/>
                <span className="line-through decoration-4">OMNIVORES</span>.
              </h1>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src={images.hero} alt="Gourmet sausage" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== UNITED WE GRILL ========== */}
      <section className="py-20" style={{ background: colors.mint }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "'Fredoka', sans-serif", color: colors.black }}
          >
            UNITED<br/>WE GRILL!
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.black, opacity: 0.8 }}>
            We believe there's room for both meat and 
            vegetables on our plates—and when you unite them 
            with mouthwatering spices, delicious things happen! 
            You might have known us as MeatCraft Foods, but now 
            you can call us Phil's Prime. Welcome!
          </p>
        </div>
      </section>

      {/* ========== ALL IN ONE ========== */}
      <section className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.black }}
            >
              All-in-One Tasty Fun
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'KOREAN BBQ', sub: 'Grass-Fed Beef', img: images.sausage1, color: colors.lavender },
              { name: 'LAO CURRY', sub: 'Grass-Fed Beef', img: images.bbq, color: colors.yellow },
              { name: 'SMOKED CAULI BRAT', sub: 'Chicken Sausage', img: images.sausage2, color: colors.mint }
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
              All in one tasty fun, great alone or on a bun.<br/>
              Try a bite and you'll delight!
            </p>
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold"
              style={{ background: colors.coral, color: colors.white }}
            >
              Our Products
            </a>
          </div>
        </div>
      </section>

      {/* ========== FIND PHIL'S ========== */}
      <section className="py-8" style={{ background: colors.lavender }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span 
              className="text-2xl"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.black }}
            >
              Get Your Phil
            </span>
            <div className="flex items-center gap-8">
              {['good eggs', 'Misfits Market', 'IMPERFECT FOODS', 'WHOLE FOODS'].map((store, i) => (
                <span key={i} className="text-sm font-bold" style={{ color: colors.black, opacity: 0.6 }}>
                  {store}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== MORE IS MORE ========== */}
      <section className="py-20" style={{ background: colors.blue }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-6xl md:text-8xl font-black mb-8"
              style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
            >
              MORE IS MORE
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'More Veggies', desc: 'Veggies as a full third—yup! Eat local.', icon: '🥬' },
              { title: 'More Flavor', desc: 'Spices/herbs that make you say "OH WOW!"', icon: '🌶️' },
              { title: 'More Fun', desc: 'More fuel—good for you AND the planet.', icon: '🎉' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl text-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <span className="text-5xl mb-4 block">{item.icon}</span>
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
              Get cookin' with our recipes
            </h2>
            <a href="#" className="px-6 py-2 rounded-full text-sm font-bold" style={{ background: colors.coral, color: colors.white }}>
              All Recipes
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Weeknight Pasta', img: images.recipe1 },
              { title: 'Grill Berry Burger', img: images.recipe2 },
              { title: 'Sheet-Pan Roast', img: images.recipe3 }
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
            What our customers say
          </h3>
          
          <div className="rounded-3xl p-8" style={{ background: colors.white }}>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={colors.yellow} color={colors.yellow} />
              ))}
            </div>
            <p className="text-xl mb-4" style={{ color: colors.black }}>
              "I tried each one of the sausages you sent me, smothered in 
              sautéed pepper and onions and I love them."
            </p>
            <p className="text-sm" style={{ color: colors.black, opacity: 0.6 }}>— Mike L.</p>
          </div>
        </div>
      </section>

      {/* ========== PRESS ========== */}
      <section className="py-12" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {['Inc.', 'NOSH', 'Forbes', 'SHARK TANK', 'Inc.'].map((pub, i) => (
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
          <p className="text-lg mb-4" style={{ color: colors.black }}>@eatphilsprime</p>
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
                Phil's <span className="font-bold not-italic">PRIME</span>
              </span>
            </div>
            {[
              { title: 'PRODUCTS', links: ['All Products', 'Best Sellers', 'New Arrivals'] },
              { title: 'RECIPES', links: ['Quick Meals', 'Grilling', 'Party Food'] },
              { title: "JOIN PHIL'S WORLD!", links: ['Get our biggest deals', 'on small-batch goodies.'] }
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
