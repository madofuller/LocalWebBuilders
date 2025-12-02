import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowLeft, Sparkles, Zap, Rocket, X } from 'lucide-react';

/* ============================================
   PRICING PAGE - Unique, bold, anti-bootstrap
   Competing with Squarespace pricing model
   ============================================ */

// Theme colors
const colors = {
  bg: '#0a0a0f',
  surface: '#14141f',
  surfaceHover: '#1a1a2e',
  border: '#2a2a3e',
  text: '#f0f0f5',
  textMuted: '#8888a0',
  accent: '#ff6b35',
  accentHover: '#ff8555',
  green: '#10b981'
};

const plans = [
  {
    id: 'personal',
    name: 'Personal',
    tagline: 'For simple sites',
    monthlyPrice: 19,
    yearlyPrice: 12,
    sqspMonthly: 25,
    sqspYearly: 16,
    color: colors.accent,
    features: [
      'Custom website built for you',
      'Fast, secure hosting included',
      'SSL certificate included',
      'Mobile responsive design',
      'Basic SEO setup',
      'Email support'
    ],
    excluded: ['Online ordering', 'Priority support', 'Monthly content updates']
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'For growing restaurants',
    monthlyPrice: 29,
    yearlyPrice: 18,
    sqspMonthly: 36,
    sqspYearly: 23,
    color: colors.accent,
    popular: true,
    features: [
      'Everything in Personal',
      'Online ordering integration',
      'Google Maps & reviews',
      'Social media integration',
      'Analytics dashboard',
      'Priority email support',
      'Monthly backups'
    ],
    excluded: ['Monthly content updates']
  },
  {
    id: 'commerce',
    name: 'Commerce',
    tagline: 'Full-service solution',
    monthlyPrice: 49,
    yearlyPrice: 33,
    sqspMonthly: 59,
    sqspYearly: 39,
    color: colors.accent,
    features: [
      'Everything in Business',
      'Full e-commerce/ordering',
      'Reservation system',
      'Newsletter integration',
      'Monthly content updates',
      'Phone & email support',
      'Priority bug fixes',
      'Performance monitoring'
    ],
    excluded: []
  }
];

