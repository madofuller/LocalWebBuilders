import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Upload, Check, ArrowRight, Image, FileText, MapPin, 
  Clock, Phone, Mail, Instagram, Facebook, Globe, 
  CheckCircle, Loader2, AlertCircle
} from 'lucide-react';

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

// Web3Forms key - same as contact page
const WEB3FORMS_ACCESS_KEY = '9eb905d2-2fba-4295-bb14-4efb62c5bd80';
const CONTACT_EMAIL = 'contact@localwebbuilders.com';

export default function Onboard() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('idle');
  const [currentStep, setCurrentStep] = useState(1);

  // Get params from URL
  const clientName = searchParams.get('name') || '';
  const businessName = searchParams.get('business') || '';
  const clientEmail = searchParams.get('email') || '';
  const templateKey = searchParams.get('template') || '';

  const [formData, setFormData] = useState({
    // Contact
    contactName: clientName,
    contactEmail: clientEmail,
    contactPhone: '',
    
    // Business
    businessName: businessName,
    tagline: '',
    description: '',
    
    // Location & Hours
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    hoursMonFri: '',
    hoursSatSun: '',
    
    // Branding
    primaryColor: '',
    secondaryColor: '',
    logoNotes: '',
    styleNotes: '',
    
    // Content
    menuLink: '',
    menuNotes: '',
    aboutText: '',
    specialties: '',
    
    // Social
    instagram: '',
    facebook: '',
    twitter: '',
    yelp: '',
    googleBusiness: '',
    
    // Photos
    photoNotes: '',
    photoLink: '',
    
    // Additional
    additionalNotes: '',
    competitors: '',
    mustHaves: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[ONBOARDING] Assets from ${formData.businessName}`,
          from_name: 'LocalWebBuilders Onboarding',
          to: CONTACT_EMAIL,
          ...formData,
          message_html: `
            <h2>Client Onboarding Submission</h2>
            <h3>Contact Info</h3>
            <p>Name: ${formData.contactName}<br/>
            Email: ${formData.contactEmail}<br/>
            Phone: ${formData.contactPhone}</p>
            
            <h3>Business Info</h3>
            <p>Business: ${formData.businessName}<br/>
            Tagline: ${formData.tagline}<br/>
            Description: ${formData.description}</p>
            
            <h3>Location & Hours</h3>
            <p>Address: ${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}<br/>
            Phone: ${formData.phone}<br/>
            Email: ${formData.email}<br/>
            Mon-Fri: ${formData.hoursMonFri}<br/>
            Sat-Sun: ${formData.hoursSatSun}</p>
            
            <h3>Branding</h3>
            <p>Primary Color: ${formData.primaryColor}<br/>
            Secondary Color: ${formData.secondaryColor}<br/>
            Logo Notes: ${formData.logoNotes}<br/>
            Style Notes: ${formData.styleNotes}</p>
            
            <h3>Menu & Content</h3>
            <p>Menu Link: ${formData.menuLink}<br/>
            Menu Notes: ${formData.menuNotes}<br/>
            Specialties: ${formData.specialties}<br/>
            About: ${formData.aboutText}</p>
            
            <h3>Social Media</h3>
            <p>Instagram: ${formData.instagram}<br/>
            Facebook: ${formData.facebook}<br/>
            Twitter: ${formData.twitter}<br/>
            Yelp: ${formData.yelp}<br/>
            Google: ${formData.googleBusiness}</p>
            
            <h3>Photos</h3>
            <p>Photo Link: ${formData.photoLink}<br/>
            Notes: ${formData.photoNotes}</p>
            
            <h3>Additional</h3>
            <p>Must-haves: ${formData.mustHaves}<br/>
            Competitors: ${formData.competitors}<br/>
            Notes: ${formData.additionalNotes}</p>
          `
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const steps = [
    { num: 1, label: 'Business Info' },
    { num: 2, label: 'Location & Hours' },
    { num: 3, label: 'Branding' },
    { num: 4, label: 'Content & Menu' },
    { num: 5, label: 'Social & Photos' },
    { num: 6, label: 'Final Details' }
  ];

  const inputStyle = {
    background: colors.surface,
    color: colors.text,
    border: `1px solid ${colors.border}`
  };

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
          <h1 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>
            Assets Received!
          </h1>
          <p className="mb-8" style={{ color: colors.textMuted }}>
            Thank you! We've received all your information and will start building your website right away.
            You'll hear from us within 24-48 hours with a preview.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
            style={{ background: colors.accent, color: 'white' }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

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
            <span className="text-xl hidden sm:inline">LocalWebBuilders</span>
          </Link>
          <div className="text-sm" style={{ color: colors.textMuted }}>
            Onboarding: {businessName || 'Your Business'}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currentStep >= step.num ? '' : 'opacity-40'}`}
                  style={{ 
                    background: currentStep >= step.num ? colors.accent : colors.surface,
                    color: colors.text
                  }}
                >
                  {currentStep > step.num ? <Check size={16} /> : step.num}
                </div>
                {i < steps.length - 1 && (
                  <div 
                    className="w-8 sm:w-16 h-0.5 mx-1"
                    style={{ background: currentStep > step.num ? colors.accent : colors.border }}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm" style={{ color: colors.textMuted }}>
            Step {currentStep} of {steps.length}: {steps[currentStep - 1].label}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Business Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Let's start with the basics
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Your Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Your Email *</label>
                  <input
                    type="email"
                    name="contactEmail"
                    required
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="john@restaurant.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={inputStyle}
                  placeholder="Amazing Restaurant"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Tagline / Slogan</label>
                <input
                  type="text"
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={inputStyle}
                  placeholder="Farm to table, heart to soul"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Brief Description *</label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                  style={inputStyle}
                  placeholder="Tell us about your restaurant in 2-3 sentences..."
                />
              </div>
            </div>
          )}

          {/* Step 2: Location & Hours */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Where can people find you?
              </h2>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Street Address *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={inputStyle}
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="Austin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="TX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>ZIP *</label>
                  <input
                    type="text"
                    name="zip"
                    required
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="78701"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Business Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="(512) 555-1234"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Business Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="hello@restaurant.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Hours: Mon-Fri</label>
                  <input
                    type="text"
                    name="hoursMonFri"
                    value={formData.hoursMonFri}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="11am - 9pm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Hours: Sat-Sun</label>
                  <input
                    type="text"
                    name="hoursSatSun"
                    value={formData.hoursSatSun}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="10am - 10pm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Branding */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Your brand style
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Primary Brand Color</label>
                  <input
                    type="text"
                    name="primaryColor"
                    value={formData.primaryColor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="#FF6B35 or 'burnt orange'"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Secondary Color</label>
                  <input
                    type="text"
                    name="secondaryColor"
                    value={formData.secondaryColor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="#1A1A1A or 'dark charcoal'"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Logo Notes</label>
                <textarea
                  name="logoNotes"
                  rows={2}
                  value={formData.logoNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                  style={inputStyle}
                  placeholder="Where can we find your logo files? Google Drive link, or describe if you need one designed..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Style / Vibe Notes</label>
                <textarea
                  name="styleNotes"
                  rows={3}
                  value={formData.styleNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                  style={inputStyle}
                  placeholder="Describe the feeling you want: Modern? Rustic? Elegant? Fun? Any websites you love?"
                />
              </div>
            </div>
          )}

          {/* Step 4: Content */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Your menu & content
              </h2>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Menu Link</label>
                <input
                  type="url"
                  name="menuLink"
                  value={formData.menuLink}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={inputStyle}
                  placeholder="Link to PDF, Google Doc, or existing menu page"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Menu Notes</label>
                <textarea
                  name="menuNotes"
                  rows={2}
                  value={formData.menuNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                  style={inputStyle}
                  placeholder="Any notes about menu categories, pricing, seasonal items..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Signature Dishes / Specialties</label>
                <textarea
                  name="specialties"
                  rows={2}
                  value={formData.specialties}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                  style={inputStyle}
                  placeholder="What are you famous for? What should we highlight?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>About / Story Text</label>
                <textarea
                  name="aboutText"
                  rows={4}
                  value={formData.aboutText}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                  style={inputStyle}
                  placeholder="Your story - how did you start? What makes you special? Any awards or press?"
                />
              </div>
            </div>
          )}

          {/* Step 5: Social & Photos */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Social media & photos
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Instagram</label>
                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="@yourrestaurant"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Facebook</label>
                  <input
                    type="text"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="facebook.com/yourrestaurant"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Yelp</label>
                  <input
                    type="text"
                    name="yelp"
                    value={formData.yelp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="Yelp page link"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Google Business</label>
                  <input
                    type="text"
                    name="googleBusiness"
                    value={formData.googleBusiness}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none"
                    style={inputStyle}
                    placeholder="Google Business link"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Photo Link</label>
                <input
                  type="url"
                  name="photoLink"
                  value={formData.photoLink}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={inputStyle}
                  placeholder="Google Drive, Dropbox link to your photos"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Photo Notes</label>
                <textarea
                  name="photoNotes"
                  rows={2}
                  value={formData.photoNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                  style={inputStyle}
                  placeholder="Don't have photos? Let us know and we'll use beautiful stock images that match your vibe."
                />
              </div>
            </div>
          )}

          {/* Step 6: Final */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Final details
              </h2>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Must-Have Features</label>
                <textarea
                  name="mustHaves"
                  rows={2}
                  value={formData.mustHaves}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                  style={inputStyle}
                  placeholder="Any specific features that are absolutely essential?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Competitors / Inspiration</label>
                <textarea
                  name="competitors"
                  rows={2}
                  value={formData.competitors}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                  style={inputStyle}
                  placeholder="Any restaurant websites you love? Or competitors whose sites you want to beat?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>Anything Else?</label>
                <textarea
                  name="additionalNotes"
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                  style={inputStyle}
                  placeholder="Any other notes, concerns, or things we should know?"
                />
              </div>

              {status === 'error' && (
                <div 
                  className="p-4 rounded-xl flex items-center gap-3"
                  style={{ background: `${colors.red}15`, border: `1px solid ${colors.red}30` }}
                >
                  <AlertCircle size={20} style={{ color: colors.red }} />
                  <span style={{ color: colors.red }}>Failed to submit. Please try again.</span>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev - 1)}
              disabled={currentStep === 1}
              className="px-6 py-3 rounded-xl font-medium transition-all disabled:opacity-30"
              style={{ background: colors.surface, color: colors.text }}
            >
              Back
            </button>

            {currentStep < 6 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 flex items-center gap-2"
                style={{ background: colors.accent, color: 'white' }}
              >
                Continue
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 disabled:opacity-70"
                style={{ background: colors.green, color: 'white' }}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Check size={18} />
                    Submit & Start Building
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

