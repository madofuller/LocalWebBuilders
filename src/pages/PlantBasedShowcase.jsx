import React, { useState, useEffect } from 'react';
import { 
  Instagram, Facebook, ArrowRight, Menu, X, MapPin, ChevronRight
} from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   BLOOM KITCHEN - Plant-Based Spreads & Sauces
   Soft pastels, organic shapes, botanical
   ============================================ */

const colors = {
  cream: '#FDF8F3',
  sage: '#A8C5A8',
  peach: '#F4A460',
  blue: '#6B8EC2',
  pink: '#E8B4B8',
  yellow: '#F5D76E',
  darkText: '#2D3436',
  lightText: '#636E72'
};

// Stock images
const images = {
  hero: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&q=80',
  spread1: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&q=80',
  spread2: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  recipe1: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80',
  recipe2: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80',
  recipe3: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
  bagel: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=600&q=80',
  toast: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80',
  community: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
};

// Blob shape SVG
const BlobShape = ({ color, className = "" }) => (
  <svg className={className} viewBox="0 0 200 200" fill={color}>
    <path d="M44.7,-76.4C58.8,-69.2,71.8,-58.4,79.6,-44.6C87.4,-30.8,90,-14,87.2,1.6C84.4,17.2,76.2,31.6,66.1,44.2C56,56.8,44,67.6,30.1,74.4C16.2,81.2,0.4,84,-15.8,82.4C-32,80.8,-48.6,74.8,-61.4,64.2C-74.2,53.6,-83.2,38.4,-86.8,22C-90.4,5.6,-88.6,-12,-82.2,-27.2C-75.8,-42.4,-64.8,-55.2,-51.4,-62.8C-38,-70.4,-22.2,-72.8,-6.2,-75.6C9.8,-78.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
  </svg>
);

