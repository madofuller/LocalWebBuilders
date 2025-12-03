import { useLanguage } from '../context/LanguageContext';

// Simple Google Maps Embed
export function MapEmbed({
  address,
  apiKey = '', // Optional: for better embed experience
  zoom = 15,
  height = '400px',
  width = '100%',
  className = '',
  style = {},
  showDirectionsButton = true,
}) {
  const { t } = useLanguage();
  
  // Encode address for URL
  const encodedAddress = encodeURIComponent(address);
  
  // Google Maps embed URL (works without API key for basic embed)
  const embedUrl = apiKey 
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}&zoom=${zoom}`
    : `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  // Directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  return (
    <div className={`relative ${className}`} style={style}>
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        style={{ border: 0, display: 'block' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${address}`}
      />
      {showDirectionsButton && (
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-medium text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {t('getDirections')}
        </a>
      )}
    </div>
  );
}

// Location Card with Map
export function LocationCard({
  name,
  address,
  phone,
  email,
  hours = [],
  image,
  apiKey = '',
  className = '',
  accentColor = '#ff6b35',
  showMapByDefault = true,
}) {
  const { t } = useLanguage();

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg ${className}`}>
      {/* Image Section */}
      {image && (
        <div className="h-40 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Map Section - Always visible */}
      <div className="h-48">
        <MapEmbed 
          address={address} 
          apiKey={apiKey}
          height="192px" 
          showDirectionsButton={false}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>
        
        <div className="space-y-3 text-gray-600">
          {/* Address */}
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{address}</span>
          </div>

          {/* Phone */}
          {phone && (
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
            </div>
          )}

          {/* Email */}
          {email && (
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${email}`} className="hover:underline">{email}</a>
            </div>
          )}

          {/* Hours */}
          {hours.length > 0 && (
            <div className="flex items-start gap-3 pt-2">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between gap-4">
                    <span className="font-medium">{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-white transition-colors"
            style={{ background: accentColor }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {t('getDirections')}
          </a>
          {phone && (
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium border-2 transition-colors"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('callUs')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Multi-Location Map (shows multiple pins)
export function MultiLocationMap({
  locations = [], // [{ name, address, lat, lng }, ...]
  center = { lat: 39.8283, lng: -98.5795 }, // Default: center of US
  zoom = 4,
  height = '500px',
  className = '',
  apiKey = '',
}) {
  // Without API key, we'll show a simple list with individual maps
  // With API key, you could use the Google Maps JavaScript API for multiple markers
  
  if (!apiKey) {
    return (
      <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            name={location.name}
            address={location.address}
            phone={location.phone}
            email={location.email}
            hours={location.hours}
            image={location.image}
          />
        ))}
      </div>
    );
  }

  // With API key, could implement a more sophisticated multi-marker map
  // For now, return the same grid layout
  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {locations.map((location, index) => (
        <LocationCard
          key={index}
          name={location.name}
          address={location.address}
          phone={location.phone}
          email={location.email}
          hours={location.hours}
          image={location.image}
          apiKey={apiKey}
        />
      ))}
    </div>
  );
}

export default MapEmbed;

