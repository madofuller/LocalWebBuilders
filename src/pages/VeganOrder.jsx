import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Leaf } from 'lucide-react';
import { CartProvider } from '../context/CartContext';
import { 
  MenuSection, 
  CartSidebar, 
  FloatingCartButton, 
  CheckoutForm 
} from '../components/OrderingSystem';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   VERDANT - Vegan Order Page
   ============================================ */

const colors = {
  cream: '#FDFDF5',
  green: '#2D5A3D',
  sage: '#8BA888',
  earth: '#5C4B37',
  gold: '#C4A35A',
};

const menuData = {
  bowls: [
    { 
      name: 'Buddha Bowl', 
      desc: 'Quinoa, roasted vegetables, tahini, chickpeas, greens',
      price: 16,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80'
    },
    { 
      name: 'Teriyaki Tempeh Bowl', 
      desc: 'Brown rice, glazed tempeh, edamame, pickled ginger',
      price: 17,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
    },
    { 
      name: 'Mediterranean Bowl', 
      desc: 'Falafel, hummus, tabbouleh, olives, warm pita',
      price: 16,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80'
    },
    { 
      name: 'Thai Peanut Bowl', 
      desc: 'Rice noodles, crispy tofu, vegetables, peanut sauce',
      price: 17,
      image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=400&q=80'
    },
  ],
  mains: [
    { 
      name: 'Mushroom Risotto', 
      desc: 'Creamy arborio rice, wild mushrooms, truffle oil',
      price: 19,
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80'
    },
    { 
      name: 'Jackfruit Tacos', 
      desc: 'BBQ pulled jackfruit, slaw, avocado crema, 3 tacos',
      price: 15,
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80'
    },
    { 
      name: 'Cauliflower Steak', 
      desc: 'Roasted cauliflower, chimichurri, quinoa pilaf',
      price: 18,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80'
    },
    { 
      name: 'Lentil Bolognese', 
      desc: 'House-made pasta, rich lentil ragu, cashew parm',
      price: 17,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80'
    },
  ],
  starters: [
    { 
      name: 'Avocado Toast', 
      desc: 'Sourdough, smashed avo, everything seasoning',
      price: 11,
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=80'
    },
    { 
      name: 'Crispy Brussels', 
      desc: 'Flash-fried, balsamic glaze, pomegranate',
      price: 12,
      image: 'https://images.unsplash.com/photo-1534938665420-4193effeacc4?w=400&q=80'
    },
    { 
      name: 'Coconut Ceviche', 
      desc: 'Hearts of palm, coconut, lime, plantain chips',
      price: 13,
      image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400&q=80'
    },
  ],
  drinks: [
    { 
      name: 'Green Goddess Smoothie', 
      desc: 'Spinach, banana, almond milk, spirulina',
      price: 8,
      image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80'
    },
    { 
      name: 'Golden Milk Latte', 
      desc: 'Turmeric, oat milk, ginger, warming spices',
      price: 6,
      image: 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=400&q=80'
    },
    { 
      name: 'Cold Brew', 
      desc: 'House-made, served over oat milk',
      price: 5,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80'
    },
    { 
      name: 'Kombucha', 
      desc: 'Rotating flavors, gut-friendly',
      price: 6,
      image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400&q=80'
    },
  ],
};

function VeganOrderContent() {
  return (
    <>
      <TemplateFloatingCTA templateName="Verdant Vegan" templateSlug="verdant" />
      
      <div className="min-h-screen" style={{ background: colors.cream }}>
        {/* Header */}
        <header className="sticky top-0 z-40 py-4 px-6 border-b bg-white/80 backdrop-blur" style={{ borderColor: `${colors.green}15` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/vegan-brand"
                className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                style={{ color: colors.green }}
              >
                <ArrowLeft size={24} />
              </Link>
              <div className="flex items-center gap-2">
                <Leaf size={24} style={{ color: colors.green }} />
                <div>
                  <h1 
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: colors.green }}
                  >
                    VERDANT
                  </h1>
                  <p className="text-xs" style={{ color: colors.green, opacity: 0.7 }}>
                    100% Plant-Based
                  </p>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: colors.earth }}>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>25-35 min</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Eco District</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: colors.green }}
            >
              Order Online
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.earth, opacity: 0.8 }}>
              Delicious plant-based cuisine that's good for you and the planet.
            </p>
          </div>

          {/* Menu Sections */}
          <MenuSection 
            title="Power Bowls"
            description="Nourishing and satisfying"
            items={menuData.bowls}
            accentColor={colors.green}
            columns={4}
          />

          <MenuSection 
            title="Main Courses"
            description="Plant-forward favorites"
            items={menuData.mains}
            accentColor={colors.green}
            columns={4}
          />

          <MenuSection 
            title="Starters"
            description="Light bites to begin"
            items={menuData.starters}
            accentColor={colors.green}
            columns={3}
          />

          <MenuSection 
            title="Drinks"
            description="Refreshing & energizing"
            items={menuData.drinks}
            accentColor={colors.green}
            columns={4}
          />

          {/* Checkout Section */}
          <div className="mt-20 pt-12 border-t" style={{ borderColor: `${colors.green}15` }}>
            <CheckoutForm 
              restaurantName="Verdant"
              accentColor={colors.green}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 text-center" style={{ background: colors.green }}>
          <p className="text-sm" style={{ color: colors.cream, opacity: 0.6 }}>
            © 2025 Verdant Plant-Based Kitchen. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Cart Components */}
      <CartSidebar accentColor={colors.green} />
      <FloatingCartButton accentColor={colors.green} />
    </>
  );
}

export default function VeganOrder() {
  return (
    <CartProvider restaurantId="verdant-vegan">
      <VeganOrderContent />
    </CartProvider>
  );
}

