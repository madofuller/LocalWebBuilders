import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Calendar } from 'lucide-react';
import { CartProvider } from '../context/CartContext';
import { 
  MenuSection, 
  CartSidebar, 
  FloatingCartButton, 
  CheckoutForm 
} from '../components/OrderingSystem';
import TemplateFloatingCTA from '../components/TemplateFloatingCTA';

/* ============================================
   GATHERED - Catering Online Ordering
   ============================================ */

// Matches CateringShowcase colors
const colors = {
  peach: '#FFEEE4',
  coral: '#FF6B4A',
  cream: '#FFF9F5',
  warmWhite: '#FFFBF8',
  orange: '#FF8564',
  darkText: '#2D2A26',
  mutedText: '#6B6560',
  accent: '#FFB299'
};

const menuData = {
  platters: [
    { 
      name: 'Artisan Cheese Board', 
      desc: 'Selection of imported cheeses, honeycomb, nuts, crackers. Serves 10-12',
      price: 85,
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80'
    },
    { 
      name: 'Charcuterie Spread', 
      desc: 'Cured meats, pâté, cornichons, mustards, crostini. Serves 10-12',
      price: 95,
      image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&q=80'
    },
    { 
      name: 'Mediterranean Mezze', 
      desc: 'Hummus, baba ganoush, feta, olives, warm pita. Serves 10-12',
      price: 75,
      image: 'https://images.unsplash.com/photo-1544378730-8b5104b38c16?w=400&q=80'
    },
    { 
      name: 'Crudité Display', 
      desc: 'Seasonal vegetables, ranch, hummus, green goddess. Serves 12-15',
      price: 65,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80'
    },
  ],
  mains: [
    { 
      name: 'Herb Roasted Chicken', 
      desc: 'Whole roasted chickens, lemon herb jus. Per chicken serves 4',
      price: 45,
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80'
    },
    { 
      name: 'Beef Tenderloin', 
      desc: 'Sliced medium-rare, horseradish cream, chimichurri. Serves 8-10',
      price: 185,
      image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=400&q=80'
    },
    { 
      name: 'Salmon Fillets', 
      desc: 'Citrus glazed Atlantic salmon, dill sauce. Per fillet serves 1',
      price: 28,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80'
    },
    { 
      name: 'Vegetarian Lasagna', 
      desc: 'Layers of pasta, ricotta, roasted vegetables. Serves 10-12',
      price: 75,
      image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80'
    },
    { 
      name: 'Grilled Vegetable Platter', 
      desc: 'Seasonal vegetables, balsamic glaze. Serves 10-12',
      price: 55,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
    },
  ],
  sides: [
    { 
      name: 'Caesar Salad', 
      desc: 'Romaine, parmesan, croutons, classic dressing. Serves 10',
      price: 45,
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=80'
    },
    { 
      name: 'Roasted Potatoes', 
      desc: 'Herb-roasted fingerlings, garlic aioli. Serves 10',
      price: 35,
      image: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?w=400&q=80'
    },
    { 
      name: 'Wild Rice Pilaf', 
      desc: 'Wild rice, dried cranberries, toasted pecans. Serves 10',
      price: 40,
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&q=80'
    },
    { 
      name: 'Seasonal Vegetables', 
      desc: 'Chef\'s selection, herb butter. Serves 10',
      price: 35,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
    },
  ],
  desserts: [
    { 
      name: 'Assorted Mini Pastries', 
      desc: 'Éclairs, tarts, macarons. 24 pieces',
      price: 85,
      image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&q=80'
    },
    { 
      name: 'Chocolate Cake', 
      desc: 'Three-layer dark chocolate, ganache. Serves 12',
      price: 65,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80'
    },
    { 
      name: 'Fresh Fruit Display', 
      desc: 'Seasonal fruits, honey yogurt dip. Serves 15-20',
      price: 55,
      image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400&q=80'
    },
    { 
      name: 'Cookie Platter', 
      desc: 'Assorted house-baked cookies. 24 pieces',
      price: 45,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80'
    },
  ],
};

function CateringOrderContent() {
  return (
    <>
      <TemplateFloatingCTA templateName="Gathered Catering" templateSlug="joyful-table" />
      
      <div className="min-h-screen" style={{ background: colors.peach }}>
        {/* Header */}
        <header className="sticky top-0 z-40 py-4 px-6 border-b" style={{ background: colors.peach, borderColor: `${colors.coral}20` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/catering"
                className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                style={{ color: colors.coral }}
              >
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 
                  className="text-2xl font-black tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.coral }}
                >
                  GATHERED
                </h1>
                <p className="text-sm" style={{ color: colors.darkText, opacity: 0.7 }}>
                  Catering Menu
                </p>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: colors.darkText }}>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>48hr Notice</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>10+ Guests</span>
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
              Catering Menu
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.darkText, opacity: 0.7 }}>
              Elegant catering for your special occasions.
              Minimum 48 hours notice required. Delivery available.
            </p>
          </div>

          {/* Notice */}
          <div 
            className="mb-12 p-6 rounded-xl text-center"
            style={{ background: colors.cream }}
          >
            <p className="font-medium" style={{ color: colors.darkText }}>
              For events within 48 hours, please call us directly at (555) 123-4567
            </p>
          </div>

          {/* Menu Sections */}
          <MenuSection 
            title="Appetizer Platters"
            description="Perfect for mingling"
            items={menuData.platters}
            accentColor={colors.coral}
            columns={2}
          />

          <MenuSection 
            title="Main Courses"
            description="Centerpiece dishes"
            items={menuData.mains}
            accentColor={colors.coral}
            columns={3}
          />

          <MenuSection 
            title="Sides"
            description="Complement your mains"
            items={menuData.sides}
            accentColor={colors.coral}
            columns={4}
          />

          <MenuSection 
            title="Desserts"
            description="Sweet endings"
            items={menuData.desserts}
            accentColor={colors.coral}
            columns={4}
          />

          {/* Checkout Section */}
          <div className="mt-20 pt-12 border-t" style={{ borderColor: `${colors.coral}30` }}>
            <CheckoutForm 
              restaurantName="Gathered Catering"
              accentColor={colors.coral}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 text-center bg-white">
          <p className="text-sm" style={{ color: colors.darkText, opacity: 0.6 }}>
            © 2025 Gathered Catering. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Cart Components */}
      <CartSidebar accentColor={colors.coral} />
      <FloatingCartButton accentColor={colors.coral} />
    </>
  );
}

export default function CateringOrder() {
  return (
    <CartProvider restaurantId="joyful-table-catering">
      <CateringOrderContent />
    </CartProvider>
  );
}
