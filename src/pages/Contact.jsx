import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, Mail, Phone, Loader2, AlertCircle, Check, X as XIcon } from 'lucide-react';

const colors = {
  bg: '#0a0a0f',
  surface: '#14141f',
  surfaceHover: '#1a1a2e',
  border: '#2a2a3e',
  text: '#f0f0f5',
  textMuted: '#8888a0',
  accent: '#ff6b35',
  accentHover: '#ff8555',
  green: '#10b981',
  red: '#ef4444'
};

const templates = [
  { value: 'coastline', label: 'Coastline Kitchen - Coastal Cuisine' },
  { value: 'gathered', label: 'Gathered - Farm to Table Catering' },
  { value: 'smoke-ember', label: 'Smoke & Ember - BBQ' },
  { value: 'harlem-heat', label: 'Harlem Heat - African Spices' },
  { value: 'sprout', label: 'Sprout & Co - Plant-Based' },
  { value: 'wild-greens', label: 'Wild Greens - Comfort Food' },
  { value: 'griddle-house', label: 'Griddle House - Smash Burgers' },
  { value: 'butcher-bloom', label: "Butcher & Bloom - Artisan Meats" },
  { value: 'not-sure', label: "Not sure yet - help me choose" }
];

const plans = [
  { value: 'starter', label: 'Starter - $12/mo yearly ($19 monthly)' },
  { value: 'professional', label: 'Professional - $18/mo yearly ($29 monthly) ⭐ Popular' },
  { value: 'enterprise', label: 'Enterprise - $33/mo yearly ($49 monthly)' },
  { value: 'not-sure', label: 'Not sure yet - help me choose' }
];

const businessTypes = [
  { value: 'restaurant', label: 'Restaurant / Dine-in' },
  { value: 'cafe', label: 'Cafe / Coffee Shop' },
  { value: 'foodtruck', label: 'Food Truck' },
  { value: 'catering', label: 'Catering Company' },
  { value: 'bakery', label: 'Bakery / Desserts' },
  { value: 'bar', label: 'Bar / Lounge' },
  { value: 'fastcasual', label: 'Fast Casual' },
  { value: 'finedining', label: 'Fine Dining' },
  { value: 'ghost', label: 'Ghost Kitchen / Delivery Only' },
  { value: 'other', label: 'Other' }
];

