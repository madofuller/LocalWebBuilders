import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Filter, Search } from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

const colors = {
  yellow: '#FFD23F',
  green: '#2D9E4F',
  blue: '#1D3557',
  red: '#E63946',
  orange: '#F77F00',
  cream: '#FFF8E8',
  white: '#FFFFFF',
  darkText: '#1A1A1A'
};

const categories = ['All', 'Stews', 'Rice', 'Proteins', 'Sides', 'Sauces', 'Bundles'];

const products = [
  { id: 1, name: 'Ayamase', category: 'Stews', price: 20, img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80', tag: 'Best Seller', color: colors.blue },
  { id: 2, name: 'Efo Riro', category: 'Stews', price: 20, img: 'https://images.unsplash.com/photo-1574653853027-5d209339c167?w=400&q=80', color: colors.red },
  { id: 3, name: 'Egusi', category: 'Stews', price: 22, img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80', color: colors.green },
  { id: 4, name: 'Jollof Rice', category: 'Rice', price: 15, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80', tag: 'Popular', color: colors.orange },
  { id: 5, name: 'Fried Rice', category: 'Rice', price: 15, img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80', color: colors.yellow },
  { id: 6, name: 'Suya Chicken', category: 'Proteins', price: 18, img: 'https://images.unsplash.com/photo-1532636875304-0c89f5a05249?w=400&q=80', color: colors.red },
  { id: 7, name: 'Peppered Goat', category: 'Proteins', price: 24, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80', color: colors.orange },
  { id: 8, name: 'Plantain', category: 'Sides', price: 8, img: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?w=400&q=80', color: colors.yellow },
  { id: 9, name: 'Moi Moi', category: 'Sides', price: 10, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', color: colors.green },
  { id: 10, name: 'Scotch Bonnet Sauce', category: 'Sauces', price: 12, img: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&q=80', tag: 'New', color: colors.red },
  { id: 11, name: 'Suya Spice', category: 'Sauces', price: 10, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80', color: colors.orange },
  { id: 12, name: 'Family Bundle', category: 'Bundles', price: 65, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80', tag: 'Value', color: colors.green }
];

export default function AfricanShop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <TemplateFloatingCTA templateName="Harlem Heat" templateSlug="safari-spice" />
      <div className="min-h-screen pt-12" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* Header */}
        <header className="py-4 px-6 border-b" style={{ background: colors.cream, borderColor: '#eee' }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/african" className="flex items-center gap-2 hover:opacity-70" style={{ color: colors.darkText }}>
              <ArrowLeft size={20} />
            </Link>
            <Link to="/african" className="flex items-center gap-1">
              <span 
                className="text-2xl font-black"
                style={{ fontFamily: "'Fredoka', sans-serif", color: colors.yellow }}
              >
                HARLEM
              </span>
              <span 
                className="text-2xl font-black"
                style={{ fontFamily: "'Fredoka', sans-serif", color: colors.green }}
              >
                HEAT
              </span>
            </Link>
            <button className="relative p-2">
              <ShoppingCart size={22} style={{ color: colors.darkText }} />
              <span 
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold"
                style={{ background: colors.red, color: colors.white }}
              >
                0
              </span>
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="py-12 px-6" style={{ background: colors.green }}>
          <div className="max-w-6xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-6xl font-black mb-4"
              style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
            >
              SHOP ALL
            </h1>
            <p style={{ color: colors.white, opacity: 0.9 }}>
              Authentic African flavors, delivered to your door
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 px-6 border-b" style={{ background: colors.cream, borderColor: '#eee' }}>
          <div className="max-w-6xl mx-auto">
            {/* Search */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" />
                <input 
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full outline-none"
                  style={{ background: colors.white, border: '1px solid #eee' }}
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat ? '' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ 
                    background: activeCategory === cat ? colors.orange : colors.white,
                    color: activeCategory === cat ? colors.white : colors.darkText
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 px-6" style={{ background: colors.cream }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-sm mb-6" style={{ color: colors.darkText, opacity: 0.6 }}>
              {filteredProducts.length} products
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link 
                  key={product.id}
                  to="/african/product"
                  className="group cursor-pointer"
                >
                  <div 
                    className="aspect-square rounded-2xl overflow-hidden mb-3 relative"
                    style={{ background: product.color }}
                  >
                    <img 
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.tag && (
                      <span 
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                        style={{ background: colors.white, color: colors.darkText }}
                      >
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold" style={{ color: colors.darkText }}>{product.name}</h3>
                      <p className="text-sm" style={{ color: colors.darkText, opacity: 0.6 }}>{product.category}</p>
                    </div>
                    <span className="font-bold" style={{ color: colors.green }}>${product.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-6" style={{ background: colors.yellow }}>
          <div className="max-w-xl mx-auto text-center">
            <h2 
              className="text-2xl font-black mb-4"
              style={{ fontFamily: "'Alfa Slab One', serif", color: colors.darkText }}
            >
              JOIN THE SPICE CLUB
            </h2>
            <p className="mb-6" style={{ color: colors.darkText, opacity: 0.7 }}>
              Get 10% off your first order + exclusive recipes
            </p>
            <div className="flex gap-2">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full outline-none"
                style={{ background: colors.white }}
              />
              <button 
                className="px-6 py-3 rounded-full font-bold"
                style={{ background: colors.orange, color: colors.white }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6" style={{ background: colors.green }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 
              className="text-3xl font-black mb-4"
              style={{ fontFamily: "'Alfa Slab One', serif", color: colors.yellow }}
            >
              Harlem Heat
            </h2>
            <div className="flex justify-center gap-8 text-sm" style={{ color: colors.white, opacity: 0.7 }}>
              <Link to="/african" className="hover:opacity-100">Home</Link>
              <Link to="/african/recipes" className="hover:opacity-100">Recipes</Link>
              <Link to="/african/about" className="hover:opacity-100">About</Link>
              <a href="#" className="hover:opacity-100">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

