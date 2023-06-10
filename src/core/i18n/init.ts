import i18n from 'i18next';

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './constants';
import { getDeviceLanguage } from './helpers';
import en from './translations/en.json';
import ru from './translations/ru.json';

import 'intl-pluralrules';
import { SettingsRepository } from '../repositories';
import { initReactI18next } from 'react-i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const languageDetector = {
  type: 'languageDetector' as const,
  async: true,
  detect: (cb: (locale: string | undefined) => void) => {
    return cb(
      SettingsRepository.getCurrentLocale() ||
        (SUPPORTED_LOCALES.includes(getDeviceLanguage()) &&
          getDeviceLanguage()),
    );
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

export const initializeI18N = () => {
  i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: en,
        },
        ru: {
          translation: ru,
        },
      },
      returnNull: false,
      fallbackLng: DEFAULT_LOCALE,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
};
