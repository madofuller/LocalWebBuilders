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
   SMOKE & EMBER BBQ - Online Ordering Page
   ============================================ */

// Matches BBQShowcase colors
const colors = {
  cream: '#F5E6D3',
  teal: '#1B4D5C',
  darkTeal: '#0F3A47',
  coral: '#E8805C',
  mustard: '#D4A84B',
  warmWhite: '#FAF6F1',
  darkText: '#1A1A1A',
  lightText: '#F5E6D3'
};

// Menu data with images
const menuData = {
  smoked: [
    { 
      name: 'Brisket Plate', 
      desc: 'Texas-style smoked brisket, served with two sides',
      price: 24,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
    },
    { 
      name: 'Pulled Pork', 
      desc: 'Slow-smoked pork shoulder, tangy vinegar sauce',
      price: 18,
      image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&q=80'
    },
    { 
      name: 'Pork Ribs', 
      desc: 'St. Louis-style ribs, dry rubbed, half rack',
      price: 22,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
    },
    { 
      name: 'Smoked Turkey', 
      desc: 'Herb-brined turkey breast, white BBQ sauce',
      price: 19,
      image: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&q=80'
    },
    { 
      name: 'Beef Ribs', 
      desc: 'Massive dino ribs, salt & pepper crust',
      price: 38,
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80'
    },
    { 
      name: 'Sausage Links', 
      desc: 'House-made jalapeño cheddar sausage',
      price: 14,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80'
    },
  ],
  sides: [
    { 
      name: 'Mac & Cheese', 
      desc: 'Creamy, smoky, three-cheese blend',
      price: 6,
      image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&q=80'
    },
    { 
      name: 'Collard Greens', 
      desc: 'Slow-cooked with smoked ham hock',
      price: 5,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
    },
    { 
      name: 'Coleslaw', 
      desc: 'Tangy, crunchy, house-made dressing',
      price: 4,
      image: 'https://images.unsplash.com/photo-1625938145744-e380515399bf?w=400&q=80'
    },
    { 
      name: 'Baked Beans', 
      desc: 'Sweet, smoky, loaded with burnt ends',
      price: 5,
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&q=80'
    },
    { 
      name: 'Cornbread', 
      desc: 'Jalapeño honey butter',
      price: 4,
      image: 'https://images.unsplash.com/photo-1586444248879-bc604bc77f82?w=400&q=80'
    },
    { 
      name: 'Loaded Fries', 
      desc: 'Cheese, brisket, pickled jalapeños',
      price: 9,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80'
    },
  ],
  sandwiches: [
    { 
      name: 'Brisket Sandwich', 
      desc: 'Sliced brisket, pickles, onions, white bread',
      price: 16,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80'
    },
    { 
      name: 'Pulled Pork Sandwich', 
      desc: 'Piled high with slaw on a brioche bun',
      price: 14,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80'
    },
    { 
      name: 'Smoke & Ember Club', 
      desc: 'Turkey, bacon, avocado, chipotle mayo',
      price: 15,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80'
    },
  ],
  drinks: [
    { 
      name: 'Sweet Tea', 
      desc: 'House-brewed, classic Southern style',
      price: 3,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80'
    },
    { 
      name: 'Lemonade', 
      desc: 'Fresh-squeezed, just sweet enough',
      price: 4,
      image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80'
    },
    { 
      name: 'Boozy Slushee', 
      desc: 'Rotating flavors, ask your server',
      price: 10,
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&q=80'
    },
    { 
      name: 'Local Craft Beer', 
      desc: 'Selection of Texas brews',
      price: 7,
      image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80'
    },
  ],
};

function BBQOrderContent() {
  return (
    <>
      <TemplateFloatingCTA templateName="Smoke & Ember BBQ" templateSlug="oakfire" />
      
      <div className="min-h-screen" style={{ background: colors.warmWhite }}>
        {/* Header */}
        <header className="sticky top-0 z-40 py-4 px-6 border-b" style={{ background: colors.cream, borderColor: `${colors.teal}20` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/bbq"
                className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                style={{ color: colors.teal }}
              >
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 
                  className="text-2xl font-black tracking-wider"
                  style={{ fontFamily: "'Alfa Slab One', serif", color: colors.teal }}
                >
                  SMOKE & EMBER
                </h1>
                <p className="text-sm" style={{ color: colors.teal, opacity: 0.7 }}>
                  Online Ordering
                </p>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: colors.teal }}>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>30-45 min</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Austin, TX</span>
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
              style={{ fontFamily: "'Playfair Display', serif", color: colors.teal }}
            >
              Order Online
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.teal, opacity: 0.7 }}>
              Texas-style smoked meats, rad sides, and boozy slushees. 
              Available for pickup and delivery.
            </p>
          </div>

          {/* Menu Sections */}
          <MenuSection 
            title="Smoked Meats"
            description="Low and slow, the way it should be"
            items={menuData.smoked}
            accentColor={colors.coral}
            columns={3}
          />

          <MenuSection 
            title="Sides"
            description="Every plate needs its partners"
            items={menuData.sides}
            accentColor={colors.coral}
            columns={3}
          />

          <MenuSection 
            title="Sandwiches"
            description="Handheld happiness"
            items={menuData.sandwiches}
            accentColor={colors.coral}
            columns={3}
          />

          <MenuSection 
            title="Drinks"
            description="Wash it all down"
            items={menuData.drinks}
            accentColor={colors.coral}
            columns={4}
          />

          {/* Checkout Section */}
          <div className="mt-20 pt-12 border-t" style={{ borderColor: `${colors.teal}20` }}>
            <CheckoutForm 
              restaurantName="Smoke & Ember BBQ"
              accentColor={colors.coral}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 text-center" style={{ background: colors.cream }}>
          <p className="text-sm" style={{ color: colors.teal, opacity: 0.6 }}>
            © 2025 Smoke & Ember Smokehouse. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Cart Components */}
      <CartSidebar accentColor={colors.coral} />
      <FloatingCartButton accentColor={colors.coral} />
    </>
  );
}

// Wrap with CartProvider
export default function BBQOrder() {
  return (
    <CartProvider restaurantId="oakfire-bbq">
      <BBQOrderContent />
    </CartProvider>
  );
}

