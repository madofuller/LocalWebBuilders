import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ChevronDown, ChevronLeft, ChevronRight, Minus, Plus, Flame, Zap } from 'lucide-react';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   HARLEM HEAT - Product Detail Page
   Bold colors, vibrant patterns, African cuisine
   ============================================ */

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

const images = {
  product1: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80',
  product2: 'https://images.unsplash.com/photo-1574653853027-5d209339c167?w=800&q=80',
  product3: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
  cooking: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  plated: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
  recipe1: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
  recipe2: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80',
  related1: 'https://images.unsplash.com/photo-1574653853027-5d209339c167?w=400&q=80',
  related2: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80',
  related3: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80'
};

const product = {
  name: 'Ayamase',
  subtitle: 'Designer Stew',
  price: 20,
  rating: 4.8,
  reviews: 47,
  weight: '1.25 lbs',
  description: 'A delicious smoky and spicy stew made from green bell peppers cooked down in palm oil. This dish has the kind of spice that makes you want another spoonful. Ayamase, native to the west of Nigeria, packs a punch and delivers a well-rounded dish experience.',
  tags: ['DAIRY FREE', 'GLUTEN FREE', 'SOY FREE'],
  ingredients: ['Green bell peppers', 'Palm oil', 'Locust beans', 'Scotch bonnets', 'Onions', 'Crayfish', 'Assorted meats'],
  nutritionFacts: {
    calories: 320,
    protein: '18g',
    carbs: '12g',
    fat: '24g'
  }
};

const relatedProducts = [
  { name: 'Efo Riro', price: 20, img: images.related1 },
  { name: 'Egusi', price: 22, img: images.related2 },
  { name: 'Jollof Rice', price: 15, img: images.related3 }
];

const blogPosts = [
  { title: 'Ayamase – The Best Designer Stew', category: 'RECIPES', img: images.recipe1 },
  { title: 'Spicy Herb Potatoes', category: 'RECIPES', img: images.recipe2 }
];

