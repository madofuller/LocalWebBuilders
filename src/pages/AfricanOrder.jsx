import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';
import { CartProvider } from '../context/CartContext';
import { 
  MenuSection, 
  CartSidebar, 
  FloatingCartButton, 
  CheckoutForm 
} from '../components/OrderingSystem';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   SAFARI SPICE - African Online Ordering
   ============================================ */

const colors = {
  cream: '#FDF8F3',
  rust: '#B7472A',
  gold: '#D4A84B',
  brown: '#3D2914',
  terracotta: '#C47D5E',
};

const menuData = {
  starters: [
    { 
      name: 'Samosas', 
      desc: 'Crispy pastries filled with spiced beef or vegetables',
      price: 10,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80'
    },
    { 
      name: 'Suya Skewers', 
      desc: 'Nigerian spiced beef skewers, peanut dust',
      price: 14,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80'
    },
    { 
      name: 'Puff Puff', 
      desc: 'Sweet fried dough balls, cinnamon sugar',
      price: 8,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80'
    },
    { 
      name: 'Kelewele', 
      desc: 'Ghanaian spiced fried plantains',
      price: 9,
      image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?w=400&q=80'
    },
  ],
  mains: [
    { 
      name: 'Jollof Rice', 
      desc: 'West African tomato rice with your choice of protein',
      price: 18,
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80'
    },
    { 
      name: 'Ethiopian Combo', 
      desc: 'Doro wat, misir wat, gomen on injera bread',
      price: 24,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'
    },
    { 
      name: 'Moroccan Lamb Tagine', 
      desc: 'Slow-cooked lamb, preserved lemon, olives',
      price: 26,
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&q=80'
    },
    { 
      name: 'Grilled Tilapia', 
      desc: 'Whole fish, African spice rub, jollof rice',
      price: 22,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80'
    },
    { 
      name: 'Egusi Soup', 
      desc: 'Nigerian melon seed soup, spinach, choice of protein',
      price: 20,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80'
    },
    { 
      name: 'Peri-Peri Chicken', 
      desc: 'Mozambican flame-grilled chicken, spicy sauce',
      price: 19,
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80'
    },
  ],
  sides: [
    { 
      name: 'Fufu', 
      desc: 'Traditional cassava and plantain dough',
      price: 6,
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80'
    },
    { 
      name: 'Fried Plantains', 
      desc: 'Sweet, caramelized perfection',
      price: 7,
      image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?w=400&q=80'
    },
    { 
      name: 'Couscous', 
      desc: 'Fluffy North African semolina',
      price: 5,
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80'
    },
    { 
      name: 'Collard Greens', 
      desc: 'Slow-cooked with onions and spices',
      price: 6,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
    },
  ],
  drinks: [
    { 
      name: 'Hibiscus Tea (Zobo)', 
      desc: 'Chilled, sweet, tangy',
      price: 5,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
    },
    { 
      name: 'Ginger Beer', 
      desc: 'Spicy, refreshing, house-made',
      price: 5,
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80'
    },
    { 
      name: 'Mango Lassi', 
      desc: 'Creamy mango yogurt drink',
      price: 6,
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=80'
    },
    { 
      name: 'South African Wine', 
      desc: 'Selection of Cape wines',
      price: 11,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80'
    },
  ],
};

function AfricanOrderContent() {
  return (
    <>
      <TemplateFloatingCTA templateName="Safari Spice" templateSlug="safari-spice" />
      
      <div className="min-h-screen" style={{ background: colors.cream }}>
        {/* Header */}
        <header className="sticky top-0 z-40 py-4 px-6 border-b bg-white/90 backdrop-blur" style={{ borderColor: `${colors.brown}15` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/african"
                className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                style={{ color: colors.brown }}
              >
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 
                  className="text-2xl font-bold tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
                >
                  SAFARI SPICE
                </h1>
                <p className="text-sm" style={{ color: colors.brown, opacity: 0.7 }}>
                  Online Ordering
                </p>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: colors.brown }}>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>40-55 min</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Midtown</span>
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
              style={{ fontFamily: "'Playfair Display', serif", color: colors.brown }}
            >
              Order Online
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.brown, opacity: 0.7 }}>
              Authentic African flavors from across the continent.
              Available for pickup and delivery.
            </p>
          </div>

          {/* Menu Sections */}
          <MenuSection 
            title="Starters"
            description="Begin your journey"
            items={menuData.starters}
            accentColor={colors.rust}
            columns={4}
          />

          <MenuSection 
            title="Main Courses"
            description="Signature dishes from across Africa"
            items={menuData.mains}
            accentColor={colors.rust}
            columns={3}
          />

          <MenuSection 
            title="Sides"
            description="Perfect accompaniments"
            items={menuData.sides}
            accentColor={colors.rust}
            columns={4}
          />

          <MenuSection 
            title="Drinks"
            description="Refresh and enjoy"
            items={menuData.drinks}
            accentColor={colors.rust}
            columns={4}
          />

          {/* Checkout Section */}
          <div className="mt-20 pt-12 border-t" style={{ borderColor: `${colors.brown}15` }}>
            <CheckoutForm 
              restaurantName="Safari Spice"
              accentColor={colors.rust}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 text-center bg-white">
          <p className="text-sm" style={{ color: colors.brown, opacity: 0.6 }}>
            © 2025 Safari Spice African Kitchen. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Cart Components */}
      <CartSidebar accentColor={colors.rust} />
      <FloatingCartButton accentColor={colors.rust} />
    </>
  );
}

export default function AfricanOrder() {
  return (
    <CartProvider restaurantId="safari-spice">
      <AfricanOrderContent />
    </CartProvider>
  );
}
