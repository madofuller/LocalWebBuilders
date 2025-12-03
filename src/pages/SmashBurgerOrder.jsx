import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Flame } from 'lucide-react';
import { CartProvider } from '../context/CartContext';
import { 
  MenuSection, 
  CartSidebar, 
  FloatingCartButton, 
  CheckoutForm 
} from '../components/OrderingSystem';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   GRIDDLE HOUSE - Smash Burger Online Ordering
   ============================================ */

// Matches SmashBurgerShowcase colors
const colors = {
  yellow: '#FFE135',
  black: '#1A1A1A',
  white: '#FFFFFF',
  cream: '#FFF9E8',
  red: '#E63946'
};

const menuData = {
  burgers: [
    { 
      name: 'The Classic', 
      desc: 'Double smash patty, American cheese, pickles, onion, special sauce',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'
    },
    { 
      name: 'The Spicy', 
      desc: 'Double patty, pepper jack, jalapenos, chipotle mayo, hot honey',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80'
    },
    { 
      name: 'The Bacon Stack', 
      desc: 'Triple patty, crispy bacon, cheddar, BBQ sauce, onion rings',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80'
    },
    { 
      name: 'The Mushroom Melt', 
      desc: 'Double patty, sautéed mushrooms, Swiss, garlic aioli',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80'
    },
    { 
      name: 'The Western', 
      desc: 'Double patty, bacon, cheddar, onion rings, BBQ sauce',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80'
    },
    { 
      name: 'The Veggie Smash', 
      desc: 'Impossible patty, American cheese, all the fixings',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80'
    },
  ],
  sides: [
    { 
      name: 'Smash Fries', 
      desc: 'Crispy, seasoned, addictive',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80'
    },
    { 
      name: 'Cheese Fries', 
      desc: 'Fries smothered in cheese sauce',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400&q=80'
    },
    { 
      name: 'Onion Rings', 
      desc: 'Beer-battered, crispy perfection',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80'
    },
    { 
      name: 'Tots', 
      desc: 'Golden, crispy tater tots',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80'
    },
  ],
  combos: [
    { 
      name: 'Single Combo', 
      desc: 'Any burger + fries + drink',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'
    },
    { 
      name: 'Double Combo', 
      desc: '2 Classic burgers + fries + 2 drinks',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80'
    },
    { 
      name: 'Family Pack', 
      desc: '4 Classic burgers + 2 large fries + 4 drinks',
      price: 44.99,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80'
    },
  ],
  drinks: [
    { 
      name: 'Fountain Drink', 
      desc: 'Coke, Sprite, Dr Pepper, Lemonade',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&q=80'
    },
    { 
      name: 'Milkshake', 
      desc: 'Vanilla, Chocolate, Strawberry, or Oreo',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    },
    { 
      name: 'Float', 
      desc: 'Root beer or Coke with vanilla ice cream',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    },
  ],
};

function SmashBurgerOrderContent() {
  return (
    <>
      <TemplateFloatingCTA templateName="Griddle House Burgers" templateSlug="topstack" />
      
      <div className="min-h-screen" style={{ background: colors.cream }}>
        {/* Header */}
        <header className="sticky top-0 z-40 py-4 px-6 border-b" style={{ background: colors.cream, borderColor: `${colors.black}20` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/smash-burger"
                className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                style={{ color: colors.black }}
              >
                <ArrowLeft size={24} />
              </Link>
              <div className="flex items-center gap-2">
                <div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: colors.yellow }}
                >
                  <Flame size={18} style={{ color: colors.black }} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-black tracking-tight" style={{ color: colors.black }}>
                    GRIDDLE
                  </span>
                  <span className="text-xs font-bold tracking-widest" style={{ color: colors.red }}>
                    HOUSE
                  </span>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: colors.black, opacity: 0.7 }}>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>15-25 min</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Multiple Locations</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-6xl font-black mb-4"
              style={{ fontFamily: "'Anton', sans-serif", color: colors.black }}
            >
              ORDER NOW
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.black, opacity: 0.7 }}>
              Smashed to order. Crispy edges. Maximum flavor.
              Ready fast for pickup or delivery.
            </p>
          </div>

          {/* Menu Sections */}
          <MenuSection 
            title="SMASH BURGERS"
            description="Our signature smashed patties"
            items={menuData.burgers}
            accentColor={colors.red}
            columns={3}
          />

          <MenuSection 
            title="SIDES"
            description="Crispy companions"
            items={menuData.sides}
            accentColor={colors.red}
            columns={4}
          />

          <MenuSection 
            title="COMBOS"
            description="Best value deals"
            items={menuData.combos}
            accentColor={colors.red}
            columns={3}
          />

          <MenuSection 
            title="DRINKS"
            description="Wash it down"
            items={menuData.drinks}
            accentColor={colors.red}
            columns={3}
          />

          {/* Checkout Section */}
          <div className="mt-20 pt-12 border-t" style={{ borderColor: `${colors.black}15` }}>
            <CheckoutForm 
              restaurantName="Griddle House Smash Burgers"
              accentColor={colors.red}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 text-center" style={{ background: colors.black }}>
          <p className="text-sm" style={{ color: colors.yellow, opacity: 0.6 }}>
            © 2025 Griddle House Smash Burgers. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Cart Components */}
      <CartSidebar accentColor={colors.red} />
      <FloatingCartButton accentColor={colors.red} />
    </>
  );
}

export default function SmashBurgerOrder() {
  return (
    <CartProvider restaurantId="topstack-burgers">
      <SmashBurgerOrderContent />
    </CartProvider>
  );
}
