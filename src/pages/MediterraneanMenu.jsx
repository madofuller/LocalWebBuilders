import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   SOLARA - Mediterranean Menu Page (Cala-inspired)
   Sunny yellow background, bowl-focused menu
   ============================================ */

const colors = {
  yellow: '#FFD93D',
  lightYellow: '#FFF4B8',
  cream: '#FFF9E6',
  brown: '#5C4033',
  orange: '#E85D3B',
  green: '#4A7C59',
  white: '#FFFFFF'
};

const images = {
  carbonara: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80',
  bolognese: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80',
  pesto: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80',
  shawarma: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80',
  falafel: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=500&q=80',
  hummus: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500&q=80',
  salad1: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80',
  salad2: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80',
  salad3: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80',
  brownie: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&q=80',
  cheesecake: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80',
  tiramisu: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80',
  matcha: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&q=80',
  latte: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
  espresso: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80',
  juice: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&q=80',
  soda: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400&q=80',
  water: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80'
};

const menuSections = [
  {
    name: 'NOS BOWLS',
    subtitle: 'Fresh bowls made to order. Add extra protein +$4',
    items: [
      { name: 'Shawarma Bowl', desc: 'Spiced chicken, rice, pickled onions, tahini, fresh herbs', price: 14, img: images.shawarma, popular: true },
      { name: 'Carbonara Bowl', desc: 'Creamy pasta, crispy pancetta, parmesan, black pepper', price: 13, img: images.carbonara },
      { name: 'Falafel Bowl', desc: 'Crispy falafel, hummus, tabbouleh, pickled turnips', price: 12, img: images.falafel, vegan: true },
      { name: 'Bolognese Bowl', desc: 'Slow-cooked beef ragu, fresh pasta, pecorino', price: 15, img: images.bolognese },
      { name: 'Pesto Chicken', desc: 'Grilled chicken, basil pesto, cherry tomatoes, pine nuts', price: 14, img: images.pesto },
      { name: 'Hummus Plate', desc: 'House hummus, warm pita, olive oil, zaatar', price: 10, img: images.hummus, vegan: true }
    ]
  },
  {
    name: 'NOS SALADES',
    subtitle: 'Fresh, seasonal salads. All dressings house-made.',
    items: [
      { name: 'Greek Salad', desc: 'Cucumber, tomato, olives, feta, oregano vinaigrette', price: 11, img: images.salad1, popular: true },
      { name: 'Fattoush', desc: 'Crispy pita, sumac, fresh vegetables, pomegranate', price: 12, img: images.salad2 },
      { name: 'Halloumi Salad', desc: 'Grilled halloumi, watermelon, mint, balsamic', price: 13, img: images.salad3 },
      { name: 'House Salad', desc: 'Mixed greens, lemon olive oil dressing', price: 8, vegan: true }
    ]
  },
  {
    name: 'NOS DESSERTS',
    subtitle: 'Sweet endings made fresh daily',
    items: [
      { name: 'Chocolate Brownie', desc: 'Warm, gooey, with vanilla ice cream', price: 7, img: images.brownie },
      { name: 'Cheesecake', desc: 'New York style, berry compote', price: 8, img: images.cheesecake },
      { name: 'Tiramisu', desc: 'Classic Italian, espresso-soaked', price: 8, img: images.tiramisu },
      { name: 'Baklava', desc: 'Honey, pistachios, phyllo', price: 6 }
    ]
  },
  {
    name: 'BOISSONS CHAUDES',
    subtitle: 'Hot drinks',
    items: [
      { name: 'Matcha Latte', desc: 'Ceremonial grade, oat milk', price: 5, img: images.matcha },
      { name: 'Chai Latte', desc: 'House-spiced, steamed milk', price: 4.5, img: images.latte },
      { name: 'Espresso', desc: 'Double shot', price: 3, img: images.espresso },
      { name: 'Cappuccino', desc: 'Classic Italian', price: 4 },
      { name: 'Hot Chocolate', desc: 'Rich, dark chocolate', price: 4 }
    ]
  },
  {
    name: 'BOISSONS FRAÎCHES',
    subtitle: 'Cold drinks',
    items: [
      { name: 'Fresh Orange Juice', desc: 'Squeezed to order', price: 5, img: images.juice },
      { name: 'Lemonade', desc: 'House-made, fresh mint', price: 4, img: images.soda },
      { name: 'Sparkling Water', desc: 'San Pellegrino', price: 3, img: images.water },
      { name: 'Iced Coffee', desc: 'Cold brew, oat milk available', price: 4 },
      { name: 'Soft Drinks', desc: 'Coke, Sprite, Fanta', price: 2.5 }
    ]
  }
];

