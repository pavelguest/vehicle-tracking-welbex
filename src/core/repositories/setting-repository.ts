import { Locale } from '../i18n/types';
import { KeyValueRepository } from './key-value-repository';

const CURRENT_LOCALE_KEY = 'current_locale';

export class SettingsRepository {
  public static setCurrentLocale(locale: Locale) {
    KeyValueRepository.setItem(CURRENT_LOCALE_KEY, JSON.stringify(locale));
  }

  public static getCurrentLocale() {
    return KeyValueRepository.getItem<Locale>(CURRENT_LOCALE_KEY);
  }
}
