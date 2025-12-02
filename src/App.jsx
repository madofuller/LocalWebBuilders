import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Showcase Pages
import CalaShowcase from './pages/CalaShowcase';
import CateringShowcase from './pages/CateringShowcase';
import BBQShowcase from './pages/BBQShowcase';
import AfricanShowcase from './pages/AfricanShowcase';
import VeganBrandShowcase from './pages/VeganBrandShowcase';
import PlantBasedShowcase from './pages/PlantBasedShowcase';
import SmashBurgerShowcase from './pages/SmashBurgerShowcase';
import GourmetMeatsShowcase from './pages/GourmetMeatsShowcase';

// Additional Template Pages
import BBQMenu from './pages/BBQMenu';
import BBQAbout from './pages/BBQAbout';
import BBQLocations from './pages/BBQLocations';
import BBQCatering from './pages/BBQCatering';
import MediterraneanMenu from './pages/MediterraneanMenu';
import MediterraneanAbout from './pages/MediterraneanAbout';
import MediterraneanLocations from './pages/MediterraneanLocations';
import AfricanProduct from './pages/AfricanProduct';
import AfricanShop from './pages/AfricanShop';
import AfricanRecipes from './pages/AfricanRecipes';
import SmashBurgerMenu from './pages/SmashBurgerMenu';

// Business Pages
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

