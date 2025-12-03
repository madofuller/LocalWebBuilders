import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Check, X, ArrowRight, Clock, FileText, CreditCard, Sparkles, ArrowLeft } from 'lucide-react';

const colors = {
  bg: '#0a0a0f',
  surface: '#14141f',
  surfaceHover: '#1a1a2e',
  border: '#2a2a3e',
  text: '#f0f0f5',
  textMuted: '#8888a0',
  accent: '#ff6b35',
  green: '#10b981',
  red: '#ef4444'
};

const templateOptions = [
  { value: 'coastline', name: 'Coastline Kitchen', type: 'Coastal Cuisine' },
  { value: 'gathered', name: 'Gathered', type: 'Farm to Table Catering' },
  { value: 'smoke-ember', name: 'Smoke & Ember', type: 'BBQ' },
  { value: 'harlem-heat', name: 'Harlem Heat', type: 'African Spices' },
  { value: 'sprout', name: 'Sprout & Co', type: 'Plant-Based' },
  { value: 'wild-greens', name: 'Wild Greens', type: 'Comfort Food' },
  { value: 'griddle-house', name: 'Griddle House', type: 'Smash Burgers' },
  { value: 'butcher-bloom', name: 'Butcher & Bloom', type: 'Artisan Meats' },
  { value: 'not-sure', name: "Help me choose", type: "We'll recommend the best fit" }
];

const plans = {
  'starter': {
    name: 'Starter',
    priceMonthly: 19,
    priceYearly: 12,
    features: ['5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO', '2 revisions']
  },
  'professional': {
    name: 'Professional',
    priceMonthly: 29,
    priceYearly: 18,
    features: ['7 pages', 'Mobile responsive', 'Contact form', 'Advanced SEO', 'Menu integration', 'Social links', '3 revisions']
  },
  'enterprise': {
    name: 'Enterprise',
    priceMonthly: 49,
    priceYearly: 33,
    features: ['10 pages', 'Mobile responsive', 'Contact form', 'Advanced SEO', 'Online ordering page', 'Menu integration', 'Multi-language', '5 revisions']
  }
};

const included = [
  'Custom template customization',
  'Mobile-responsive design',
  'Contact form with email notifications',
  'Google Maps integration',
  'Social media links',
  'Basic SEO optimization',
  'SSL security certificate',
  'Managed hosting included',
  '24/7 uptime monitoring'
];

const notIncluded = [
  'Logo design (available as add-on: $200)',
  'Professional photography',
  'Additional pages beyond plan limit ($50/page)',
  'Custom features not in template',
  'Third-party integrations',
  'Content writing (we use what you provide)'
];