export default function PlantBasedShowcase() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TemplateFloatingCTA templateName="Bloom Kitchen" templateSlug="bloom" />
      <div className="min-h-screen pt-12" style={{ fontFamily: "'Inter', sans-serif", background: colors.cream }}>
      
      {/* ========== HEADER ========== */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}
        style={{ background: colors.cream }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span 
            className="text-2xl font-light tracking-wider"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
          >
            bloom
          </span>

          <nav className="hidden md:flex items-center gap-8">
            {['Our Mission', 'Our Products', 'Find a Better Palate', 'Contact'].map(item => (
              <a key={item} href="#" className="text-sm hover:opacity-70" style={{ color: colors.darkText }}>
                {item}
              </a>
            ))}
          </nav>

          <a 
            href="#"
            className="px-5 py-2.5 rounded-full text-sm font-medium"
            style={{ background: colors.sage, color: colors.cream }}
          >
            STORE LOCATOR
          </a>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="min-h-screen relative pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.hero} alt="Fresh ingredients" className="w-full h-full object-cover opacity-30" />
        </div>
        
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-64 h-64 opacity-30">
          <BlobShape color={colors.peach} />
        </div>
        <div className="absolute bottom-20 left-0 w-48 h-48 opacity-20">
          <BlobShape color={colors.sage} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
            >
              GROW YOUR<br/>
              <span className="font-bold">PLANT KITCHEN</span>
            </h1>
            <p className="text-lg mb-2" style={{ color: colors.lightText }}>• • • • • • • • • •</p>
            <p 
              className="text-xl mb-10"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.darkText }}
            >
              The future of cooking — today
            </p>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: colors.darkText }}>
            Bloom exists because we felt there needed to be 
            more yummy and planet-friendly food. So we made 
            our creamy spreads and sauces entirely out of plants.
          </p>
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border"
            style={{ borderColor: colors.darkText, color: colors.darkText }}
          >
            ABOUT US
          </a>
        </div>
      </section>

      {/* ========== RECIPES ========== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full" style={{ background: colors.peach, borderRadius: '200px 0 0 200px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[images.recipe1, images.recipe2, images.recipe3, images.bagel].map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src={img} alt={`Recipe ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            
            <div className="text-center lg:text-left">
              <h2 
                className="text-4xl md:text-5xl font-light mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
              >
                INCREDIBLE<br/>
                <span className="font-bold">RECIPES</span>
              </h2>
              <p 
                className="text-lg mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.lightText }}
              >
                that will take you from hello<br/>to heaven and...
              </p>
              <p className="text-sm mb-8" style={{ color: colors.lightText }}>
                Recipes for every mood, every moment, every craving. 
                Inspired by our community.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                style={{ background: colors.darkText, color: colors.cream }}
              >
                CHECK OUT OUR RECIPES
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SPREADY SAUCY ========== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="text-4xl md:text-5xl font-light mb-2"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
          >
            SPREADY, SAUCY
          </h2>
          <p 
            className="text-2xl mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.blue }}
          >
            — and non-dairy!
          </p>
          <p className="text-sm max-w-xl mx-auto" style={{ color: colors.lightText }}>
            To make Bloom, first we take some organic, Fair-trade 
            coconuts. Then, we turn them into rich and lush cultured, 
            tangy, all-work-with-you-on-this guilt-easy, cultured 
            cream cheese. Yum!
          </p>
        </div>
      </section>

      {/* ========== PRODUCTS ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Spreads */}
            <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: colors.sage }}>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 opacity-20">
                <BlobShape color={colors.cream} />
              </div>
              <div className="relative z-10">
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.cream }}
                >
                  BLOOM<br/>SPREADS
                </h3>
                <p className="mb-6" style={{ color: colors.cream, opacity: 0.9 }}>
                  Creamy plant-based spreads that'll make 
                  you forget about dairy. Perfect on bagels, 
                  toast, or straight from the jar.
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                  style={{ background: colors.cream, color: colors.sage }}
                >
                  SPREAD THE LOVE
                </a>
              </div>
            </div>

            {/* Sauces */}
            <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: colors.yellow }}>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 opacity-20">
                <BlobShape color={colors.cream} />
              </div>
              <div className="relative z-10">
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
                >
                  BLOOM<br/>SAUCES
                </h3>
                <p className="mb-6" style={{ color: colors.darkText, opacity: 0.8 }}>
                  Drizzle-worthy goodness. Our plant 
                  sauces take any dish from meh to 
                  magnificent.
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                  style={{ background: colors.darkText, color: colors.yellow }}
                >
                  GET SAUCY
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COMMUNITY ========== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full" style={{ background: colors.sage, borderRadius: '0 200px 200px 0' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 
                className="text-4xl md:text-5xl font-light mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
              >
                YOU ARE<br/>
                <span className="font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Bloom</span>
              </h2>
              <p className="text-sm mb-8" style={{ color: colors.lightText }}>
                There's plenty of room in our Plant Kitchen, come and cook 
                with us. Our community is great for recipes and ideas, and 
                you can share your creations too.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                style={{ background: colors.pink, color: colors.cream }}
              >
                DISCOVER
              </a>
            </div>
            
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img src={images.community} alt="Community" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINDER & FAQ ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl p-8 text-center" style={{ background: colors.cream, border: `2px solid ${colors.sage}` }}>
              <MapPin size={32} className="mx-auto mb-4" style={{ color: colors.sage }} />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}>
                BLOOM FINDER
              </h3>
              <p className="text-sm mb-6" style={{ color: colors.lightText }}>
                We'd love to bring out to retailer shops. Our way 
                being to connect them from everywhere—but alas, 
                our distribution is not there just yet.
              </p>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border" style={{ borderColor: colors.darkText, color: colors.darkText }}>
                FIND BLOOM
              </a>
            </div>

            <div className="rounded-3xl p-8 text-center" style={{ background: colors.peach }}>
              <span className="text-3xl mb-4 block">❓</span>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: colors.cream }}>
                GOT ANY<br/>QUESTIONS?
              </h3>
              <p className="text-sm mb-6" style={{ color: colors.cream, opacity: 0.9 }}>
                Wanna know more about the product range? We've 
                done the most common all these questions. 
                Check out our FAQs.
              </p>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: colors.cream, color: colors.peach }}>
                READ OUR ANSWERS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-20" style={{ background: colors.sage }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm px-4 py-2 rounded-full inline-block mb-6" style={{ background: colors.cream, color: colors.sage }}>
            Non-dairy diary
          </span>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.cream }}
          >
            YOU PROBABLY DON'T WANT<br/>ANOTHER NEWSLETTER IN YOUR<br/>MAILBOX.
          </h2>
          <p className="mb-8" style={{ color: colors.cream, opacity: 0.9 }}>
            Just kidding—you'll only get our fantastic news!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <select className="px-4 py-3 rounded-full text-sm" style={{ background: colors.cream }}>
              <option>REGION</option>
            </select>
            <input type="email" placeholder="EMAIL" className="flex-1 px-6 py-3 rounded-full text-sm" style={{ background: colors.cream }} />
            <button className="px-6 py-3 rounded-full text-sm font-medium" style={{ background: colors.yellow, color: colors.darkText }}>
              SUBMIT
            </button>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-12" style={{ background: colors.cream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}>
                bloom
              </span>
            </div>
            {[
              { title: 'Menu', links: ['Our Mission', 'Our Products', 'For a Better World', 'Careers', 'Blog'] },
              { title: 'Store Locator', links: ['Find Bloom in your', 'favorite grocery store'] },
              { title: 'Contact Bloom', links: ['Do you have a question?', 'Send it here.'] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4" style={{ color: colors.darkText }}>{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm hover:underline" style={{ color: colors.lightText }}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 pt-8" style={{ borderTop: `1px solid ${colors.sage}30` }}>
            {[Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: colors.sage }}>
                <Icon size={18} color={colors.cream} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

