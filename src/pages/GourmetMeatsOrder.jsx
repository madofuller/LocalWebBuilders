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

// Matches GourmetMeatsShowcase colors - playful pastels
const colors = {
  mint: '#B8E4D8',
  peach: '#FFCBA4',
  lavender: '#C5B9E8',
  yellow: '#FFE66D',
  coral: '#FF6B6B',
  blue: '#4ECDC4',
  cream: '#FFF9F0',
  black: '#1A1A1A',
  white: '#FFFFFF'
};

const menuData = {
  sausages: [
    { 
      name: 'Hickory Maple', 
      desc: 'Heritage pork, maple syrup, black pepper. Pack of 4.',
      price: 16,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80'
    },
    { 
      name: 'Chimichurri Beef', 
      desc: 'Grass-fed beef, fresh herbs, garlic. Pack of 4.',
      price: 18,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80'
    },
    { 
      name: 'Garden Herb Chicken', 
      desc: 'Free-range chicken, rosemary, sage. Pack of 4.',
      price: 14,
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80'
    },
    { 
      name: 'Spicy Italian', 
      desc: 'Pork, fennel, calabrian chili. Pack of 4.',
      price: 16,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
    },
    { 
      name: 'Breakfast Links', 
      desc: 'Classic recipe, sage, brown sugar. Pack of 8.',
      price: 14,
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80'
    },
  ],
  bundles: [
    { 
      name: 'Grill Master Box', 
      desc: '8 sausages, 4 burgers, spice rub, buns',
      price: 65,
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80'
    },
    { 
      name: 'Brunch Bundle', 
      desc: 'Breakfast links, bacon, country ham',
      price: 48,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80'
    },
    { 
      name: 'Sampler Pack', 
      desc: 'Try all 5 sausage flavors, 2 of each',
      price: 55,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80'
    },
    { 
      name: 'Gift Box', 
      desc: 'Sausages, bacon, rubs, mustard, gift wrapped',
      price: 85,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
    },
  ],
  extras: [
    { 
      name: 'Artisan Bacon', 
      desc: 'Thick-cut, applewood smoked. 1 lb.',
      price: 16,
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80'
    },
    { 
      name: 'Grass-Fed Burgers', 
      desc: 'Quarter pound patties. Pack of 4.',
      price: 18,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'
    },
    { 
      name: 'Signature Spice Rub', 
      desc: 'Our secret blend, 4oz jar',
      price: 12,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80'
    },
    { 
      name: 'Stone Ground Mustard', 
      desc: 'House-made, honey touch. 8oz jar.',
      price: 8,
      image: 'https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?w=400&q=80'
    },
    { 
      name: 'Country Ham', 
      desc: 'Dry-cured, sliced. 1 lb.',
      price: 22,
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80'
    },
  ],
  merch: [
    { 
      name: 'Canvas Apron', 
      desc: 'Heavy-duty, adjustable, logo embroidered',
      price: 38,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80'
    },
    { 
      name: 'Recipe Book', 
      desc: '50+ recipes from our kitchen to yours',
      price: 25,
      image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80'
    },
    { 
      name: 'Branded Cap', 
      desc: 'Snapback, one size fits all',
      price: 28,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80'
    },
    { 
      name: 'Grill Tongs', 
      desc: 'Stainless steel, 16 inch, logo engraved',
      price: 22,
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80'
    },
  ],
};

function GourmetMeatsOrderContent() {
  return (
    <>
      <TemplateFloatingCTA templateName="Butcher & Bloom" templateSlug="butcher-bloom" />
      
      <div className="min-h-screen" style={{ background: colors.cream }}>
        {/* Header */}
        <header className="sticky top-0 z-40 py-4 px-6 border-b" style={{ background: colors.cream, borderColor: `${colors.black}10` }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/gourmet-meats"
                className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                style={{ color: colors.black }}
              >
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 
                  className="text-2xl"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: colors.black }}
                >
                  Butcher <span className="font-bold not-italic">&</span> BLOOM
                </h1>
                <p className="text-sm" style={{ color: colors.black, opacity: 0.7 }}>
                  Online Shop
                </p>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: colors.black }}>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Next Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Ships Nationwide</span>
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
              style={{ fontFamily: "'Playfair Display', serif", color: colors.black }}
            >
              Shop Our Selection
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.black, opacity: 0.7 }}>
              Small-batch artisan meats, crafted with care and shipped fresh to your door.
            </p>
          </div>

          {/* Menu Sections */}
          <MenuSection 
            title="Artisan Sausages"
            description="Small-batch, handcrafted with heritage recipes"
            items={menuData.sausages}
            accentColor={colors.coral}
            columns={3}
          />

          <MenuSection 
            title="Bundles & Gift Boxes"
            description="Perfect for grilling season or gifting"
            items={menuData.bundles}
            accentColor={colors.blue}
            columns={4}
          />

          <MenuSection 
            title="Bacon, Burgers & More"
            description="Pantry essentials for every kitchen"
            items={menuData.extras}
            accentColor={colors.peach}
            columns={3}
          />

          <MenuSection 
            title="Gear & Merch"
            description="Rep the brand you love"
            items={menuData.merch}
            accentColor={colors.lavender}
            columns={4}
          />

          {/* Checkout Section */}
          <div className="mt-20 pt-12 border-t" style={{ borderColor: `${colors.black}15` }}>
            <div className="bg-white rounded-2xl p-8">
              <CheckoutForm 
                restaurantName="Butcher & Bloom"
                accentColor={colors.coral}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 text-center" style={{ background: colors.mint }}>
          <p className="text-sm" style={{ color: colors.black, opacity: 0.6 }}>
            © 2025 Butcher & Bloom. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Cart Components */}
      <CartSidebar accentColor={colors.coral} />
      <FloatingCartButton accentColor={colors.coral} />
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