export default function MediterraneanMenu() {
  const [filter, setFilter] = useState('all'); // all, vegan, popular

  return (
    <>
      <TemplateFloatingCTA templateName="Solara Mediterranean" templateSlug="solara" />
      <div className="min-h-screen pt-12" style={{ background: colors.yellow, fontFamily: "'Inter', sans-serif" }}>
        
        {/* Header */}
        <header className="py-4 px-6" style={{ background: colors.yellow }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/mediterranean" className="flex items-center gap-2 hover:opacity-70" style={{ color: colors.brown }}>
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            
            <Link 
              to="/mediterranean"
              className="flex items-center gap-2"
            >
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
              >
                Solara
              </span>
            </Link>

            <button className="p-2 rounded-full" style={{ background: colors.brown }}>
              <ShoppingBag size={18} style={{ color: colors.yellow }} />
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="py-12 px-6 text-center" style={{ background: colors.yellow }}>
          <h1 
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
          >
            Sunny Food.
          </h1>
          <h1 
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
          >
            Golden Mood.
          </h1>
        </section>

        {/* Menu Content */}
        <main className="px-6 pb-20" style={{ background: colors.cream }}>
          <div className="max-w-6xl mx-auto py-12">
            
            {menuSections.map((section, sIdx) => (
              <div key={section.name} className="mb-16">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-2">
                  <h2 
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
                  >
                    {section.name}
                  </h2>
                  {sIdx === 0 && (
                    <div className="flex gap-2">
                      <button 
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${filter === 'vegan' ? 'opacity-100' : 'opacity-50'}`}
                        style={{ background: colors.green, color: colors.white }}
                        onClick={() => setFilter(filter === 'vegan' ? 'all' : 'vegan')}
                      >
                        Vegetarian
                      </button>
                      <button 
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${filter === 'popular' ? 'opacity-100' : 'opacity-50'}`}
                        style={{ background: colors.orange, color: colors.white }}
                        onClick={() => setFilter(filter === 'popular' ? 'all' : 'popular')}
                      >
                        Most Popular
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-sm mb-8" style={{ color: colors.brown, opacity: 0.6 }}>
                  {section.subtitle}
                </p>

                {/* Items Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {section.items
                    .filter(item => {
                      if (filter === 'vegan') return item.vegan;
                      if (filter === 'popular') return item.popular;
                      return true;
                    })
                    .map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                      {item.img && (
                        <div className="aspect-square rounded-2xl overflow-hidden mb-3 relative">
                          <img 
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {item.popular && (
                            <span 
                              className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold"
                              style={{ background: colors.orange, color: colors.white }}
                            >
                              POPULAIRE
                            </span>
                          )}
                          {item.vegan && (
                            <span 
                              className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                              style={{ background: colors.green, color: colors.white }}
                            >
                              <Leaf size={12} /> VEGAN
                            </span>
                          )}
                        </div>
                      )}
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="font-semibold text-sm" style={{ color: colors.brown }}>
                            {item.name}
                            {item.vegan && !item.img && <Leaf size={14} className="inline ml-1" style={{ color: colors.green }} />}
                          </h3>
                          <p className="text-xs mt-1" style={{ color: colors.brown, opacity: 0.6 }}>
                            {item.desc}
                          </p>
                        </div>
                        <span className="font-bold text-sm whitespace-nowrap" style={{ color: colors.orange }}>
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 px-6" style={{ background: colors.yellow }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-2">
                <span 
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
                >
                  Solara
                </span>
              </div>
              
              <div className="flex gap-8 text-sm" style={{ color: colors.brown }}>
                <Link to="/mediterranean" className="hover:opacity-70">Home</Link>
                <a href="#" className="hover:opacity-70">Locations</a>
                <a href="#" className="hover:opacity-70">Catering</a>
                <a href="#" className="hover:opacity-70">Careers</a>
              </div>

              <div className="flex gap-4" style={{ color: colors.brown }}>
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="hover:opacity-70 transition-opacity">
                    <Icon size={20} />
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

