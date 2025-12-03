import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag, Trash2, ChevronRight, Check, Loader2 } from 'lucide-react';

// ============================================
// MENU ITEM CARD - Add to cart functionality
// ============================================
export function MenuItem({ 
  item, 
  accentColor = '#ff6b35',
  showImage = true,
}) {
  const { addItem, setIsCartOpen } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: item.id || item.name.toLowerCase().replace(/\s+/g, '-'),
      name: item.name,
      price: item.price,
      image: item.image,
      variant: item.variant || null,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    setIsCartOpen(true);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {showImage && item.image && (
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-semibold text-gray-900">{item.name}</h3>
          <span className="font-bold" style={{ color: accentColor }}>
            ${item.price.toFixed(2)}
          </span>
        </div>
        {item.desc && (
          <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
        )}
        <button
          onClick={handleAdd}
          disabled={added}
          className="w-full py-2.5 rounded-lg font-medium text-white transition-all flex items-center justify-center gap-2"
          style={{ 
            background: added ? '#10B981' : accentColor,
          }}
        >
          {added ? (
            <>
              <Check size={18} />
              Added!
            </>
          ) : (
            <>
              <Plus size={18} />
              Add to Order
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ============================================
// MENU SECTION - Group of items
// ============================================
export function MenuSection({ 
  title, 
  description,
  items, 
  accentColor = '#ff6b35',
  columns = 3,
  showImages = true,
}) {
  return (
    <div className="mb-12">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      )}
      <div className={`grid gap-6 ${
        columns === 2 ? 'md:grid-cols-2' :
        columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' :
        columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
        'md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {items.map((item, index) => (
          <MenuItem 
            key={item.id || index} 
            item={item} 
            accentColor={accentColor}
            showImage={showImages}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================
// CART SIDEBAR
// ============================================
export function CartSidebar({ accentColor = '#ff6b35' }) {
  const { 
    items, 
    updateQuantity, 
    removeItem, 
    subtotal, 
    tax, 
    total, 
    isCartOpen, 
    setIsCartOpen,
    itemCount,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag size={24} style={{ color: accentColor }} />
            Your Order ({itemCount})
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-30" />
              <p>Your cart is empty</p>
              <p className="text-sm">Add some items to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div 
                  key={`${item.id}-${item.variant}-${index}`}
                  className="flex gap-4 p-3 bg-gray-50 rounded-xl"
                >
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    {item.variant && (
                      <p className="text-sm text-gray-500">{item.variant}</p>
                    )}
                    <p className="font-medium" style={{ color: accentColor }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-2 bg-white rounded-lg border">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:bg-gray-100 rounded-l-lg transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-gray-100 rounded-r-lg transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <a
              href="#checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 rounded-xl font-semibold text-white text-center transition-transform hover:scale-[1.02]"
              style={{ background: accentColor }}
            >
              Proceed to Checkout
              <ChevronRight size={20} className="inline ml-2" />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

// ============================================
// FLOATING CART BUTTON
// ============================================
export function FloatingCartButton({ accentColor = '#ff6b35' }) {
  const { itemCount, total, setIsCartOpen } = useCart();

  if (itemCount === 0) return null;

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-5 py-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
      style={{ background: accentColor }}
    >
      <div className="relative">
        <ShoppingBag size={24} />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full text-xs font-bold flex items-center justify-center"
          style={{ color: accentColor }}
        >
          {itemCount}
        </span>
      </div>
      <span className="font-semibold">${total.toFixed(2)}</span>
    </button>
  );
}

// ============================================
// CHECKOUT FORM
// ============================================
export function CheckoutForm({ 
  restaurantName = 'Restaurant',
  accentColor = '#ff6b35',
  onOrderSubmit, // Optional: custom handler (for future integrations)
}) {
  const { items, subtotal, tax, total, clearCart } = useCart();
  const [orderType, setOrderType] = useState('pickup');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    apt: '',
    instructions: '',
    scheduledTime: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (items.length === 0) {
      setErrorMessage('Your cart is empty');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Format order for submission
    const orderData = {
      restaurant: restaurantName,
      orderType,
      customer: formData,
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        variant: item.variant,
      })),
      subtotal,
      tax,
      total,
      timestamp: new Date().toISOString(),
    };

    // If custom handler provided, use it
    if (onOrderSubmit) {
      try {
        await onOrderSubmit(orderData);
        setStatus('success');
        clearCart();
        return;
      } catch (err) {
        setErrorMessage(err.message || 'Failed to submit order');
        setStatus('error');
        return;
      }
    }

    // Default: Use Web3Forms (same as contact form)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '9eb905d2-2fba-4295-bb14-4efb62c5bd80',
          subject: `🍽️ New Order from ${formData.name} - ${restaurantName}`,
          from_name: `${restaurantName} Orders`,
          // Format order nicely for email
          message: `
NEW ORDER - ${restaurantName.toUpperCase()}
================================

ORDER TYPE: ${orderType.toUpperCase()}
${formData.scheduledTime ? `SCHEDULED FOR: ${formData.scheduledTime}` : 'ASAP'}

CUSTOMER DETAILS
----------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
${orderType === 'delivery' ? `
DELIVERY ADDRESS
----------------
${formData.address}
${formData.apt ? `Apt/Suite: ${formData.apt}` : ''}
` : ''}
${formData.instructions ? `
SPECIAL INSTRUCTIONS
--------------------
${formData.instructions}
` : ''}

ORDER ITEMS
-----------
${items.map(item => 
  `${item.quantity}x ${item.name}${item.variant ? ` (${item.variant})` : ''} - $${(item.price * item.quantity).toFixed(2)}`
).join('\n')}

--------------------------------
Subtotal: $${subtotal.toFixed(2)}
Tax: $${tax.toFixed(2)}
TOTAL: $${total.toFixed(2)}
================================
          `.trim(),
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        clearCart();
      } else {
        throw new Error(data.message || 'Failed to submit order');
      }
    } catch (err) {
      setErrorMessage(err.message || 'Failed to submit order. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div id="checkout" className="max-w-xl mx-auto text-center py-16">
        <div 
          className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ background: `${accentColor}20` }}
        >
          <Check size={40} style={{ color: accentColor }} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Received!</h2>
        <p className="text-gray-600 mb-2">
          Thank you for your order. We've received it and will start preparing it shortly.
        </p>
        <p className="text-gray-600 mb-8">
          You'll receive a confirmation at <strong>{formData.email}</strong>
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '', phone: '', email: '', address: '', apt: '', instructions: '', scheduledTime: ''
            });
          }}
          className="px-8 py-3 rounded-xl font-semibold text-white"
          style={{ background: accentColor }}
        >
          Place Another Order
        </button>
      </div>
    );
  }

  return (
    <div id="checkout" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h2>
      
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
          {/* Order Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Order Type
            </label>
            <div className="flex gap-3">
              {['pickup', 'delivery'].map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setOrderType(type)}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium border-2 transition-all ${
                    orderType === type 
                      ? 'border-current text-white' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                  style={orderType === type ? { 
                    background: accentColor, 
                    borderColor: accentColor 
                  } : {}}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': accentColor }}
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2"
              placeholder="john@email.com"
            />
          </div>

          {/* Delivery Address */}
          {orderType === 'delivery' && (
            <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900">Delivery Address</h3>
              <div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required={orderType === 'delivery'}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2"
                  placeholder="123 Main Street, City, TX 78701"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="apt"
                  value={formData.apt}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2"
                  placeholder="Apt, Suite, Floor (optional)"
                />
              </div>
            </div>
          )}

          {/* Schedule */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              When do you want it?
            </label>
            <select
              name="scheduledTime"
              value={formData.scheduledTime}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 bg-white"
            >
              <option value="">ASAP</option>
              <option value="30min">In 30 minutes</option>
              <option value="1hr">In 1 hour</option>
              <option value="2hr">In 2 hours</option>
              <option value="later">Schedule for later</option>
            </select>
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Instructions (optional)
            </label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 resize-none"
              placeholder="Any allergies, preferences, or special requests..."
            />
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
              {errorMessage}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading' || items.length === 0}
            className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
            style={{ background: accentColor }}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={24} className="animate-spin" />
                Placing Order...
              </>
            ) : (
              <>
                Place Order - ${total.toFixed(2)}
              </>
            )}
          </button>

          <p className="text-center text-sm text-gray-500">
            By placing this order, you agree to our terms of service. 
            Payment will be collected at {orderType === 'pickup' ? 'pickup' : 'delivery'}.
          </p>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Order Summary</h3>
            
            {items.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-3 mb-6">
                  {items.map((item, index) => (
                    <div key={`${item.id}-${item.variant}-${index}`} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.quantity}x {item.name}
                      </span>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default {
  MenuItem,
  MenuSection,
  CartSidebar,
  FloatingCartButton,
  CheckoutForm,
};