// ============================================
// CONFIGURATION - Update this with your Web3Forms access key
// Get your free key at: https://web3forms.com/
// ============================================
const WEB3FORMS_ACCESS_KEY = '9eb905d2-2fba-4295-bb14-4efb62c5bd80';
const CONTACT_EMAIL = 'contact@localwebbuilders.com';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    template: '',
    plan: searchParams.get('plan') || '',
    message: '',
    timeline: '',
    hasLogo: '',
    hasPhotos: '',
    hasMenu: '',
    currentWebsite: ''
  });

  // Pre-fill template from URL param
  useEffect(() => {
    const templateParam = searchParams.get('template');
    if (templateParam) {
      setFormData(prev => ({ ...prev, template: templateParam }));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Get the template and plan labels for the email
    const templateLabel = templates.find(t => t.value === formData.template)?.label || formData.template;
    const planLabel = plans.find(p => p.value === formData.plan)?.label || formData.plan || 'Not selected';
    const businessTypeLabel = businessTypes.find(b => b.value === formData.businessType)?.label || formData.businessType || 'Not specified';
    const timelineLabel = {
      'asap': 'ASAP - As soon as possible',
      '2-weeks': 'Within 2 weeks',
      '1-month': 'Within 1 month',
      'flexible': 'Flexible / Just exploring'
    }[formData.timeline] || 'Not specified';

    // Readiness score calculation
    const readinessItems = [
      { label: 'Has Logo', value: formData.hasLogo === 'yes' },
      { label: 'Has Photos', value: formData.hasPhotos === 'yes' },
      { label: 'Has Menu/Content', value: formData.hasMenu === 'yes' }
    ];
    const readinessScore = readinessItems.filter(i => i.value).length;
    const readinessEmoji = readinessScore === 3 ? 'READY TO GO' : readinessScore >= 1 ? 'PARTIALLY READY' : 'NEEDS PREP';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[${readinessEmoji}] New Inquiry from ${formData.businessName}`,
          from_name: 'LocalWebBuilders Contact Form',
          to: CONTACT_EMAIL,
          // Form fields
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          business_name: formData.businessName,
          business_type: businessTypeLabel,
          template: templateLabel,
          plan: planLabel,
          timeline: timelineLabel,
          has_logo: formData.hasLogo || 'Not answered',
          has_photos: formData.hasPhotos || 'Not answered',
          has_menu: formData.hasMenu || 'Not answered',
          current_website: formData.currentWebsite || 'None',
          message: formData.message || 'No additional message',
          // Formatted message for email body
          message_html: `
            <h2>New Website Inquiry - ${readinessEmoji}</h2>
            <h3>Contact Info</h3>
            <table style="border-collapse: collapse; width: 100%;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.name}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${formData.email}">${formData.email}</a></td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.phone || 'Not provided'}</td></tr>
            </table>
            <h3>Business Info</h3>
            <table style="border-collapse: collapse; width: 100%;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Business Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.businessName}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Business Type:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${businessTypeLabel}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Current Website:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.currentWebsite || 'None'}</td></tr>
            </table>
            <h3>Project Details</h3>
            <table style="border-collapse: collapse; width: 100%;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Template:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${templateLabel}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Plan:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${planLabel}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Timeline:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${timelineLabel}</td></tr>
            </table>
            <h3>Readiness Check (${readinessScore}/3)</h3>
            <table style="border-collapse: collapse; width: 100%;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Has Logo:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.hasLogo === 'yes' ? 'Yes' : formData.hasLogo === 'no' ? 'No - needs design' : 'Not answered'}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Has Photos:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.hasPhotos === 'yes' ? 'Yes' : formData.hasPhotos === 'stock' ? 'Will use stock photos' : 'Not answered'}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Has Menu/Content:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.hasMenu === 'yes' ? 'Yes' : formData.hasMenu === 'no' ? 'Needs help' : 'Not answered'}</td></tr>
            </table>
            <h3>Message</h3>
            <p>${formData.message || 'No additional message'}</p>
          `
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again or email us directly.');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Success State
  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: colors.bg }}>
        <div className="max-w-md text-center">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: `${colors.green}20` }}
          >
            <CheckCircle size={40} style={{ color: colors.green }} />
          </div>
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: colors.text, fontFamily: "'Space Mono', monospace" }}
          >
            Message Sent!
          </h1>
          <p className="mb-8" style={{ color: colors.textMuted }}>
            Thanks for reaching out! We've received your inquiry and will get back to you within 24 hours at <span className="text-white">{formData.email}</span>
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            style={{ background: colors.accent, color: 'white' }}
          >
            <ArrowLeft size={18} />
            Back to Templates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen" 
      style={{ background: colors.bg, fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <nav className="px-6 py-6 border-b" style={{ borderColor: colors.border }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="font-bold flex items-center gap-2"
            style={{ fontFamily: "'Space Mono', monospace", color: colors.text }}
          >
            <span className="w-9 h-8 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: colors.accent, color: 'white' }}>
              LWB
            </span>
            <span className="hidden sm:inline text-xl">LocalWebBuilders</span>
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
              to="/pricing" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: colors.textMuted }}
            >
              Pricing
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left - Info */}
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: colors.text, fontFamily: "'Space Mono', monospace" }}
            >
              Let's Build Your<br/>
              <span style={{ color: colors.accent }}>Dream Website</span>
            </h1>
            <p className="text-lg mb-12" style={{ color: colors.textMuted }}>
              Fill out the form and we'll get back to you within 24 hours 
              with a custom quote and timeline for your project.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: colors.surface }}
                >
                  <Mail size={20} style={{ color: colors.accent }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: colors.textMuted }}>Email us at</p>
                  <a 
                    href={`mailto:${CONTACT_EMAIL}`} 
                    className="font-medium hover:underline" 
                    style={{ color: colors.text }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: colors.surface }}
                >
                  <Phone size={20} style={{ color: colors.accent }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: colors.textMuted }}>Call us at</p>
                  <a 
                    href="tel:+15551234567" 
                    className="font-medium hover:underline" 
                    style={{ color: colors.text }}
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="p-6 rounded-2xl" style={{ background: colors.surface }}>
              <h3 className="font-semibold mb-4" style={{ color: colors.text }}>What happens next?</h3>
              <div className="space-y-4">
                {[
                  'We review your inquiry within 24 hours',
                  'Quick call to understand your needs',
                  'You pick a template & plan',
                  'We build your custom site in 5-10 days',
                  'Review, revise, and launch!'
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: colors.accent, color: 'white' }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-sm" style={{ color: colors.textMuted }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {/* Error Message */}
            {status === 'error' && (
              <div 
                className="mb-6 p-4 rounded-xl flex items-start gap-3"
                style={{ background: `${colors.red}15`, border: `1px solid ${colors.red}30` }}
              >
                <AlertCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: colors.red }} />
                <div>
                  <p className="font-medium" style={{ color: colors.red }}>Failed to send message</p>
                  <p className="text-sm mt-1" style={{ color: colors.textMuted }}>
                    {errorMessage || 'Please try again or email us directly at'}{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline" style={{ color: colors.accent }}>
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 disabled:opacity-50"
                    style={{ 
                      background: colors.surface, 
                      color: colors.text,
                      border: `1px solid ${colors.border}`,
                      '--tw-ring-color': colors.accent
                    }}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 disabled:opacity-50"
                    style={{ 
                      background: colors.surface, 
                      color: colors.text,
                      border: `1px solid ${colors.border}`,
                      '--tw-ring-color': colors.accent
                    }}
                    placeholder="john@restaurant.com"
                  />
                </div>
              </div>

              {/* Phone & Business Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 disabled:opacity-50"
                    style={{ 
                      background: colors.surface, 
                      color: colors.text,
                      border: `1px solid ${colors.border}`,
                      '--tw-ring-color': colors.accent
                    }}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 disabled:opacity-50"
                    style={{ 
                      background: colors.surface, 
                      color: colors.text,
                      border: `1px solid ${colors.border}`,
                      '--tw-ring-color': colors.accent
                    }}
                    placeholder="Amazing Restaurant"
                  />
                </div>
              </div>

              {/* Business Type & Current Website */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                    Type of Business *
                  </label>
                  <select
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 disabled:opacity-50"
                    style={{ 
                      background: colors.surface, 
                      color: colors.text,
                      border: `1px solid ${colors.border}`,
                      '--tw-ring-color': colors.accent
                    }}
                  >
                    <option value="">Select type...</option>
                    {businessTypes.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                    Current Website (if any)
                  </label>
                  <input
                    type="url"
                    name="currentWebsite"
                    value={formData.currentWebsite}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 disabled:opacity-50"
                    style={{ 
                      background: colors.surface, 
                      color: colors.text,
                      border: `1px solid ${colors.border}`,
                      '--tw-ring-color': colors.accent
                    }}
                    placeholder="https://myrestaurant.com"
                  />
                </div>
              </div>

              {/* Template Selection */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                  Which template do you like? *
                </label>
                <select
                  name="template"
                  required
                  value={formData.template}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 disabled:opacity-50"
                  style={{ 
                    background: colors.surface, 
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                    '--tw-ring-color': colors.accent
                  }}
                >
                  <option value="">Select a template...</option>
                  {templates.map(t => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              {/* Plan Selection */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                  Which plan interests you?
                </label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 disabled:opacity-50"
                  style={{ 
                    background: colors.surface, 
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                    '--tw-ring-color': colors.accent
                  }}
                >
                  <option value="">Select a plan...</option>
                  {plans.map(p => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                  When do you need this?
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 disabled:opacity-50"
                  style={{ 
                    background: colors.surface, 
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                    '--tw-ring-color': colors.accent
                  }}
                >
                  <option value="">Select timeline...</option>
                  <option value="asap">ASAP - As soon as possible</option>
                  <option value="2-weeks">Within 2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="flexible">Flexible / Just exploring</option>
                </select>
              </div>

              {/* Readiness Check */}
              <div 
                className="p-5 rounded-xl space-y-4"
                style={{ background: colors.surface, border: `1px solid ${colors.border}` }}
              >
                <p className="text-sm font-medium" style={{ color: colors.text }}>
                  Help us understand your readiness:
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: colors.textMuted }}>
                      Do you have a logo?
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, hasLogo: 'yes' }))}
                        disabled={status === 'loading'}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1 ${formData.hasLogo === 'yes' ? '' : 'opacity-60 hover:opacity-80'}`}
                        style={{ 
                          background: formData.hasLogo === 'yes' ? colors.green : colors.surfaceHover,
                          color: colors.text
                        }}
                      >
                        <Check size={14} /> Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, hasLogo: 'no' }))}
                        disabled={status === 'loading'}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1 ${formData.hasLogo === 'no' ? '' : 'opacity-60 hover:opacity-80'}`}
                        style={{ 
                          background: formData.hasLogo === 'no' ? colors.accent : colors.surfaceHover,
                          color: colors.text
                        }}
                      >
                        <XIcon size={14} /> No
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: colors.textMuted }}>
                      Do you have food photos?
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, hasPhotos: 'yes' }))}
                        disabled={status === 'loading'}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${formData.hasPhotos === 'yes' ? '' : 'opacity-60 hover:opacity-80'}`}
                        style={{ 
                          background: formData.hasPhotos === 'yes' ? colors.green : colors.surfaceHover,
                          color: colors.text
                        }}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, hasPhotos: 'stock' }))}
                        disabled={status === 'loading'}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${formData.hasPhotos === 'stock' ? '' : 'opacity-60 hover:opacity-80'}`}
                        style={{ 
                          background: formData.hasPhotos === 'stock' ? colors.accent : colors.surfaceHover,
                          color: colors.text
                        }}
                      >
                        Use Stock
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: colors.textMuted }}>
                      Menu/content ready?
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, hasMenu: 'yes' }))}
                        disabled={status === 'loading'}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${formData.hasMenu === 'yes' ? '' : 'opacity-60 hover:opacity-80'}`}
                        style={{ 
                          background: formData.hasMenu === 'yes' ? colors.green : colors.surfaceHover,
                          color: colors.text
                        }}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, hasMenu: 'no' }))}
                        disabled={status === 'loading'}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${formData.hasMenu === 'no' ? '' : 'opacity-60 hover:opacity-80'}`}
                        style={{ 
                          background: formData.hasMenu === 'no' ? colors.accent : colors.surfaceHover,
                          color: colors.text
                        }}
                      >
                        Need Help
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 resize-none disabled:opacity-50"
                  style={{ 
                    background: colors.surface, 
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                    '--tw-ring-color': colors.accent
                  }}
                  placeholder="Tell us about your restaurant, what makes it special, any specific features you need..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                style={{ background: colors.accent, color: 'white' }}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-sm" style={{ color: colors.textMuted }}>
                We typically respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
