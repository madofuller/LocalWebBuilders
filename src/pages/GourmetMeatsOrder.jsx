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
   PHIL'S PRIME - Gourmet Meats Order Page
   ============================================ */

const colors = {
  black: '#0D0D0D',
  gold: '#C9A962',
  cream: '#F5F1EB',
  maroon: '#722F37',
  charcoal: '#1A1A1A',
};

const menuData = {
  steaks: [
    { 
      name: 'Filet Mignon', 
      desc: '8oz center-cut, butter-basted, choice of sauce',
      price: 52,
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80'
    },
    { 
      name: 'Ribeye', 
      desc: '14oz bone-in, perfectly marbled, aged 28 days',
      price: 58,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
    },
    { 
      name: 'NY Strip', 
      desc: '12oz prime cut, classic steakhouse flavor',
      price: 48,
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80'
    },
    { 
      name: 'Porterhouse for Two', 
      desc: '32oz T-bone, filet + strip, carved tableside',
      price: 125,
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80'
    },
    { 
      name: 'Wagyu A5', 
      desc: '6oz Japanese import, melt-in-your-mouth',
      price: 185,
      image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80'
    },
  ],
  starters: [
    { 
      name: 'Jumbo Shrimp Cocktail', 
      desc: '6 colossal shrimp, house cocktail sauce',
      price: 24,
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80'
    },
    { 
      name: 'Oysters Rockefeller', 
      desc: 'Half dozen, spinach, parmesan, herb butter',
      price: 22,
      image: 'https://images.unsplash.com/photo-1606731219412-87b1e444844f?w=400&q=80'
    },
    { 
      name: 'Bacon Wrapped Scallops', 
      desc: 'Seared diver scallops, applewood bacon',
      price: 26,
      image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&q=80'
    },
    { 
      name: 'Wedge Salad', 
      desc: 'Iceberg, blue cheese, bacon, tomatoes',
      price: 14,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80'
    },
  ],
  sides: [
    { 
      name: 'Lobster Mac & Cheese', 
      desc: 'Maine lobster, three-cheese blend',
      price: 22,
      image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&q=80'
    },
    { 
      name: 'Truffle Fries', 
      desc: 'Parmesan, truffle oil, herbs',
      price: 14,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80'
    },
    { 
      name: 'Creamed Spinach', 
      desc: 'Classic steakhouse style',
      price: 12,
      image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&q=80'
    },
    { 
      name: 'Loaded Baked Potato', 
      desc: 'Bacon, cheddar, sour cream, chives',
      price: 14,
      image: 'https://images.unsplash.com/photo-1600628421060-939639517883?w=400&q=80'
    },
    { 
      name: 'Grilled Asparagus', 
      desc: 'Lemon, parmesan, olive oil',
      price: 12,
      image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?w=400&q=80'
    },
  ],
  drinks: [
    { 
      name: 'Old Fashioned', 
      desc: 'Woodford Reserve, bitters, orange',
      price: 16,
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80'
    },
    { 
      name: 'Manhattan', 
      desc: 'Rye whiskey, sweet vermouth, cherry',
      price: 16,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80'
    },
    { 
      name: 'House Red Wine', 
      desc: 'Cabernet Sauvignon, by the glass',
      price: 14,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80'
    },
    { 
      name: 'Espresso Martini', 
      desc: 'Vodka, coffee liqueur, fresh espresso',
      price: 15,
      image: 'https://images.unsplash.com/photo-1545438102-799c3991a7b4?w=400&q=80'
    },
  ],
};

function GourmetMeatsOrderContent() {
  return (
    <>
      <TemplateFloatingCTA templateName="Phil's Prime" templateSlug="phils-prime" />
      
      <div className="min-h-screen" style={{ background: colors.charcoal }}>
        {/* Header */}
        <header className="sticky top-0 z-40 py-4 px-6 border-b" style={{ background: colors.black, borderColor: `${colors.gold}30` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/gourmet-meats"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                style={{ color: colors.gold }}
              >
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 
                  className="text-2xl font-bold tracking-wider"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.gold }}
                >
                  PHIL'S PRIME
                </h1>
                <p className="text-sm" style={{ color: colors.cream, opacity: 0.7 }}>
                  Online Ordering
                </p>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: colors.cream }}>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>45-60 min</span>
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
              style={{ fontFamily: "'Playfair Display', serif", color: colors.gold }}
            >
              Order Online
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.cream, opacity: 0.7 }}>
              Prime cuts, expertly prepared. Steakhouse quality, delivered to your door.
            </p>
          </div>

          {/* Menu Sections */}
          <MenuSection 
            title="Prime Steaks"
            description="Dry-aged, USDA Prime cuts"
            items={menuData.steaks}
            accentColor={colors.gold}
            columns={3}
          />

          <MenuSection 
            title="Starters"
            description="Begin your experience"
            items={menuData.starters}
            accentColor={colors.gold}
            columns={4}
          />

          <MenuSection 
            title="Sides"
            description="Classic accompaniments"
            items={menuData.sides}
            accentColor={colors.gold}
            columns={3}
          />

          <MenuSection 
            title="Cocktails & Wine"
            description="Pair with your meal"
            items={menuData.drinks}
            accentColor={colors.gold}
            columns={4}
          />

          {/* Checkout Section */}
          <div className="mt-20 pt-12 border-t" style={{ borderColor: `${colors.gold}30` }}>
            <div className="bg-white rounded-2xl p-8">
              <CheckoutForm 
                restaurantName="Phil's Prime Steakhouse"
                accentColor={colors.maroon}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 text-center" style={{ background: colors.black }}>
          <p className="text-sm" style={{ color: colors.cream, opacity: 0.6 }}>
            © 2025 Phil's Prime Steakhouse. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Cart Components */}
      <CartSidebar accentColor={colors.maroon} />
      <FloatingCartButton accentColor={colors.maroon} />
    </>
  );
}

export default function GourmetMeatsOrder() {
  return (
    <CartProvider restaurantId="phils-prime">
      <GourmetMeatsOrderContent />
    </CartProvider>
  );
}