// Portfolio Landing Page
function PortfolioHome() {
  const templates = [
    { 
      path: '/mediterranean', 
      name: 'Solara', 
      type: 'Mediterranean Restaurant',
      colors: ['#F5E6D3', '#E85D3B', '#F4B942'],
      emoji: '☀️'
    },
    { 
      path: '/catering', 
      name: 'Joyful Table', 
      type: 'Catering & Events',
      colors: ['#FFEEE4', '#FF6B4A', '#FFB299'],
      emoji: '🍽️'
    },
    { 
      path: '/bbq', 
      name: 'Oakfire', 
      type: 'Smokehouse & Bar',
      colors: ['#F5E6D3', '#1B4D5C', '#E8805C'],
      emoji: '🔥'
    },
    { 
      path: '/african', 
      name: 'Safari Spice', 
      type: 'African Flavors Brand',
      colors: ['#2D9E4F', '#E63946', '#FFD23F'],
      emoji: '🌍'
    },
    { 
      path: '/vegan', 
      name: 'Golden Yeast', 
      type: 'Vegan Food Brand',
      colors: ['#2D8B4E', '#FFE03D', '#E94E8C'],
      emoji: '🌱'
    },
    { 
      path: '/plant-based', 
      name: 'Bloom Kitchen', 
      type: 'Plant-Based Spreads',
      colors: ['#A8C5A8', '#F4A460', '#E8B4B8'],
      emoji: '🌸'
    },
    { 
      path: '/smash-burger', 
      name: 'TopStack', 
      type: 'Smash Burger Joint',
      colors: ['#FFE135', '#1A1A1A', '#E63946'],
      emoji: '🍔'
    },
    { 
      path: '/gourmet-meats', 
      name: "Phil's Prime", 
      type: 'Gourmet Meats & Sausages',
      colors: ['#B8E4D8', '#FFCBA4', '#C5B9E8'],
      emoji: '🥩'
    }
  ];

  return (
    <div
      className="min-h-screen py-8 md:py-20 px-4 md:px-6"
      style={{
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          {/* Top Nav */}
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h1
              className="text-xl md:text-3xl font-bold text-white"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              LocalWebBuilders
            </h1>
            <div className="flex items-center gap-2 md:gap-4">
              <Link
                to="/pricing"
                className="text-white/70 hover:text-white transition-colors text-xs md:text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 md:px-5 md:py-2.5 rounded-lg font-medium text-xs md:text-sm transition-all hover:scale-105"
                style={{ background: '#ff6b35', color: 'white' }}
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Title & Description */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6">
              <span className="text-xs md:text-sm text-white/60">Restaurant & Food Brand Templates</span>
            </div>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Beautiful Websites,<br/>Built Fast
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
              Professional websites for local restaurants and food brands.
              Pick a style, we handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link
                to="/pricing"
                className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all hover:scale-105"
                style={{ background: '#ff6b35', color: 'white' }}
              >
                View Pricing →
              </Link>
              <a
                href="#templates"
                className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all hover:scale-105 border border-white/20 text-white hover:bg-white/5"
              >
                Browse Templates
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12 md:mb-20 px-4">
          {[
            { value: '8+', label: 'Templates' },
            { value: '5-7', label: 'Days' },
            { value: '100%', label: 'Happy' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Template Grid */}
        <div id="templates" className="scroll-mt-8 px-4 md:px-0">
          <h3 className="text-base md:text-xl font-bold text-white/60 mb-6 md:mb-8 text-center uppercase tracking-wider">
            Choose Your Style
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {templates.map((template, i) => (
              <Link 
                key={i}
                to={template.path}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{ background: '#14141f' }}
              >
                {/* Color bar preview */}
                <div className="h-2 flex">
                  {template.colors.map((color, j) => (
                    <div key={j} className="flex-1" style={{ background: color }} />
                  ))}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs text-white/40 uppercase tracking-wider">
                        {template.type}
                      </span>
                      <h2 className="text-2xl font-bold text-white mt-1">
                        {template.name}
                      </h2>
                    </div>
                    <span className="text-3xl">{template.emoji}</span>
                  </div>

                  {/* Color swatches */}
                  <div className="flex gap-2 mb-4">
                    {template.colors.map((color, j) => (
                      <div 
                        key={j}
                        className="w-6 h-6 rounded-md border border-white/10"
                        style={{ background: color }}
                      />
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">View Demo</span>
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 md:mt-20 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center mx-4 md:mx-0"
          style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #8b5cf6 100%)' }}
        >
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Ready to Get Started?
          </h3>
          <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-xl mx-auto">
            Pick a template you love and we'll customize it for your business.
            Delivered in as little as 5 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all hover:scale-105"
              style={{ background: 'white', color: '#0a0a0f' }}
            >
              Start Your Project
            </Link>
            <Link
              to="/pricing"
              className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all hover:scale-105 border-2 border-white text-white"
            >
              See Pricing
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 md:mt-20 text-center text-white/30 text-xs md:text-sm px-4">
          <p>© 2025 LocalWebBuilders. All templates are fully customizable.</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Portfolio Home */}
        <Route path="/" element={<PortfolioHome />} />
        
        {/* Business Pages */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Showcase Templates */}
        <Route path="/mediterranean" element={<CalaShowcase />} />
        <Route path="/mediterranean/menu" element={<MediterraneanMenu />} />
        <Route path="/mediterranean/about" element={<MediterraneanAbout />} />
        <Route path="/mediterranean/locations" element={<MediterraneanLocations />} />
        
        <Route path="/catering" element={<CateringShowcase />} />
        
        <Route path="/bbq" element={<BBQShowcase />} />
        <Route path="/bbq/menu" element={<BBQMenu />} />
        <Route path="/bbq/about" element={<BBQAbout />} />
        <Route path="/bbq/locations" element={<BBQLocations />} />
        <Route path="/bbq/catering" element={<BBQCatering />} />
        
        <Route path="/african" element={<AfricanShowcase />} />
        <Route path="/african/product" element={<AfricanProduct />} />
        <Route path="/african/shop" element={<AfricanShop />} />
        <Route path="/african/recipes" element={<AfricanRecipes />} />
        
        <Route path="/vegan" element={<VeganBrandShowcase />} />
        <Route path="/plant-based" element={<PlantBasedShowcase />} />
        
        <Route path="/smash-burger" element={<SmashBurgerShowcase />} />
        <Route path="/smash-burger/menu" element={<SmashBurgerMenu />} />
        
        <Route path="/gourmet-meats" element={<GourmetMeatsShowcase />} />
      </Routes>
    </Router>
  );
}
