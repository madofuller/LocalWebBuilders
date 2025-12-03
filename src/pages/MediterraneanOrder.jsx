import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Sun } from 'lucide-react';
import { CartProvider } from '../context/CartContext';
import { 
  MenuSection, 
  CartSidebar, 
  FloatingCartButton, 
  CheckoutForm 
} from '../components/OrderingSystem';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   COASTLINE - Mediterranean Online Ordering
   ============================================ */

// Matches CalaShowcase/Coastline colors
const colors = {
  cream: '#FDF6E9',
  lightCream: '#FFF8E7',
  terracotta: '#D4622B',
  golden: '#E9A23B',
  warmBrown: '#8B5A3C',
  darkText: '#5C3D2E',
  lightText: '#8B6B5A',
  white: '#FFFFFF',
  olive: '#7A8B4A',
  sand: '#E8DBC9'
};

const menuData = {
  mezze: [
    { 
      name: 'Hummus', 
      desc: 'Classic chickpea dip, tahini, olive oil, warm pita',
      price: 12,
      image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&q=80'
    },
    { 
      name: 'Baba Ganoush', 
      desc: 'Smoky roasted eggplant, garlic, lemon',
      price: 13,
      image: 'https://images.unsplash.com/photo-1625944525200-564a4e419d2c?w=400&q=80'
    },
    { 
      name: 'Falafel', 
      desc: 'Crispy chickpea fritters, tahini sauce',
      price: 14,
      image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=400&q=80'
    },
    { 
      name: 'Mezze Platter', 
      desc: 'Hummus, baba ganoush, falafel, dolmas, pita',
      price: 28,
      image: 'https://images.unsplash.com/photo-1544378730-8b5104b38c16?w=400&q=80'
    },
    { 
      name: 'Labneh', 
      desc: 'Strained yogurt, zaatar, olive oil',
      price: 11,
      image: 'https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?w=400&q=80'
    },
    { 
      name: 'Dolmas', 
      desc: 'Grape leaves stuffed with herbed rice',
      price: 12,
      image: 'https://images.unsplash.com/photo-1629093010770-7beeda264915?w=400&q=80'
    },
  ],
  mains: [
    { 
      name: 'Lamb Kofta', 
      desc: 'Grilled lamb skewers, rice pilaf, tzatziki',
      price: 26,
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80'
    },
    { 
      name: 'Chicken Shawarma', 
      desc: 'Marinated chicken, garlic sauce, pickled turnips',
      price: 22,
      image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80'
    },
    { 
      name: 'Grilled Branzino', 
      desc: 'Whole Mediterranean sea bass, lemon, herbs',
      price: 34,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80'
    },
    { 
      name: 'Lamb Tagine', 
      desc: 'Slow-braised lamb, apricots, almonds, couscous',
      price: 28,
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&q=80'
    },
    { 
      name: 'Vegetable Moussaka', 
      desc: 'Layered eggplant, potato, tomato, bechamel',
      price: 20,
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80'
    },
    { 
      name: 'Grilled Halloumi Plate', 
      desc: 'Cypriot cheese, roasted vegetables, pita',
      price: 19,
      image: 'https://images.unsplash.com/photo-1532597540419-b176991847e8?w=400&q=80'
    },
  ],
  salads: [
    { 
      name: 'Fattoush', 
      desc: 'Crispy pita, cucumber, tomato, sumac dressing',
      price: 14,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80'
    },
    { 
      name: 'Greek Salad', 
      desc: 'Tomato, cucumber, olives, feta, oregano',
      price: 13,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80'
    },
    { 
      name: 'Tabbouleh', 
      desc: 'Parsley, bulgur, mint, tomato, lemon',
      price: 12,
      image: 'https://images.unsplash.com/photo-1534940519139-f860fb3c6e38?w=400&q=80'
    },
  ],
  drinks: [
    { 
      name: 'Turkish Coffee', 
      desc: 'Traditional preparation, cardamom',
      price: 5,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80'
    },
    { 
      name: 'Fresh Mint Lemonade', 
      desc: 'House-made, refreshing',
      price: 6,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80'
    },
    { 
      name: 'Pomegranate Juice', 
      desc: 'Fresh-pressed, antioxidant rich',
      price: 7,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80'
    },
    { 
      name: 'Mediterranean Wine', 
      desc: 'Ask about our selection',
      price: 12,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80'
    },
  ],
};

function MediterraneanOrderContent() {
  return (
    <>
      <TemplateFloatingCTA templateName="Coastline Mediterranean" templateSlug="solara" />
      
      <div className="min-h-screen" style={{ background: colors.cream }}>
        {/* Header */}
        <header className="sticky top-0 z-40 py-4 px-6 border-b" style={{ background: colors.cream, borderColor: colors.sand }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/mediterranean"
                className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                style={{ color: colors.darkText }}
              >
                <ArrowLeft size={24} />
              </Link>
              <div className="flex items-center gap-2">
                <div 
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: colors.terracotta }}
                >
                  <Sun size={16} className="text-white" />
                </div>
                <span 
                  className="text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
                >
                  Coastline
                </span>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: colors.lightText }}>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>35-50 min</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Downtown</span>
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
              style={{ fontFamily: "'Playfair Display', serif", color: colors.darkText }}
            >
              Order Online
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.darkText, opacity: 0.7 }}>
              Fresh Mediterranean flavors, from our kitchen to your table.
              Available for pickup and delivery.
            </p>
          </div>

          {/* Menu Sections */}
          <MenuSection 
            title="Mezze & Starters"
            description="Perfect for sharing"
            items={menuData.mezze}
            accentColor={colors.terracotta}
            columns={3}
          />

          <MenuSection 
            title="Main Courses"
            description="From the grill and oven"
            items={menuData.mains}
            accentColor={colors.terracotta}
            columns={3}
          />

          <MenuSection 
            title="Salads"
            description="Fresh and vibrant"
            items={menuData.salads}
            accentColor={colors.terracotta}
            columns={3}
          />

          <MenuSection 
            title="Drinks"
            description="Refreshments"
            items={menuData.drinks}
            accentColor={colors.terracotta}
            columns={4}
          />

          {/* Checkout Section */}
          <div className="mt-20 pt-12 border-t" style={{ borderColor: `${colors.darkText}15` }}>
            <CheckoutForm 
              restaurantName="Coastline Mediterranean"
              accentColor={colors.terracotta}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 text-center bg-white">
          <p className="text-sm" style={{ color: colors.darkText, opacity: 0.6 }}>
            © 2025 Coastline Mediterranean Kitchen. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Cart Components */}
      <CartSidebar accentColor={colors.terracotta} />
      <FloatingCartButton accentColor={colors.terracotta} />
    </>
  );
}

export default function MediterraneanOrder() {
  return (
    <CartProvider restaurantId="solara-mediterranean">
      <MediterraneanOrderContent />
    </CartProvider>
  );
}
