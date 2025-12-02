import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Phone } from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   OAKFIRE BBQ - About Page (Loro-inspired)
   ============================================ */

const colors = {
  cream: '#F5E6D3',
  teal: '#1B4D5C',
  coral: '#E8805C',
  mustard: '#D4A84B',
  warmWhite: '#FAF6F1',
  peach: '#FFDAB3',
  darkText: '#1A1A1A'
};

const images = {
  chef1: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
  chef2: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  food1: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80',
  food2: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
  food3: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80',
  food4: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
  food5: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
  food6: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
  brisket: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80',
  interior: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  patio: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80'
};

const featuredItems = [
  { name: 'Smoked Brisket', desc: '14-hour oak smoke', img: images.food1 },
  { name: 'Thai Fried Rice', desc: 'With burnt ends', img: images.food2 },
  { name: 'Beef Ribs', desc: 'The showstopper', img: images.food3 }
];

export default function BBQAbout() {
  return (
    <>
      <TemplateFloatingCTA templateName="Oakfire BBQ" templateSlug="oakfire" />
      <div className="min-h-screen pt-12" style={{ background: colors.cream, fontFamily: "'Lato', sans-serif" }}>
        
        {/* Header */}
        <header className="py-6 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/bbq" className="flex items-center gap-2 hover:opacity-70" style={{ color: colors.teal }}>
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <Link to="/bbq" className="text-2xl font-black tracking-wider" style={{ fontFamily: "'Oswald', sans-serif", color: colors.teal }}>
              OAKFIRE
            </Link>
            <Link to="/bbq/menu" className="text-sm font-medium" style={{ color: colors.teal }}>Menu</Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 px-6 text-center" style={{ background: colors.teal }}>
          <div className="max-w-4xl mx-auto">
            {/* Decorative illustration placeholder */}
            <div className="flex justify-center gap-8 mb-8 opacity-30">
              <span className="text-6xl">🦑</span>
              <span className="text-6xl">🌿</span>
              <span className="text-6xl">🦐</span>
            </div>
            
            <h1 
              className="text-4xl md:text-6xl font-black mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.cream }}
            >
              THE FAR EAST
            </h1>
            <p className="text-xl mb-4" style={{ color: colors.coral }}>MEETS</p>
            <h1 
              className="text-4xl md:text-6xl font-black"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.cream }}
            >
              DOWN SOUTH
            </h1>
            
            <div className="flex justify-center gap-12 mt-8 text-sm" style={{ color: colors.cream, opacity: 0.7 }}>
              <span>WOOD-FIRED</span>
              <span>•</span>
              <span>ASIAN-INSPIRED</span>
            </div>
          </div>
        </section>

        {/* Two Chefs */}
        <section className="py-20 px-6" style={{ background: colors.cream }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src={images.chef1} alt="Chef" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 
                  className="text-3xl md:text-4xl font-black mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
                >
                  Two award-winning chefs unite.
                </h2>
                <p className="mb-4" style={{ color: colors.teal, opacity: 0.8 }}>
                  In 2018, James Beard Award winners Aaron Franklin of Franklin 
                  Barbecue and Tyson Cole of Uchi came together to create 
                  something new.
                </p>
                <p style={{ color: colors.teal, opacity: 0.8 }}>
                  The result? A restaurant that marries Texas BBQ traditions with 
                  bold Asian flavors—low and slow meets umami and spice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-20 px-6" style={{ background: colors.warmWhite }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 
                  className="text-3xl md:text-4xl font-black mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
                >
                  About us
                </h2>
                <p className="mb-4" style={{ color: colors.teal, opacity: 0.8 }}>
                  Oakfire is an Asian smokehouse and bar. We combine 
                  wood-fired BBQ traditions with the bold, vibrant flavors 
                  of Southeast Asia.
                </p>
                <p className="mb-4" style={{ color: colors.teal, opacity: 0.8 }}>
                  At our heart is respect for ingredients. Every brisket is 
                  hand-selected, every spice blend made in-house, every dish 
                  crafted with intention.
                </p>
                <p style={{ color: colors.teal, opacity: 0.8 }}>
                  Come as you are. Grab a seat at the bar, find a spot on 
                  the patio, and let us take care of the rest.
                </p>
              </div>
              <div 
                className="p-8 rounded-3xl text-center"
                style={{ background: colors.peach }}
              >
                <h3 
                  className="text-2xl font-black mb-4"
                  style={{ fontFamily: "'Oswald', sans-serif", color: colors.teal }}
                >
                  GRAB A SEAT.<br/>ORDER AT THE BAR.
                </h3>
                <p className="text-6xl">🍺</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Food */}
        <section className="py-20 px-6" style={{ background: colors.cream }}>
          <div className="max-w-6xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
            >
              Our food
            </h2>
            <p className="mb-8 max-w-2xl" style={{ color: colors.teal, opacity: 0.8 }}>
              We infuse the best local meats with the best products. We source only 
              the highest-quality cuts of beef from Texas ranches.
            </p>
            <Link 
              to="/bbq/menu"
              className="inline-block px-6 py-3 rounded-full font-bold mb-12"
              style={{ background: colors.teal, color: colors.cream }}
            >
              See Full Menu
            </Link>

            {/* Food Grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {[images.food1, images.food2, images.food3, images.food4, images.food5, images.food6, images.food1, images.food2].map((img, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-2xl overflow-hidden ${i === 3 ? 'col-span-2 row-span-2' : ''}`}
                >
                  <img src={img} alt="Food" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Low & Slow */}
        <section className="py-20 px-6" style={{ background: colors.warmWhite }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 
                  className="text-3xl md:text-4xl font-black mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
                >
                  Low & slow
                </h2>
                <p className="mb-4" style={{ color: colors.teal, opacity: 0.8 }}>
                  We wake before dawn to feed our oak-fired pits. By the 
                  time you arrive, our briskets have been smoking for 14 
                  hours—developing that deep, mahogany bark and melt-in-
                  your-mouth tenderness.
                </p>
                <p style={{ color: colors.teal, opacity: 0.8 }}>
                  This is BBQ done right. No shortcuts. No compromises. 
                  Just fire, smoke, time, and love.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <img src={images.brisket} alt="Brisket" className="w-full h-full object-cover" />
                </div>
                <div 
                  className="absolute -bottom-4 -right-4 px-6 py-4 rounded-2xl"
                  style={{ background: colors.peach }}
                >
                  <p className="font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: colors.teal }}>
                    This pit<br/>is lit 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Not To Miss */}
        <section className="py-20 px-6" style={{ background: colors.cream }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 
              className="text-3xl md:text-4xl font-black mb-2"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
            >
              What not to miss
            </h2>
            <p className="mb-12 text-sm" style={{ color: colors.teal, opacity: 0.7 }}>
              Our most-loved dishes. Order early—they sell out.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredItems.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-square rounded-3xl overflow-hidden mb-4">
                    <img 
                      src={item.img} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: colors.darkText }}>{item.name}</h3>
                  <p className="text-sm" style={{ color: colors.teal, opacity: 0.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <Link 
              to="/bbq/menu"
              className="inline-block mt-12 px-6 py-3 rounded-full font-bold"
              style={{ background: colors.teal, color: colors.cream }}
            >
              View Full Menu
            </Link>
          </div>
        </section>

        {/* Our Spaces */}
        <section className="py-20 px-6" style={{ background: colors.teal }}>
          <div className="max-w-5xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.cream }}
            >
              Our spaces
            </h2>
            <p className="mb-8 max-w-2xl" style={{ color: colors.cream, opacity: 0.8 }}>
              The design of Oakfire is part of the experience. Warm woods, 
              open kitchens, spacious patios—every detail creates an 
              atmosphere that's relaxed yet refined.
            </p>

            {/* Location Card */}
            <div className="rounded-3xl overflow-hidden" style={{ background: colors.cream }}>
              <div className="aspect-[2/1] md:aspect-[3/1]">
                <img src={images.patio} alt="Location" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 
                  className="text-2xl font-black mb-4"
                  style={{ fontFamily: "'Oswald', sans-serif", color: colors.teal }}
                >
                  AUSTIN
                </h3>
                <div className="flex flex-wrap gap-6 text-sm" style={{ color: colors.teal }}>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>2115 South Lamar Blvd</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>11am - 10pm Daily</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>(512) 555-0123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6" style={{ background: colors.darkText }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 
              className="text-5xl font-black tracking-wider mb-4"
              style={{ fontFamily: "'Oswald', sans-serif", color: colors.cream }}
            >
              OAKFIRE
            </h2>
            <p style={{ color: colors.cream, opacity: 0.5 }}>smokehouse & bar</p>
            <div className="flex justify-center gap-8 mt-8 text-sm" style={{ color: colors.cream, opacity: 0.5 }}>
              <Link to="/bbq" className="hover:opacity-100">Home</Link>
              <Link to="/bbq/menu" className="hover:opacity-100">Menu</Link>
              <a href="#" className="hover:opacity-100">Catering</a>
              <a href="#" className="hover:opacity-100">Gift Cards</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