const comparisons = [
  { name: 'Squarespace', price: '$16-39/mo', note: 'DIY - you build & manage it yourself' },
  { name: 'Wix', price: '$17-35/mo', note: 'DIY - limited customization' },
  { name: 'Web Agency', price: '$3,000+', note: 'One-time fee + hosting extra' },
  { name: 'Us', price: '$12-33/mo', note: 'Done-for-you + hosting included ✨', highlight: true }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  return (
    <div
      className="min-h-screen"
      style={{
        background: colors.bg,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Navigation */}
      <nav className="px-6 py-6 border-b" style={{ borderColor: colors.border }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold"
            style={{ fontFamily: "'Space Mono', monospace", color: colors.text }}
          >
            LocalWebBuilders
          </Link>

          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: colors.textMuted }}
            >
              Templates
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
              style={{ background: colors.accent, color: 'white' }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 pt-12 pb-8 text-center">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          style={{ fontFamily: "'Space Mono', monospace", color: colors.text }}
        >
          Cheaper than<br/>
          <span style={{ color: colors.accent }}>
            doing it yourself
          </span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12" style={{ color: colors.textMuted }}>
          We build it. We host it. We maintain it.<br/>
          You just run your business.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm transition-colors ${!isYearly ? 'text-white' : 'text-white/40'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 rounded-full p-1 transition-colors"
            style={{ background: isYearly ? '#ff6b35' : '#333' }}
          >
            <div 
              className="w-6 h-6 rounded-full bg-white transition-transform shadow-lg"
              style={{ transform: isYearly ? 'translateX(32px)' : 'translateX(0)' }}
            />
          </button>
          <span className={`text-sm transition-colors ${isYearly ? 'text-white' : 'text-white/40'}`}>
            Yearly
            <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400">
              Save 25%
            </span>
          </span>
        </div>
      </section>

      {/* Pricing Cards - Unique stacked/offset design */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 md:gap-0">
            {plans.map((plan, i) => (
              <div
                key={plan.id}
                className={`relative transition-all duration-500 ${
                  plan.popular ? 'md:-mt-8 md:mb-8 z-20' : 'z-10'
                }`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  transform: hoveredPlan === plan.id ? 'translateY(-8px)' : 'translateY(0)'
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white z-30"
                    style={{ background: plan.color }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div
                  className={`h-full rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-white/[0.08] border-white/20' 
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                  }`}
                  style={{
                    boxShadow: plan.popular 
                      ? `0 0 60px -15px ${plan.color}40` 
                      : hoveredPlan === plan.id 
                        ? `0 0 40px -15px ${plan.color}30`
                        : 'none'
                  }}
                >
                  {/* Plan header */}
                  <div className="mb-8">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${plan.color}20` }}
                    >
                      {i === 0 && <Zap size={20} style={{ color: plan.color }} />}
                      {i === 1 && <Sparkles size={20} style={{ color: plan.color }} />}
                      {i === 2 && <Rocket size={20} style={{ color: plan.color }} />}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-sm text-white/50">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-white/40">/mo</span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-white/30 mt-1">
                        Billed ${plan.yearlyPrice * 12}/year
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/contact?plan=${plan.id}`}
                    className={`w-full py-4 rounded-xl font-semibold text-center block mb-8 transition-all hover:scale-[1.02] ${
                      plan.popular ? 'text-white' : 'text-white/90 hover:text-white'
                    }`}
                    style={{ 
                      background: plan.popular 
                        ? `linear-gradient(135deg, ${plan.color}, ${plan.color}dd)` 
                        : 'rgba(255,255,255,0.1)'
                    }}
                  >
                    Get Started
                  </Link>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${plan.color}20` }}
                        >
                          <Check size={12} style={{ color: plan.color }} />
                        </div>
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                    {plan.excluded.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3 opacity-40">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
                          <X size={12} className="text-white/30" />
                        </div>
                        <span className="text-sm text-white/40 line-through">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Compare & save
          </h2>
          <p className="text-white/50 text-center mb-12">
            See how we stack up against the alternatives
          </p>

          <div className="space-y-3">
            {comparisons.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                  item.highlight
                    ? 'bg-orange-500/10 border-orange-500/30'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                      item.highlight ? 'bg-orange-500 text-white' : 'bg-white/5 text-white/30'
                    }`}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${item.highlight ? 'text-white' : 'text-white/70'}`}>
                      {item.name}
                    </h4>
                    <p className="text-sm text-white/40">{item.note}</p>
                  </div>
                </div>
                <div className={`text-right ${item.highlight ? 'text-orange-400' : 'text-white/50'}`}>
                  <span className="text-xl font-bold">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Visual */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12 border border-white/10"
            style={{ background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(249, 115, 22, 0.1))' }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Everything included.<br/>
                  <span className="text-orange-400">Zero hassle.</span>
                </h2>
                <p className="text-white/50 mb-8">
                  We handle the tech so you can focus on your business. 
                  Hosting, security, updates — it's all taken care of.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Fast, reliable hosting',
                    'SSL security certificate',
                    'Custom domain setup',
                    'Automatic backups',
                    'Mobile responsive',
                    'SEO optimization',
                    'Ongoing maintenance',
                    '99.9% uptime guarantee'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20" />
                  <div className="absolute inset-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 p-4">
                    <div className="flex gap-1.5 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-white/10 rounded w-3/4" />
                      <div className="h-4 bg-white/10 rounded w-1/2" />
                      <div className="h-20 bg-white/5 rounded mt-4" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-white/5 rounded" />
                        <div className="h-12 bg-white/5 rounded" />
                        <div className="h-12 bg-white/5 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Questions? Answers.
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'What do I need to get started?',
                a: 'Just your logo, menu info, and business details. We handle everything else.'
              },
              {
                q: 'How long until my site is live?',
                a: '3-5 business days for most projects. We work fast.'
              },
              {
                q: "What's included in the monthly fee?",
                a: 'Everything: hosting, SSL security, maintenance, backups, and support. No hidden fees.'
              },
              {
                q: 'What if I need changes later?',
                a: "Just email us! Small updates are included. Commerce plans include monthly content updates."
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, cancel anytime. No long-term contracts. Your site stays live until the end of your billing period.'
              }
            ].map((faq, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-white/50">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Ready to ditch the DIY?
          </h2>
          <p className="text-xl text-white/50 mb-10">
            Pick a template. We'll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 rounded-xl font-semibold text-white/90 bg-white/10 hover:bg-white/15 transition-colors"
            >
              Browse Templates
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{ background: '#ff6b35' }}
            >
              Start for ${isYearly ? '12' : '19'}/month
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm text-white/30">© 2025 LocalWebBuilders</p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-sm text-white/30 hover:text-white/60">Contact</Link>
            <Link to="/" className="text-sm text-white/30 hover:text-white/60">Templates</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
