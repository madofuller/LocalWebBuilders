import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Flame } from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

const colors = {
  yellow: '#FFE135',
  black: '#1A1A1A',
  red: '#E63946',
  cream: '#FFF9E6',
  white: '#FFFFFF'
};

const images = {
  classic: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
  double: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80',
  bacon: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80',
  mushroom: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&q=80',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80',
  shake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'
};

const menuSections = [
  {
    name: 'SMASH BURGERS',
    items: [
      { name: 'The Classic', desc: 'Double smash patty, American cheese, pickles, onions, special sauce', price: 9.99, img: images.classic, popular: true },
      { name: 'The Stack', desc: 'Triple patty, triple cheese, lettuce, tomato, mayo', price: 12.99, img: images.double },
      { name: 'Bacon Jam', desc: 'Double patty, bacon jam, cheddar, caramelized onions', price: 11.99, img: images.bacon, popular: true },
      { name: 'Mushroom Swiss', desc: 'Double patty, sauteed mushrooms, Swiss cheese, truffle aioli', price: 11.99, img: images.mushroom },
      { name: 'The Spicy', desc: 'Double patty, pepper jack, jalapenos, chipotle mayo, hot honey', price: 10.99, spicy: true },
      { name: 'BBQ Bacon', desc: 'Double patty, bacon, cheddar, crispy onions, BBQ sauce', price: 11.99 }
    ]
  },
  {
    name: 'CHICKEN',
    items: [
      { name: 'Crispy Chicken', desc: 'Buttermilk fried chicken, pickles, spicy mayo', price: 10.99 },
      { name: 'Nashville Hot', desc: 'Hot chicken, coleslaw, pickles, white bread', price: 11.99, spicy: true },
      { name: 'Grilled Chicken', desc: 'Grilled breast, avocado, bacon, ranch', price: 10.99 }
    ]
  },
  {
    name: 'SIDES',
    items: [
      { name: 'Smash Fries', desc: 'Crispy, seasoned, served with special sauce', price: 4.99, img: images.fries },
      { name: 'Cheese Fries', desc: 'Topped with melted cheese sauce', price: 5.99 },
      { name: 'Bacon Cheese Fries', desc: 'Cheese sauce, bacon bits, green onions', price: 6.99 },
      { name: 'Onion Rings', desc: 'Beer battered, ranch dipping sauce', price: 5.99 },
      { name: 'Side Salad', desc: 'Mixed greens, tomato, cucumber, choice of dressing', price: 4.99 }
    ]
  },
  {
    name: 'SHAKES & DRINKS',
    items: [
      { name: 'Vanilla Shake', desc: 'Hand-spun, real ice cream', price: 5.99, img: images.shake },
      { name: 'Chocolate Shake', desc: 'Rich chocolate, whipped cream', price: 5.99 },
      { name: 'Strawberry Shake', desc: 'Real strawberries, whipped cream', price: 5.99 },
      { name: 'Oreo Shake', desc: 'Cookies and cream', price: 6.99 },
      { name: 'Fountain Drinks', desc: 'Coke, Diet Coke, Sprite, Dr Pepper', price: 2.99 },
      { name: 'Fresh Lemonade', desc: 'Made in-house daily', price: 3.99 }
    ]
  }
];

export default function SmashBurgerMenu() {
  return (
    <>
      <TemplateFloatingCTA templateName="TopStack Burgers" templateSlug="topstack" />
      <div className="min-h-screen pt-12" style={{ background: colors.cream, fontFamily: "'Inter', sans-serif" }}>
        
        {/* Header */}
        <header className="py-4 px-6" style={{ background: colors.yellow }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/smash-burger" className="flex items-center gap-2 hover:opacity-70" style={{ color: colors.black }}>
              <ArrowLeft size={20} />
              <span className="text-sm font-bold">Back</span>
            </Link>
            <Link 
              to="/smash-burger"
              className="text-2xl font-black"
              style={{ fontFamily: "'Archivo Black', sans-serif", color: colors.black }}
            >
              TOPSTACK
            </Link>
            <button className="p-2 rounded-full" style={{ background: colors.black }}>
              <ShoppingBag size={18} style={{ color: colors.yellow }} />
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="py-12 px-6 text-center" style={{ background: colors.yellow }}>
          <h1 
            className="text-5xl md:text-7xl font-black mb-4"
            style={{ fontFamily: "'Archivo Black', sans-serif", color: colors.black }}
          >
            THE MENU
          </h1>
          <p style={{ color: colors.black, opacity: 0.7 }}>
            Smashed thin. Stacked high. Served fast.
          </p>
        </section>

        {/* Menu */}
        <section className="py-12 px-6" style={{ background: colors.cream }}>
          <div className="max-w-5xl mx-auto">
            {menuSections.map((section, sIdx) => (
              <div key={section.name} className="mb-16">
                <h2 
                  className="text-3xl font-black mb-8 pb-4 border-b-4"
                  style={{ fontFamily: "'Archivo Black', sans-serif", color: colors.black, borderColor: colors.yellow }}
                >
                  {section.name}
                </h2>

                {/* Items with images */}
                {section.items.some(item => item.img) && (
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {section.items.filter(item => item.img).map((item, i) => (
                      <div 
                        key={i}
                        className="flex gap-4 p-4 rounded-2xl group cursor-pointer hover:scale-[1.02] transition-transform"
                        style={{ background: colors.white }}
                      >
                        <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h3 className="font-bold text-lg" style={{ color: colors.black }}>
                              {item.name}
                              {item.popular && <span className="ml-2 text-xs px-2 py-0.5 rounded-full" style={{ background: colors.red, color: colors.white }}>HOT</span>}
                              {item.spicy && <Flame size={14} className="inline ml-1" style={{ color: colors.red }} />}
                            </h3>
                            <span className="font-black text-lg" style={{ color: colors.red }}>${item.price}</span>
                          </div>
                          <p className="text-sm mt-1" style={{ color: colors.black, opacity: 0.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Text items */}
                <div className="space-y-4">
                  {section.items.filter(item => !item.img).map((item, i) => (
                    <div 
                      key={i}
                      className="flex justify-between items-start p-4 rounded-xl hover:bg-white transition-colors"
                    >
                      <div>
                        <h3 className="font-bold" style={{ color: colors.black }}>
                          {item.name}
                          {item.spicy && <Flame size={14} className="inline ml-1" style={{ color: colors.red }} />}
                        </h3>
                        <p className="text-sm" style={{ color: colors.black, opacity: 0.6 }}>{item.desc}</p>
                      </div>
                      <span className="font-black" style={{ color: colors.red }}>${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Order CTA */}
        <section className="py-12 px-6" style={{ background: colors.black }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl font-black mb-4"
              style={{ fontFamily: "'Archivo Black', sans-serif", color: colors.yellow }}
            >
              READY TO ORDER?
            </h2>
            <p className="mb-6" style={{ color: colors.white, opacity: 0.7 }}>
              Skip the line. Order online for pickup.
            </p>
            <a 
              href="#"
              className="inline-block px-8 py-4 rounded-full font-black text-lg"
              style={{ background: colors.yellow, color: colors.black }}
            >
              ORDER NOW
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6" style={{ background: colors.yellow }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Archivo Black', sans-serif", color: colors.black }}>
              TOPSTACK
            </h2>
            <div className="flex justify-center gap-8 text-sm font-bold" style={{ color: colors.black, opacity: 0.7 }}>
              <Link to="/smash-burger" className="hover:opacity-100">Home</Link>
              <Link to="/smash-burger/locations" className="hover:opacity-100">Locations</Link>
              <a href="#" className="hover:opacity-100">Careers</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