export default function AfricanProduct() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  const productImages = [images.product1, images.product2, images.product3];

  return (
    <>
      <TemplateFloatingCTA templateName="Harlem Heat" templateSlug="safari-spice" />
      <div className="min-h-screen pt-12" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* Header */}
        <header className="py-4 px-6 border-b" style={{ background: colors.cream, borderColor: '#eee' }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/african" className="flex items-center gap-2 hover:opacity-70" style={{ color: colors.darkText }}>
                <ArrowLeft size={20} />
              </Link>
              <nav className="hidden md:flex gap-6 text-sm font-medium" style={{ color: colors.darkText }}>
                <a href="#" className="hover:opacity-70">SHOP</a>
                <a href="#" className="hover:opacity-70">ABOUT</a>
                <a href="#" className="hover:opacity-70">FLAVOR NOTES</a>
              </nav>
            </div>
            
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

            <div className="flex items-center gap-4">
              <a href="#" className="text-sm hidden md:block" style={{ color: colors.darkText }}>Account</a>
              <button className="relative p-2">
                <ShoppingCart size={22} style={{ color: colors.darkText }} />
                <span 
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold"
                  style={{ background: colors.red, color: colors.white }}
                >
                  2
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Product Section */}
        <section style={{ background: colors.blue }}>
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div>
                <div className="aspect-square rounded-3xl overflow-hidden mb-4">
                  <img 
                    src={productImages[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-3">
                  {productImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-white' : 'border-transparent opacity-60'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="text-white">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                  style={{ background: colors.yellow, color: colors.darkText }}
                >
                  STEWS
                </span>

                <div className="flex items-start justify-between mb-4">
                  <h1 
                    className="text-4xl md:text-5xl font-black"
                    style={{ fontFamily: "'Alfa Slab One', serif" }}
                  >
                    {product.name}
                  </h1>
                  <span className="text-3xl font-bold">${product.price}</span>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={colors.yellow} color={colors.yellow} />
                    ))}
                  </div>
                  <span className="text-sm opacity-70">({product.reviews})</span>
                </div>

                <div className="mb-6">
                  <span className="text-sm opacity-70">DESCRIPTION</span>
                  <p className="flex items-center gap-2 mt-1">
                    {product.weight}
                  </p>
                </div>

                <p className="mb-6 leading-relaxed opacity-90">{product.description}</p>

                {/* Tags */}
                <div className="flex gap-2 mb-8">
                  {product.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: colors.orange, color: colors.white }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable Sections */}
                {[
                  { key: 'ingredients', label: 'INGREDIENTS', content: product.ingredients.join(', ') },
                  { key: 'nutrition', label: 'NUTRITION FACTS', content: `Calories: ${product.nutritionFacts.calories} | Protein: ${product.nutritionFacts.protein} | Carbs: ${product.nutritionFacts.carbs} | Fat: ${product.nutritionFacts.fat}` },
                  { key: 'shipping', label: 'SHIPPING ESTIMATE', content: 'Free shipping on orders over $50. Delivered in 2-3 business days.' }
                ].map((section) => (
                  <div key={section.key} className="border-t border-white/20">
                    <button
                      onClick={() => setExpandedSection(expandedSection === section.key ? null : section.key)}
                      className="w-full py-4 flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">{section.label}</span>
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform ${expandedSection === section.key ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expandedSection === section.key && (
                      <p className="pb-4 text-sm opacity-70">{section.content}</p>
                    )}
                  </div>
                ))}

                {/* Add to Cart */}
                <div className="flex gap-4 mt-8">
                  <div className="flex items-center gap-4 px-4 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                      <Minus size={18} />
                    </button>
                    <span className="w-8 text-center font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>
                      <Plus size={18} />
                    </button>
                  </div>
                  <button 
                    className="flex-1 py-4 rounded-full font-bold text-lg"
                    style={{ background: colors.orange, color: colors.white }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chef Notes */}
        <section style={{ background: colors.yellow }}>
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.darkText }}
                >
                  Notes from the Chef
                </h2>
                <p style={{ color: colors.darkText, opacity: 0.8 }}>
                  Best enjoyed with rice, pasta, potatoes and if you're feeling 
                  adventurous, enjoy it as a dip with plantain or tortilla chips.
                </p>
              </div>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img src={images.plated} alt="Plated dish" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Reheating Instructions */}
        <section 
          className="py-16 px-6"
          style={{ 
            background: colors.green,
            clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)'
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square rounded-full overflow-hidden max-w-sm mx-auto">
                <img src={images.cooking} alt="Cooking" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h2 
                  className="text-3xl font-black mb-6"
                  style={{ fontFamily: "'Alfa Slab One', serif" }}
                >
                  PREPARE YOURSELF<br/>(AND YOUR FOOD)
                </h2>
                <p className="mb-6 opacity-80">
                  Please store this product in the fridge or freezer immediately.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Flame size={24} style={{ color: colors.rust }} />
                    <div>
                      <h4 className="font-bold">STOVETOP</h4>
                      <p className="text-sm opacity-70">Heat on medium for 5-7 minutes, stirring occasionally</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Zap size={24} style={{ color: colors.rust }} />
                    <div>
                      <h4 className="font-bold">MICROWAVE</h4>
                      <p className="text-sm opacity-70">Heat for 2-3 minutes, stir halfway through</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-16 px-6" style={{ background: colors.cream }}>
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-2xl font-bold text-center mb-12"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.darkText }}
            >
              Related Blog Posts
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                    style={{ background: colors.green, color: colors.white }}
                  >
                    {post.category}
                  </span>
                  <h3 className="font-semibold flex items-center gap-2" style={{ color: colors.darkText }}>
                    {post.title}
                    <span>→</span>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 px-6" style={{ background: colors.white }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-2xl font-black mb-8"
              style={{ fontFamily: "'Alfa Slab One', serif", color: colors.darkText }}
            >
              REVIEWS
            </h2>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill={colors.yellow} color={colors.yellow} />
              ))}
            </div>
            <p className="text-lg mb-2" style={{ color: colors.darkText }}>4.8 out of 5</p>
            <p className="text-sm opacity-60">Based on {product.reviews} reviews</p>
          </div>
        </section>

        {/* You May Also Like */}
        <section className="py-16 px-6" style={{ background: colors.red }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <button className="p-2 rounded-full bg-white/20">
                <ChevronLeft size={24} color="white" />
              </button>
              <h2 className="text-xl font-black text-white">YOU MAY ALSO LIKE...</h2>
              <button className="p-2 rounded-full bg-white/20">
                <ChevronRight size={24} color="white" />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {relatedProducts.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                    <img 
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-white">{item.name}</h3>
                    <span className="text-white opacity-70">${item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link 
                to="/african"
                className="inline-flex items-center gap-2 text-white font-medium hover:underline"
              >
                Shop All
                <span>〰️</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6" style={{ background: colors.yellow }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="font-bold mb-4" style={{ color: colors.darkText }}>SHOP</h3>
                <ul className="space-y-2 text-sm" style={{ color: colors.darkText, opacity: 0.7 }}>
                  <li><a href="#">Sides</a></li>
                  <li><a href="#">Mains</a></li>
                  <li><a href="#">Soup</a></li>
                  <li><a href="#">Proteins</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4" style={{ color: colors.darkText }}>MENU</h3>
                <ul className="space-y-2 text-sm" style={{ color: colors.darkText, opacity: 0.7 }}>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Account</a></li>
                  <li><a href="#">Flavor Notes</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4" style={{ color: colors.darkText }}>INFO</h3>
                <ul className="space-y-2 text-sm" style={{ color: colors.darkText, opacity: 0.7 }}>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Shipping & Returns</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4" style={{ color: colors.darkText }}>SUBSCRIBE TO OUR NEWSLETTER</h3>
                <input 
                  type="email"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-lg mb-2 text-sm"
                  style={{ background: colors.white, border: 'none' }}
                />
                <input 
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg mb-2 text-sm"
                  style={{ background: colors.white, border: 'none' }}
                />
                <button 
                  className="w-full py-2 rounded-full font-bold text-sm"
                  style={{ background: colors.orange, color: colors.white }}
                >
                  SUBMIT
                </button>
              </div>
            </div>

            {/* Logo */}
            <div className="text-center">
              <h2 
                className="text-6xl font-black"
                style={{ fontFamily: "'Alfa Slab One', serif", color: colors.green }}
              >
                Harlem Heat
              </h2>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

