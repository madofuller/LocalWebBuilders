import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// Add more languages as needed
const translations = {
  en: {
    // Navigation
    menu: 'Menu',
    about: 'About',
    locations: 'Locations',
    contact: 'Contact',
    orderOnline: 'Order Online',
    reserve: 'Reserve a Table',
    
    // Common sections
    welcome: 'Welcome',
    ourStory: 'Our Story',
    ourMenu: 'Our Menu',
    findUs: 'Find Us',
    hours: 'Hours',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    
    // Actions
    viewMenu: 'View Menu',
    seeMore: 'See More',
    learnMore: 'Learn More',
    getDirections: 'Get Directions',
    callUs: 'Call Us',
    
    // Days
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    
    // Footer
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
  es: {
    // Navigation
    menu: 'Menú',
    about: 'Nosotros',
    locations: 'Ubicaciones',
    contact: 'Contacto',
    orderOnline: 'Ordenar en Línea',
    reserve: 'Reservar Mesa',
    
    // Common sections
    welcome: 'Bienvenidos',
    ourStory: 'Nuestra Historia',
    ourMenu: 'Nuestro Menú',
    findUs: 'Encuéntranos',
    hours: 'Horario',
    address: 'Dirección',
    phone: 'Teléfono',
    email: 'Correo',
    
    // Actions
    viewMenu: 'Ver Menú',
    seeMore: 'Ver Más',
    learnMore: 'Más Información',
    getDirections: 'Cómo Llegar',
    callUs: 'Llámanos',
    
    // Days
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    
    // Footer
    followUs: 'Síguenos',
    allRightsReserved: 'Todos los derechos reservados',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
  },
  fr: {
    // Navigation
    menu: 'Menu',
    about: 'À Propos',
    locations: 'Emplacements',
    contact: 'Contact',
    orderOnline: 'Commander en Ligne',
    reserve: 'Réserver une Table',
    
    // Common sections
    welcome: 'Bienvenue',
    ourStory: 'Notre Histoire',
    ourMenu: 'Notre Menu',
    findUs: 'Nous Trouver',
    hours: 'Horaires',
    address: 'Adresse',
    phone: 'Téléphone',
    email: 'Email',
    
    // Actions
    viewMenu: 'Voir le Menu',
    seeMore: 'Voir Plus',
    learnMore: 'En Savoir Plus',
    getDirections: 'Itinéraire',
    callUs: 'Appelez-nous',
    
    // Days
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
    
    // Footer
    followUs: 'Suivez-nous',
    allRightsReserved: 'Tous droits réservés',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions d\'Utilisation',
  },
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export function LanguageProvider({ children, defaultLang = 'en' }) {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('preferred-language');
    if (saved && translations[saved]) return saved;
    
    // Then check browser language
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) return browserLang;
    
    return defaultLang;
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  // For custom content that varies by restaurant
  const tCustom = (contentObj) => {
    return contentObj[language] || contentObj['en'] || Object.values(contentObj)[0];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tCustom, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;

