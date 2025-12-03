import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat, ArrowRight } from 'lucide-react';
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

const recipes = [
  {
    id: 1,
    title: 'Classic Jollof Rice',
    desc: 'The legendary one-pot West African rice dish',
    time: '45 mins',
    servings: 6,
    difficulty: 'Medium',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    color: colors.red,
    featured: true
  },
  {
    id: 2,
    title: 'Ayamase (Designer Stew)',
    desc: 'Smoky green pepper stew with assorted meats',
    time: '60 mins',
    servings: 4,
    difficulty: 'Advanced',
    img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80',
    color: colors.green
  },
  {
    id: 3,
    title: 'Suya Skewers',
    desc: 'Spicy grilled meat with groundnut spice blend',
    time: '30 mins',
    servings: 4,
    difficulty: 'Easy',
    img: 'https://images.unsplash.com/photo-1532636875304-0c89f5a05249?w=600&q=80',
    color: colors.orange
  },
  {
    id: 4,
    title: 'Egusi Soup',
    desc: 'Rich melon seed soup with spinach and stockfish',
    time: '50 mins',
    servings: 6,
    difficulty: 'Medium',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    color: colors.yellow
  },
  {
    id: 5,
    title: 'Fried Plantains',
    desc: 'Sweet, caramelized plantain slices',
    time: '15 mins',
    servings: 4,
    difficulty: 'Easy',
    img: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?w=600&q=80',
    color: colors.orange
  },
  {
    id: 6,
    title: 'Chin Chin',
    desc: 'Crunchy fried dough snacks',
    time: '40 mins',
    servings: 8,
    difficulty: 'Easy',
    img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
    color: colors.yellow
  }
];

const categories = ['All', 'Main Dishes', 'Sides', 'Soups', 'Snacks', 'Drinks'];

export default function AfricanRecipes() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredRecipe = recipes.find(r => r.featured);

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
            <Link to="/african/shop" className="text-sm font-bold" style={{ color: colors.darkText }}>Shop</Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 px-6" style={{ background: colors.orange }}>
          <div className="max-w-6xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-6xl font-black mb-4"
              style={{ fontFamily: "'Fredoka', sans-serif", color: colors.white }}
            >
              RECIPES
            </h1>
            <p className="text-lg" style={{ color: colors.white, opacity: 0.9 }}>
              Learn to cook authentic African dishes at home
            </p>
          </div>
        </section>

        {/* Featured Recipe */}
        {featuredRecipe && (
          <section className="py-12 px-6" style={{ background: colors.cream }}>
            <div className="max-w-6xl mx-auto">
              <div 
                className="grid md:grid-cols-2 gap-8 rounded-3xl overflow-hidden"
                style={{ background: featuredRecipe.color }}
              >
                <div className="aspect-[4/3] md:aspect-auto">
                  <img src={featuredRecipe.img} alt={featuredRecipe.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 self-start"
                    style={{ background: colors.white, color: featuredRecipe.color }}
                  >
                    FEATURED RECIPE
                  </span>
                  <h2 
                    className="text-3xl md:text-4xl font-black mb-4"
                    style={{ fontFamily: "'Alfa Slab One', serif", color: colors.white }}
                  >
                    {featuredRecipe.title}
                  </h2>
                  <p className="mb-6" style={{ color: colors.white, opacity: 0.9 }}>{featuredRecipe.desc}</p>
                  <div className="flex gap-6 mb-6">
                    <div className="flex items-center gap-2" style={{ color: colors.white }}>
                      <Clock size={18} />
                      <span>{featuredRecipe.time}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: colors.white }}>
                      <Users size={18} />
                      <span>{featuredRecipe.servings} servings</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: colors.white }}>
                      <ChefHat size={18} />
                      <span>{featuredRecipe.difficulty}</span>
                    </div>
                  </div>
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold self-start"
                    style={{ background: colors.white, color: featuredRecipe.color }}
                  >
                    View Recipe
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="py-6 px-6" style={{ background: colors.cream }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all`}
                  style={{ 
                    background: activeCategory === cat ? colors.green : colors.white,
                    color: activeCategory === cat ? colors.white : colors.darkText
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Recipes Grid */}
        <section className="py-12 px-6" style={{ background: colors.cream }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.filter(r => !r.featured).map((recipe) => (
                <a 
                  key={recipe.id}
                  href="#"
                  className="group"
                >
                  <div 
                    className="aspect-[4/3] rounded-2xl overflow-hidden mb-4"
                    style={{ background: recipe.color }}
                  >
                    <img 
                      src={recipe.img}
                      alt={recipe.title}
                      className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: colors.darkText }}>{recipe.title}</h3>
                  <p className="text-sm mb-3" style={{ color: colors.darkText, opacity: 0.6 }}>{recipe.desc}</p>
                  <div className="flex gap-4 text-sm" style={{ color: colors.darkText, opacity: 0.5 }}>
                    <span className="flex items-center gap-1"><Clock size={14} /> {recipe.time}</span>
                    <span className="flex items-center gap-1"><ChefHat size={14} /> {recipe.difficulty}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{ background: colors.green }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl font-black mb-4"
              style={{ fontFamily: "'Alfa Slab One', serif", color: colors.yellow }}
            >
              COOK WITH OUR PRODUCTS
            </h2>
            <p className="mb-8" style={{ color: colors.white, opacity: 0.9 }}>
              Make these recipes even easier with our ready-made sauces and spice blends
            </p>
            <Link 
              to="/african/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold"
              style={{ background: colors.yellow, color: colors.darkText }}
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6" style={{ background: colors.yellow }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 
              className="text-3xl font-black mb-4"
              style={{ fontFamily: "'Alfa Slab One', serif", color: colors.green }}
            >
              Harlem Heat
            </h2>
            <div className="flex justify-center gap-8 text-sm" style={{ color: colors.darkText, opacity: 0.7 }}>
              <Link to="/african" className="hover:opacity-100">Home</Link>
              <Link to="/african/shop" className="hover:opacity-100">Shop</Link>
              <Link to="/african/about" className="hover:opacity-100">About</Link>
              <a href="#" className="hover:opacity-100">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

