import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   OAKFIRE BBQ - Menu Page (Loro-inspired)
   Warm cream background, teal accents, detailed menu
   ============================================ */

const colors = {
  cream: '#F5E6D3',
  teal: '#1B4D5C',
  coral: '#E8805C',
  mustard: '#D4A84B',
  warmWhite: '#FAF6F1',
  darkText: '#1A1A1A',
  lightText: '#F5E6D3',
  peach: '#FFDAB3'
};

const images = {
  brisket: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
  ribs: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  pulled: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=600&q=80',
  sausage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
  coleslaw: 'https://images.unsplash.com/photo-1625938145744-533e82abaf95?w=600&q=80',
  beans: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=80',
  cornbread: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
  mac: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600&q=80',
  sandwich: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80',
  wings: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80',
  salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
  pie: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=600&q=80'
};

const menuCategories = [
  {
    name: 'FEATURED',
    items: [
      { name: 'Brisket Plate', desc: 'Oak-smoked for 14 hours, sliced to order', price: 24, img: images.brisket, featured: true },
      { name: 'Fried Rice Bowl', desc: 'Thai basil, vegetables, your choice of meat', price: 18, img: images.pulled, featured: true },
      { name: 'Smoked Wings', desc: 'Crispy, dry-rubbed, served with ranch', price: 14, img: images.wings, featured: true }
    ]
  },
  {
    name: 'SHAREABLES',
    items: [
      { name: 'Smoked Queso & Chips', desc: 'House-smoked brisket, pickled jalapeños', price: 12 },
      { name: 'Crunchy Pork Cracklins', desc: 'Chicharrones with lime & chili salt', price: 8 },
      { name: 'Smoked Salmon Dip', desc: 'Cream cheese, capers, everything crackers', price: 14 },
      { name: 'Loaded Fries', desc: 'Burnt ends, cheese sauce, pickled onions', price: 13 },
      { name: 'Pit Beans', desc: 'Slow-cooked with brisket trimmings', price: 6 }
    ]
  },
  {
    name: 'SALADS',
    items: [
      { name: 'Crunchy Chicken Salad', desc: 'Fried chicken, iceberg, blue cheese, bacon', price: 16, img: images.salad },
      { name: 'Brisket & Peach Salad', desc: 'Arugula, grilled peaches, goat cheese', price: 18 },
      { name: 'House Side Salad', desc: 'Mixed greens, tomato, cucumber, ranch', price: 7 }
    ]
  },
  {
    name: 'RICE BOWLS',
    items: [
      { name: 'Brisket Fried Rice', desc: 'Thai basil, egg, crispy garlic', price: 19 },
      { name: 'Malaysian Coconut Chicken', desc: 'Turmeric rice, sambal, fried shallots', price: 17 },
      { name: 'Smoked Pork Belly Bowl', desc: 'Jasmine rice, pickled vegetables, gochujang', price: 18 }
    ]
  },
  {
    name: 'SANDWICHES',
    items: [
      { name: 'Oak-Smoked Beef Sandwich', desc: 'Sliced brisket, pickles, onion, white bread', price: 16, img: images.sandwich },
      { name: 'Chopped Brisket Sandwich', desc: 'Hand-chopped, house sauce, slaw', price: 15 },
      { name: 'Pulled Pork Sandwich', desc: 'Carolina gold, pickles, brioche bun', price: 14 },
      { name: "Loro Club Sandwich", desc: 'Turkey, bacon, avocado, chipotle mayo', price: 16 }
    ]
  },
  {
    name: 'BY THE POUND',
    description: 'All meats smoked daily. Limited quantities.',
    items: [
      { name: 'Prime Brisket', desc: 'Oak-smoked 14+ hours', price: 28, unit: '/lb', highlight: true },
      { name: 'Smoked Beef Ribs', desc: 'The showstopper. 3 bones per order.', price: 32, unit: '/3 ribs' },
      { name: 'St. Louis Pork Ribs', desc: 'Sweet & spicy glaze', price: 22, unit: '/half rack' },
      { name: 'Smoked Turkey Breast', desc: 'Herb-brined, sliced', price: 18, unit: '/lb' },
      { name: 'Jalapeño Cheddar Sausage', desc: 'House-made links', price: 8, unit: '/link' }
    ]
  },
  {
    name: 'SIDES',
    items: [
      { name: 'Smashed Potatoes', desc: 'Crispy, garlic butter, herbs', price: 6, img: images.mac },
      { name: 'Creamy Coleslaw', desc: 'Classic, tangy, crunchy', price: 5, img: images.coleslaw },
      { name: 'Texas Sweet Corn', desc: 'Grilled, chili lime butter', price: 6 },
      { name: 'Mac & Cheese', desc: 'Three cheese, toasted breadcrumbs', price: 7 },
      { name: 'Collard Greens', desc: 'Slow-cooked with ham hock', price: 6 }
    ]
  },
  {
    name: 'SWEETS',
    items: [
      { name: 'Bourbon Pecan Pie', desc: 'House-made, whipped cream', price: 8, img: images.pie },
      { name: 'Smoked Chocolate Brownie', desc: 'Warm, with vanilla ice cream', price: 9 },
      { name: 'Banana Pudding', desc: 'Vanilla wafers, fresh bananas', price: 7 }
    ]
  }
];

