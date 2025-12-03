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
   ROOTS & BLOOM - Plant-Based Order Page
   ============================================ */

const colors = {
  cream: '#FBF9F4',
  forest: '#355E3B',
  coral: '#E07A5F',
  sand: '#D4C4A8',
  charcoal: '#2C2C2C',
};

const menuData = {
  signature: [
    { 
      name: 'The Impossible Burger', 
      desc: 'Plant-based patty, vegan cheese, special sauce, brioche',
      price: 16,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'
    },
    { 
      name: 'BBQ Jackfruit Sandwich', 
      desc: 'Pulled jackfruit, house BBQ, creamy slaw',
      price: 15,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80'
    },
    { 
      name: 'Crispy Cauliflower Bites', 
      desc: 'Buffalo or Korean BBQ, ranch dip',
      price: 13,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80'
    },
    { 
      name: 'Loaded Nachos', 
      desc: 'Cashew queso, black beans, pico, guac',
      price: 14,
      image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80'
    },
  ],
  bowls: [
    { 
      name: 'Harvest Bowl', 
      desc: 'Farro, roasted squash, kale, pepitas, maple tahini',
      price: 15,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80'
    },
    { 
      name: 'Protein Power Bowl', 
      desc: 'Tofu, tempeh, quinoa, greens, miso ginger',
      price: 17,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
    },
    { 
      name: 'Southwest Bowl', 
      desc: 'Rice, black beans, corn, avocado, chipotle lime',
      price: 15,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80'
    },
  ],
  salads: [
    { 
      name: 'Kale Caesar', 
      desc: 'Cashew caesar, coconut bacon, sourdough croutons',
      price: 14,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80'
    },
    { 
      name: 'Rainbow Salad', 
      desc: 'Mixed greens, every color veggie, lemon vinaigrette',
      price: 13,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80'
    },
  ],
  sides: [
    { 
      name: 'Sweet Potato Fries', 
      desc: 'Crispy, with chipotle aioli',
      price: 6,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80'
    },
    { 
      name: 'Mac & Cheese', 
      desc: 'Creamy cashew cheese sauce',
      price: 7,
      image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&q=80'
    },
    { 
      name: 'Garlic Bread', 
      desc: 'Herb butter, perfectly toasted',
      price: 5,
      image: 'https://images.unsplash.com/photo-1619535860434-cf905c90c01e?w=400&q=80'
    },
  ],
  drinks: [
    { 
      name: 'Fresh Juice', 
      desc: 'Green, orange, or beet blend',
      price: 8,
      image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80'
    },
    { 
      name: 'Oat Milk Latte', 
      desc: 'Espresso, creamy oat milk',
      price: 5,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80'
    },
    { 
      name: 'Sparkling Water', 
      desc: 'Plain or flavored',
      price: 3,
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80'
    },
  ],
};

function PlantBasedOrderContent() {
  return (
    <>
      <TemplateFloatingCTA templateName="Roots & Bloom" templateSlug="roots-bloom" />
      
      <div className="min-h-screen" style={{ background: colors.cream }}>
        {/* Header */}
        <header className="sticky top-0 z-40 py-4 px-6 border-b bg-white/80 backdrop-blur" style={{ borderColor: `${colors.forest}15` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/plant-based"
                className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                style={{ color: colors.forest }}
              >
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: colors.forest }}
                >
                  ROOTS & BLOOM
                </h1>
                <p className="text-sm" style={{ color: colors.forest, opacity: 0.7 }}>
                  Plant-Based Kitchen
                </p>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: colors.charcoal }}>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>20-30 min</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Green District</span>
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
              style={{ fontFamily: "'Playfair Display', serif", color: colors.forest }}
            >
              Order Online
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.charcoal, opacity: 0.7 }}>
              Comfort food, reimagined. 100% plant-based, 100% delicious.
            </p>
          </div>

          {/* Menu Sections */}
          <MenuSection 
            title="Signature Items"
            description="Our most popular dishes"
            items={menuData.signature}
            accentColor={colors.coral}
            columns={4}
          />

          <MenuSection 
            title="Nourish Bowls"
            description="Balanced and beautiful"
            items={menuData.bowls}
            accentColor={colors.coral}
            columns={3}
          />

          <MenuSection 
            title="Salads"
            description="Fresh and crisp"
            items={menuData.salads}
            accentColor={colors.coral}
            columns={2}
          />

          <MenuSection 
            title="Sides"
            description="Perfect additions"
            items={menuData.sides}
            accentColor={colors.coral}
            columns={3}
          />

          <MenuSection 
            title="Drinks"
            description="Refresh your day"
            items={menuData.drinks}
            accentColor={colors.coral}
            columns={3}
          />

          {/* Checkout Section */}
          <div className="mt-20 pt-12 border-t" style={{ borderColor: `${colors.forest}15` }}>
            <CheckoutForm 
              restaurantName="Roots & Bloom"
              accentColor={colors.coral}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 text-center" style={{ background: colors.forest }}>
          <p className="text-sm" style={{ color: colors.cream, opacity: 0.6 }}>
            © 2025 Roots & Bloom. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Cart Components */}
      <CartSidebar accentColor={colors.coral} />
      <FloatingCartButton accentColor={colors.coral} />
    </>
  );
}

export default function PlantBasedOrder() {
  return (
    <CartProvider restaurantId="roots-bloom">
      <PlantBasedOrderContent />
    </CartProvider>
  );
}

