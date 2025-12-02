import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Showcase Pages
import CalaShowcase from './pages/CalaShowcase';
import CateringShowcase from './pages/CateringShowcase';
import BBQShowcase from './pages/BBQShowcase';
import AfricanShowcase from './pages/AfricanShowcase';

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
    }
  ];

  return (
    <div 
      className="min-h-screen py-20 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm text-white/60">Restaurant Templates</span>
          </div>
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Template<br/>Portfolio
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Beautiful, production-ready restaurant website templates. 
            Click any template to view the full demo.
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-sm text-white/40 uppercase tracking-wider">
                      {template.type}
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-1">
                      {template.name}
                    </h2>
                  </div>
                  <span className="text-4xl">{template.emoji}</span>
                </div>

                {/* Color swatches */}
                <div className="flex gap-2 mb-6">
                  {template.colors.map((color, j) => (
                    <div 
                      key={j}
                      className="w-8 h-8 rounded-lg border border-white/10"
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

        {/* Footer */}
        <div className="mt-20 text-center text-white/30 text-sm">
          <p>© 2025 Restaurant Template System. All templates are fully customizable.</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Portfolio Home */}
        <Route path="/" element={<PortfolioHome />} />
        
        {/* Showcase Templates */}
        <Route path="/mediterranean" element={<CalaShowcase />} />
        <Route path="/catering" element={<CateringShowcase />} />
        <Route path="/bbq" element={<BBQShowcase />} />
        <Route path="/african" element={<AfricanShowcase />} />
      </Routes>
    </Router>
  );
}