export default function Proposal() {
  const [searchParams] = useSearchParams();
  
  // Get initial values from URL
  const urlBilling = searchParams.get('billing') || 'yearly';
  const urlPlan = searchParams.get('plan') || 'professional';
  const urlTemplate = searchParams.get('template') || '';
  const urlName = searchParams.get('name') || '';
  const urlBusiness = searchParams.get('business') || '';
  const urlEmail = searchParams.get('email') || '';

  // Check if we have client info
  const hasClientInfo = urlName && urlBusiness && urlEmail;

  // State
  const [step, setStep] = useState(hasClientInfo ? 'proposal' : 'info'); // 'info' or 'proposal'
  const [billing, setBilling] = useState(urlBilling);
  const [agreed, setAgreed] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    name: urlName,
    email: urlEmail,
    phone: '',
    businessName: urlBusiness,
    template: urlTemplate
  });
  const [selectedPlan, setSelectedPlan] = useState(urlPlan);

  const plan = plans[selectedPlan] || plans['professional'];
  const template = templateOptions.find(t => t.value === clientInfo.template) || templateOptions[0];
  const price = billing === 'yearly' ? plan.priceYearly : plan.priceMonthly;
  const savings = billing === 'yearly' ? (plan.priceMonthly - plan.priceYearly) * 12 : 0;

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    setStep('proposal');
  };

  const handlePayment = () => {
    // This would integrate with Stripe Checkout
    // For now, show alert with details
    const params = new URLSearchParams({
      name: clientInfo.name,
      business: clientInfo.businessName,
      email: clientInfo.email,
      template: clientInfo.template,
      plan: selectedPlan,
      billing: billing
    });
    
    alert(`Ready for Stripe integration!\n\nClient: ${clientInfo.name}\nBusiness: ${clientInfo.businessName}\nEmail: ${clientInfo.email}\nPlan: ${plan.name}\nBilling: ${billing}\nPrice: $${price}/mo\n\nOnce Stripe is connected, this will create a checkout session.`);
  };

  const inputStyle = {
    background: colors.surface,
    color: colors.text,
    border: `1px solid ${colors.border}`
  };

  // Step 1: Collect client info
  if (step === 'info') {
    return (
      <div className="min-h-screen" style={{ background: colors.bg }}>
        {/* Header */}
        <header className="px-6 py-6 border-b" style={{ borderColor: colors.border }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Link
              to="/pricing"
              className="flex items-center gap-2 text-sm hover:opacity-70"
              style={{ color: colors.textMuted }}
            >
              <ArrowLeft size={18} />
              Back to Pricing
            </Link>
            <Link
              to="/"
              className="font-bold flex items-center gap-2"
              style={{ fontFamily: "'Space Mono', monospace", color: colors.text }}
            >
              <span className="w-9 h-8 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: colors.accent, color: 'white' }}>
                LWB
              </span>
            </Link>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-6 py-12">
          {/* Plan Badge */}
          <div className="text-center mb-8">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ background: `${colors.accent}20`, color: colors.accent }}
            >
              <Sparkles size={16} />
              {plan.name} Plan Selected
            </div>
            <h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.text, fontFamily: "'Space Mono', monospace" }}
            >
              Let's get to know you
            </h1>
            <p style={{ color: colors.textMuted }}>
              Fill in your details to see your complete proposal
            </p>
          </div>

          <form onSubmit={handleInfoSubmit} className="space-y-6">
            <div 
              className="p-6 rounded-2xl space-y-5"
              style={{ background: colors.surface, border: `1px solid ${colors.border}` }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="john@restaurant.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientInfo.businessName}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, businessName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="Amazing Restaurant"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                  Which template style do you prefer? *
                </label>
                <select
                  required
                  value={clientInfo.template}
                  onChange={(e) => setClientInfo(prev => ({ ...prev, template: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={inputStyle}
                >
                  <option value="">Select a template...</option>
                  {templateOptions.map(t => (
                    <option key={t.value} value={t.value}>{t.name} - {t.type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Plan Summary */}
            <div 
              className="p-5 rounded-xl flex items-center justify-between"
              style={{ background: `${colors.accent}10`, border: `1px solid ${colors.accent}30` }}
            >
              <div>
                <p className="font-medium" style={{ color: colors.text }}>{plan.name} Plan</p>
                <p className="text-sm" style={{ color: colors.textMuted }}>
                  {billing === 'yearly' ? `$${plan.priceYearly}/mo billed yearly` : `$${plan.priceMonthly}/mo billed monthly`}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setBilling('yearly')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${billing === 'yearly' ? '' : 'opacity-50'}`}
                  style={{ background: billing === 'yearly' ? colors.accent : colors.surfaceHover, color: colors.text }}
                >
                  Yearly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling('monthly')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${billing === 'monthly' ? '' : 'opacity-50'}`}
                  style={{ background: billing === 'monthly' ? colors.accent : colors.surfaceHover, color: colors.text }}
                >
                  Monthly
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              style={{ background: colors.accent, color: 'white' }}
            >
              View My Proposal
              <ArrowRight size={20} />
            </button>
          </form>
        </main>
      </div>
    );
  }

  // Step 2: Full proposal view
  return (
    <div className="min-h-screen" style={{ background: colors.bg }}>
      {/* Header */}
      <header className="px-6 py-6 border-b" style={{ borderColor: colors.border }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="font-bold flex items-center gap-2"
            style={{ fontFamily: "'Space Mono', monospace", color: colors.text }}
          >
            <span className="w-9 h-8 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: colors.accent, color: 'white' }}>
              LWB
            </span>
            <span className="text-xl">LocalWebBuilders</span>
          </Link>
          <div className="text-sm" style={{ color: colors.textMuted }}>
            Proposal for {clientInfo.businessName}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Greeting */}
        <div className="text-center mb-12">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.text, fontFamily: "'Space Mono', monospace" }}
          >
            Hi {clientInfo.name.split(' ')[0]}!
          </h1>
          <p className="text-lg" style={{ color: colors.textMuted }}>
            Here's your custom website proposal for <strong style={{ color: colors.text }}>{clientInfo.businessName}</strong>
          </p>
        </div>

        {/* Template Choice */}
        <div 
          className="p-6 rounded-2xl mb-8"
          style={{ background: colors.surface, border: `1px solid ${colors.border}` }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${colors.accent}20` }}
            >
              <Sparkles size={24} style={{ color: colors.accent }} />
            </div>
            <div>
              <h2 className="text-xl font-bold" style={{ color: colors.text }}>
                {template.name} Template
              </h2>
              <p className="text-sm" style={{ color: colors.textMuted }}>{template.type}</p>
            </div>
          </div>
          <p style={{ color: colors.textMuted }}>
            We'll customize this template specifically for {clientInfo.businessName} with your branding, 
            content, and unique style.
          </p>
        </div>

        {/* Plan Selection */}
        <div 
          className="p-6 rounded-2xl mb-8"
          style={{ background: colors.surface, border: `1px solid ${colors.border}` }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold" style={{ color: colors.text }}>
              {plan.name} Plan
            </h2>
            
            {/* Billing Toggle */}
            <div 
              className="flex rounded-lg p-1"
              style={{ background: colors.bg }}
            >
              <button
                onClick={() => setBilling('yearly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${billing === 'yearly' ? '' : 'opacity-60'}`}
                style={{ 
                  background: billing === 'yearly' ? colors.accent : 'transparent',
                  color: colors.text
                }}
              >
                Yearly (Save ${savings})
              </button>
              <button
                onClick={() => setBilling('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${billing === 'monthly' ? '' : 'opacity-60'}`}
                style={{ 
                  background: billing === 'monthly' ? colors.accent : 'transparent',
                  color: colors.text
                }}
              >
                Monthly
              </button>
            </div>
          </div>

          <div className="flex items-end gap-2 mb-6">
            <span className="text-5xl font-bold" style={{ color: colors.text }}>${price}</span>
            <span className="text-lg mb-1" style={{ color: colors.textMuted }}>/month</span>
            {billing === 'yearly' && (
              <span 
                className="ml-2 px-2 py-1 rounded text-xs font-medium"
                style={{ background: `${colors.green}20`, color: colors.green }}
              >
                Billed annually (${price * 12}/yr)
              </span>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {plan.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check size={16} style={{ color: colors.green }} />
                <span className="text-sm" style={{ color: colors.text }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div 
            className="p-6 rounded-2xl"
            style={{ background: colors.surface, border: `1px solid ${colors.border}` }}
          >
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.green }}>
              <Check size={18} /> What's Included
            </h3>
            <ul className="space-y-2">
              {included.map((item, i) => (
                <li key={i} className="text-sm flex items-start gap-2" style={{ color: colors.textMuted }}>
                  <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: colors.green }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div 
            className="p-6 rounded-2xl"
            style={{ background: colors.surface, border: `1px solid ${colors.border}` }}
          >
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.red }}>
              <X size={18} /> What's NOT Included
            </h3>
            <ul className="space-y-2">
              {notIncluded.map((item, i) => (
                <li key={i} className="text-sm flex items-start gap-2" style={{ color: colors.textMuted }}>
                  <X size={14} className="flex-shrink-0 mt-0.5" style={{ color: colors.red }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div 
          className="p-6 rounded-2xl mb-8"
          style={{ background: colors.surface, border: `1px solid ${colors.border}` }}
        >
          <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
            <Clock size={18} style={{ color: colors.accent }} /> Timeline
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-xl" style={{ background: colors.bg }}>
              <div className="text-2xl font-bold" style={{ color: colors.accent }}>1</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>You pay & submit assets</div>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ background: colors.bg }}>
              <div className="text-2xl font-bold" style={{ color: colors.accent }}>5-7</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>Days to build your site</div>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ background: colors.bg }}>
              <div className="text-2xl font-bold" style={{ color: colors.accent }}>2</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>Rounds of revisions</div>
            </div>
          </div>
        </div>

        {/* What You Provide */}
        <div 
          className="p-6 rounded-2xl mb-8"
          style={{ background: `${colors.accent}10`, border: `1px solid ${colors.accent}30` }}
        >
          <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
            <FileText size={18} style={{ color: colors.accent }} /> What You'll Provide (After Payment)
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm" style={{ color: colors.textMuted }}>
            <div>- Logo files (PNG/SVG)</div>
            <div>- Brand colors (if any preference)</div>
            <div>- Menu / services list</div>
            <div>- Business hours & contact info</div>
            <div>- Location address</div>
            <div>- Food photos (or we use stock)</div>
            <div>- Social media links</div>
            <div>- Any specific text/copy</div>
          </div>
          <p className="mt-4 text-sm" style={{ color: colors.accent }}>
            We'll send you an easy onboarding form after payment to collect everything.
          </p>
        </div>

        {/* Agreement & Pay */}
        <div 
          className="p-6 rounded-2xl"
          style={{ background: colors.surface, border: `1px solid ${colors.border}` }}
        >
          <label className="flex items-start gap-3 mb-6 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 rounded accent-orange-500"
            />
            <span className="text-sm" style={{ color: colors.textMuted }}>
              I understand and agree to the scope above. I will provide the required assets within 7 days of payment. 
              The monthly subscription will continue until cancelled, and the website is managed by LocalWebBuilders.
            </span>
          </label>

          <button
            onClick={handlePayment}
            disabled={!agreed}
            className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
            style={{ background: colors.accent, color: 'white' }}
          >
            <CreditCard size={20} />
            Pay ${price}/month & Get Started
            <ArrowRight size={20} />
          </button>

          <p className="text-center text-xs mt-4" style={{ color: colors.textMuted }}>
            Secure payment powered by Stripe. Cancel anytime.
          </p>
        </div>

        {/* Questions */}
        <div className="text-center mt-12" style={{ color: colors.textMuted }}>
          <p className="mb-2">Have questions about this proposal?</p>
          <a 
            href="mailto:contact@localwebbuilders.com"
            className="font-medium hover:underline"
            style={{ color: colors.accent }}
          >
            contact@localwebbuilders.com
          </a>
        </div>
      </main>
    </div>
  );
}
