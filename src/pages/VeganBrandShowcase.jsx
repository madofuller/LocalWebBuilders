import React, { useState, useEffect } from 'react';
import { 
  Instagram, ArrowRight, Menu, X, ShoppingCart, Leaf
} from 'lucide-react';

/* ============================================
   GOLDEN YEAST - Vegan Nutritional Yeast Brand
   Bold green/yellow/pink, playful, cartoon style
   ============================================ */

const colors = {
  green: '#2D8B4E',
  yellow: '#FFE03D',
  pink: '#E94E8C',
  cream: '#FFF9E8',
  darkGreen: '#1A5C32',
  white: '#FFFFFF',
  darkText: '#1A1A1A'
};

// Stock images
const images = {
  pasta: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
  bowl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
  cooking: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  recipe1: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  recipe2: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80',
  recipe3: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
};

// Marquee component
const Marquee = ({ items, bgColor, textColor }) => (
  <div className="overflow-hidden py-3" style={{ background: bgColor }}>
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items, ...items].map((item, i) => (
        <span key={i} className="mx-8 text-sm font-bold" style={{ color: textColor }}>
          {item} ✦
        </span>
      ))}
    </div>
  </div>
);

export default function VeganBrandShowcase() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* ========== HEADER ========== */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
        style={{ background: colors.green }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span 
            className="text-2xl md:text-3xl font-black"
            style={{ fontFamily: "'Fredoka', sans-serif", color: colors.yellow }}
          >
            GOLDEN YEAST
          </span>

          <nav className="hidden md:flex items-center gap-8">
            {['Shop', 'Recipes', 'About'].map(item => (
              <a key={item} href="#" className="text-sm font-bold hover:opacity-70" style={{ color: colors.white }}>
                {item}
              </a>
            ))}
          </nav>

          <a 
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
            style={{ background: colors.yellow, color: colors.darkGreen }}
          >
            <ShoppingCart size={16} />
            CART (0)
          </a>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="min-h-screen relative pt-20 overflow-hidden" style={{ background: colors.green }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 
                className="text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-8"
                style={{ fontFamily: "'Fredoka', sans-serif", color: colors.yellow }}
              >
                NOOCH
              </h1>
              <p className="text-xl mb-8" style={{ color: colors.white }}>
                The cheesiest vegan seasoning that makes everything better. 
                Sprinkle on pasta, popcorn, salads — literally anything.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg"
                style={{ background: colors.yellow, color: colors.darkGreen }}
              >
                SHOP NOW
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src={images.pasta} alt="Cheesy pasta" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE ========== */}
      <Marquee 
        items={['Natural Ingredients', 'Vegan', 'Dairy Free', 'Gluten Free']} 
        bgColor={colors.yellow}
        textColor={colors.darkGreen}
      />

      {/* ========== PRODUCT: CHEESY ========== */}
      <section className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img src={images.bowl} alt="Cheesy dish" className="w-full h-full object-cover" />
            </div>
            <div className="text-center lg:text-left">
              <h2 
                className="text-6xl md:text-8xl font-black mb-6"
                style={{ fontFamily: "'Fredoka', sans-serif", color: colors.yellow, WebkitTextStroke: `3px ${colors.darkGreen}` }}
              >
                CHEESY
              </h2>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.darkGreen }}>
                + CHEESY IMMATURE NOOCH +
              </h3>
              <p className="text-lg mb-8" style={{ color: colors.darkText, opacity: 0.7 }}>
                Our OG blend. Tastes like parmesan met nutritional yeast 
                and they had a delicious baby.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2"
                style={{ borderColor: colors.darkGreen, color: colors.darkGreen }}
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRODUCT: SMOKY ========== */}
      <section className="py-20" style={{ background: colors.pink }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 
                className="text-6xl md:text-8xl font-black mb-6"
                style={{ fontFamily: "'Fredoka', sans-serif", color: colors.cream }}
              >
                SMOKY
              </h2>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.white }}>
                + SMOKY BACON NOOCH +
              </h3>
              <p className="text-lg mb-8" style={{ color: colors.white, opacity: 0.9 }}>
                All the smoky, savory bacon flavor without the pig. 
                Your BLT will never be the same.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold"
                style={{ background: colors.white, color: colors.pink }}
              >
                SHOP NOW
              </a>
            </div>
            <div className="order-1 lg:order-2 aspect-square rounded-3xl overflow-hidden">
              <img src={images.cooking} alt="Smoky cooking" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== RECIPES MARQUEE ========== */}
      <div className="py-4" style={{ background: colors.cream }}>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {['👀', 'RECIPES', '🍝', 'RECIPES', '👀', 'RECIPES'].map((item, i) => (
            <span key={i} className="text-2xl font-black" style={{ fontFamily: "'Fredoka', sans-serif", color: colors.green }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ========== RECIPES ========== */}
      <section className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Creamy Mac & Cheese', img: images.recipe1 },
              { title: 'Loaded Nachos', img: images.recipe2 },
              { title: 'Cheesy Casserole', img: images.recipe3 }
            ].map((recipe, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={recipe.img} 
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold" style={{ color: colors.darkGreen }}>{recipe.title}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6" style={{ color: colors.darkText, opacity: 0.7 }}>
              With Golden Yeast, there's really no recipe required. But we've worked with 
              awesome creators to give you some ideas to get going.
            </p>
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold"
              style={{ background: colors.green, color: colors.yellow }}
            >
              RECIPES
            </a>
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-20" style={{ background: colors.yellow }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <h2 
              className="text-5xl md:text-6xl font-black"
              style={{ fontFamily: "'Fredoka', sans-serif", color: colors.green }}
            >
              SIGN UP
            </h2>
            <div className="flex-1">
              <p className="text-sm mb-4" style={{ color: colors.darkGreen }}>Subscribe to our emails</p>
              <div className="flex gap-2">
                <input 
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-6 py-4 rounded-full outline-none"
                  style={{ background: colors.white }}
                />
                <button 
                  className="px-8 py-4 rounded-full font-bold"
                  style={{ background: colors.green, color: colors.yellow }}
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-12" style={{ background: colors.green }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a href="#" style={{ color: colors.white }}><Instagram size={20} /></a>
              <span className="text-sm" style={{ color: colors.white, opacity: 0.7 }}>Media Kit</span>
              <span className="text-sm" style={{ color: colors.white, opacity: 0.7 }}>Privacy Policy</span>
            </div>
            <span 
              className="text-2xl font-black"
              style={{ fontFamily: "'Fredoka', sans-serif", color: colors.yellow }}
            >
              GOLDEN YEAST CO
            </span>
            <div className="flex items-center gap-4">
              <Leaf size={20} style={{ color: colors.yellow }} />
              <span className="text-sm" style={{ color: colors.white, opacity: 0.7 }}>100% Plant Based</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

