import i18n, { LanguageDetectorModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { findBestAvailableLanguage } from 'react-native-localize';

import en from './en.json';
import pl from './pl.json';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => findBestAvailableLanguage(['en', 'pl'])?.languageTag,
  init: () => null,
  cacheUserLanguage: () => null,
};

void i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    resources: {
      en,
      pl,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
