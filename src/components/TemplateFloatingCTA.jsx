import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export default function TemplateFloatingCTA({ templateName, templateSlug }) {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top bar - static, not fixed - sits above template navbar */}
      <div 
        className="w-full py-3 px-4 flex items-center justify-between"
        style={{ 
          background: 'rgba(10, 10, 15, 0.98)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">All Templates</span>
        </Link>
        
        <span className="text-sm text-white/50">
          Viewing: <span className="text-white font-medium">{templateName}</span>
        </span>

        <div className="flex items-center gap-3">
          <Link 
            to="/pricing"
            className="text-sm text-white/70 hover:text-white transition-colors hidden sm:block"
          >
            Pricing
          </Link>
          <Link 
            to={`/contact?template=${templateSlug}`}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
            style={{ background: '#ff6b35', color: 'white' }}
          >
            Get This Template
          </Link>
        </div>
      </div>

      {/* Bottom floating bar - shows on scroll */}
      {!dismissed && (
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          }`}
        >
          <div 
            className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl"
            style={{ 
              background: 'rgba(10, 10, 15, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div className="hidden sm:block">
              <p className="text-white font-medium">Love this design?</p>
              <p className="text-white/50 text-sm">Starting at $12/mo</p>
            </div>
            
            <Link 
              to={`/contact?template=${templateSlug}`}
              className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
              style={{ background: '#ff6b35', color: 'white' }}
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <button 
              onClick={() => setDismissed(true)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/50 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