export default function BBQMenu() {
  const [activeCategory, setActiveCategory] = useState('FEATURED');

  return (
    <>
      <TemplateFloatingCTA templateName="Oakfire BBQ" templateSlug="oakfire" />
      <div className="min-h-screen pt-12" style={{ background: colors.cream, fontFamily: "'Lato', sans-serif" }}>
        
        {/* Header */}
        <header className="py-6 px-6 border-b" style={{ borderColor: `${colors.teal}20` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/bbq" className="flex items-center gap-2 hover:opacity-70 transition-opacity" style={{ color: colors.teal }}>
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            
            <Link to="/bbq" className="text-2xl font-black tracking-wider" style={{ fontFamily: "'Oswald', sans-serif", color: colors.teal }}>
              OAKFIRE
            </Link>

            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium" style={{ color: colors.teal }}>Locations</a>
              <button className="p-2 rounded-full" style={{ background: colors.teal }}>
                <ShoppingBag size={18} style={{ color: colors.cream }} />
              </button>
            </div>
          </div>
        </header>

        {/* How To Order */}
        <section className="py-8 px-6 border-b" style={{ borderColor: `${colors.teal}10` }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-12 text-center">
              <div>
                <div className="text-4xl font-black mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: colors.coral }}>1</div>
                <p className="text-sm" style={{ color: colors.teal }}>Come early and<br/>prepare to wait</p>
              </div>
              <div>
                <div className="text-4xl font-black mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: colors.coral }}>2</div>
                <p className="text-sm" style={{ color: colors.teal }}>Order first, pay<br/>at the register</p>
              </div>
              <div>
                <div className="text-4xl font-black mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: colors.coral }}>3</div>
                <p className="text-sm" style={{ color: colors.teal }}>Find a table,<br/>we'll bring it out</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Title */}
        <section className="py-12 px-6 text-center">
          <h1 
            className="text-5xl md:text-6xl font-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
          >
            South Lamar Menu
          </h1>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['DINE IN', 'TO-GO', 'HAPPY HOUR'].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? '' : 'opacity-50'}`}
                style={{ 
                  background: i === 0 ? colors.teal : 'transparent',
                  color: i === 0 ? colors.cream : colors.teal,
                  border: `2px solid ${colors.teal}`
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Menu Categories */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            {menuCategories.map((category, catIdx) => (
              <div key={category.name} className="mb-16">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <h2 
                    className="text-3xl font-black tracking-wider"
                    style={{ fontFamily: "'Oswald', sans-serif", color: colors.teal }}
                  >
                    {category.name}
                  </h2>
                  <div className="flex-1 h-px" style={{ background: `${colors.teal}30` }} />
                </div>
                
                {category.description && (
                  <p className="text-sm mb-6 -mt-4" style={{ color: colors.teal, opacity: 0.7 }}>
                    {category.description}
                  </p>
                )}

                {/* Featured Items with Images */}
                {category.items.some(item => item.featured || item.img) && (
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {category.items.filter(item => item.featured || item.img).slice(0, 4).map((item, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                          <img 
                            src={item.img || images.brisket}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold" style={{ color: colors.darkText }}>{item.name}</h3>
                            <p className="text-sm mt-1" style={{ color: colors.teal, opacity: 0.7 }}>{item.desc}</p>
                          </div>
                          <span className="font-bold" style={{ color: colors.coral }}>${item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Text-only Items */}
                <div className="space-y-4">
                  {category.items.filter(item => !item.featured && !item.img).map((item, i) => (
                    <div 
                      key={i} 
                      className="flex justify-between items-start py-3 border-b"
                      style={{ borderColor: `${colors.teal}15` }}
                    >
                      <div className="flex-1">
                        <h3 
                          className={`font-bold ${item.highlight ? 'text-lg' : ''}`}
                          style={{ color: item.highlight ? colors.coral : colors.darkText }}
                        >
                          {item.name}
                        </h3>
                        <p className="text-sm mt-0.5" style={{ color: colors.teal, opacity: 0.7 }}>{item.desc}</p>
                      </div>
                      <span className="font-bold ml-4" style={{ color: colors.coral }}>
                        ${item.price}{item.unit || ''}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pit Info Banner */}
        <section className="py-12 px-6" style={{ background: colors.peach }}>
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="inline-block px-6 py-3 rounded-full mb-4"
              style={{ background: colors.coral }}
            >
              <span className="font-bold text-white">This pit is lit 24/7</span>
            </div>
            <p style={{ color: colors.teal }}>
              Our oak-fired pits run around the clock. We smoke low and slow because great BBQ can't be rushed.
            </p>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-6" style={{ background: colors.cream }}>
          <div className="max-w-xl mx-auto text-center">
            <h3 
              className="text-2xl font-black mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.teal }}
            >
              Get the latest
            </h3>
            <p className="text-sm mb-6" style={{ color: colors.teal, opacity: 0.7 }}>
              Sign up for specials, new menu items, and events
            </p>
            <div className="flex gap-2">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg outline-none"
                style={{ background: colors.warmWhite, border: `1px solid ${colors.teal}30`, color: colors.darkText }}
              />
              <button 
                className="px-6 py-3 rounded-lg font-bold"
                style={{ background: colors.teal, color: colors.cream }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6" style={{ background: colors.teal }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 
                className="text-4xl font-black tracking-wider"
                style={{ fontFamily: "'Oswald', sans-serif", color: colors.cream }}
              >
                OAKFIRE
              </h2>
              <p className="text-sm mt-2" style={{ color: colors.cream, opacity: 0.7 }}>
                smokehouse & bar
              </p>
            </div>
            <div className="flex justify-center gap-8 text-sm" style={{ color: colors.cream, opacity: 0.7 }}>
              <Link to="/bbq" className="hover:opacity-100">Home</Link>
              <a href="#" className="hover:opacity-100">Locations</a>
              <a href="#" className="hover:opacity-100">Catering</a>
              <a href="#" className="hover:opacity-100">Gift Cards</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

