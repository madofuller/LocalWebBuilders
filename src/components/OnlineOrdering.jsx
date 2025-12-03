import { useLanguage } from '../context/LanguageContext';

// Platform configurations with brand colors and logos
const platforms = {
  doordash: {
    name: 'DoorDash',
    color: '#FF3008',
    hoverColor: '#E52B07',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 011.557 1.553 1.554 1.554 0 01-1.557 1.553H9.634a.589.589 0 00-.415 1.003l3.725 3.747a1.752 1.752 0 001.242.516h3.065a6.09 6.09 0 005.82-7.409z"/>
      </svg>
    ),
  },
  ubereats: {
    name: 'Uber Eats',
    color: '#000000',
    hoverColor: '#333333',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5h-9v-1.8h3.6V9.3H8.7V7.5h5.4v7.2h2.4v1.8z"/>
      </svg>
    ),
  },
  grubhub: {
    name: 'Grubhub',
    color: '#F63440',
    hoverColor: '#D92D38',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.75c-3.722 0-6.75-3.028-6.75-6.75S8.278 5.25 12 5.25 18.75 8.278 18.75 12 15.722 18.75 12 18.75z"/>
      </svg>
    ),
  },
  postmates: {
    name: 'Postmates',
    color: '#000000',
    hoverColor: '#333333',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8a7.2 7.2 0 110 14.4 7.2 7.2 0 010-14.4z"/>
      </svg>
    ),
  },
  toasttab: {
    name: 'Toast',
    color: '#FF6B35',
    hoverColor: '#E55A2B',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 12H8v-2h4v2zm4-4H8v-2h8v2z"/>
      </svg>
    ),
  },
  chownow: {
    name: 'ChowNow',
    color: '#FF5A5F',
    hoverColor: '#E54E52',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
  },
  square: {
    name: 'Square',
    color: '#006AFF',
    hoverColor: '#0056D6',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
      </svg>
    ),
  },
  direct: {
    name: 'Order Direct',
    color: '#10B981',
    hoverColor: '#059669',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
};

// Single Order Button
export function OrderButton({ 
  platform = 'doordash', 
  url = '#', 
  className = '',
  size = 'md',
  variant = 'filled' // 'filled' | 'outline' | 'ghost'
}) {
  const config = platforms[platform] || platforms.direct;
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 ${sizeClasses[size]}`;
  
  const variantStyles = {
    filled: {
      background: config.color,
      color: 'white',
    },
    outline: {
      background: 'transparent',
      border: `2px solid ${config.color}`,
      color: config.color,
    },
    ghost: {
      background: 'transparent',
      color: config.color,
    },
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
      style={variantStyles[variant]}
      onMouseEnter={(e) => {
        if (variant === 'filled') {
          e.currentTarget.style.background = config.hoverColor;
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'filled') {
          e.currentTarget.style.background = config.color;
        }
      }}
    >
      {config.icon}
      <span>Order on {config.name}</span>
    </a>
  );
}

// Multiple Platform Buttons
export function OrderButtons({ 
  links = [], // [{ platform: 'doordash', url: '...' }, ...]
  layout = 'row', // 'row' | 'column' | 'grid'
  size = 'md',
  className = '',
}) {
  const { t } = useLanguage();
  
  const layoutClasses = {
    row: 'flex flex-wrap gap-3',
    column: 'flex flex-col gap-3',
    grid: 'grid grid-cols-2 gap-3',
  };

  if (links.length === 0) {
    return null;
  }

  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      {links.map((link, index) => (
        <OrderButton
          key={index}
          platform={link.platform}
          url={link.url}
          size={size}
        />
      ))}
    </div>
  );
}

// Floating Order Bar (sticky at bottom)
export function OrderBar({
  links = [],
  restaurantName = 'Restaurant',
  backgroundColor = '#000000',
  className = '',
}) {
  const { t } = useLanguage();

  if (links.length === 0) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 py-4 px-6 ${className}`}
      style={{ background: backgroundColor }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white">
          <p className="font-semibold">{t('orderOnline')} from {restaurantName}</p>
          <p className="text-sm opacity-70">Delivery & Pickup Available</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => (
            <OrderButton
              key={index}
              platform={link.platform}
              url={link.url}
              size="sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Order Modal/Popup
export function OrderModal({
  isOpen,
  onClose,
  links = [],
  restaurantName = 'Restaurant',
}) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div 
        className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('orderOnline')}
        </h2>
        <p className="text-gray-600 mb-6">
          Choose your preferred delivery platform
        </p>
        
        <div className="flex flex-col gap-3">
          {links.map((link, index) => (
            <OrderButton
              key={index}
              platform={link.platform}
              url={link.url}
              size="lg"
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderButton;

