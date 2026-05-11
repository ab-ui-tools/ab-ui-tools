import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translationHY from '../shared/locales/hy.json';

const resources = {
  hy: {
    translation: translationHY,
  },
};

const languages = Object.keys(resources);

void i18n.use(initReactI18next).init({
  detection: {
    order: ['localStorage', 'querystring', 'cookie', 'defaultDetector', 'navigator'],
    lookupLocalStorage: 'lng',
    lookupQuerystring: 'lng',
    lookupCookie: 'lng',
    caches: ['localStorage', 'cookie'],
  },
  supportedLngs: languages,
  fallbackLng: languages,
  keySeparator: false,
  nsSeparator: '|',
  resources,
  debug: false,
});

export default i18n;
