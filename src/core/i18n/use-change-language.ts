import { useCallback } from 'react';

import { Locale } from './types';
import { useTranslation } from './use-translation';
import { SettingsRepository } from '../repositories';

export function useChangeLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (locale: Locale) => {
      i18n.changeLanguage(locale);
      SettingsRepository.setCurrentLocale(locale);
    },
    [i18n],
  );

  return {
    currentLanguage: i18n.language,
    changeLanguage,
  };
}
