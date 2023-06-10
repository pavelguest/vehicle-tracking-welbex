import * as RNLocalize from 'react-native-localize';

import { Locale } from './types';

export const getDeviceLanguage = () =>
  RNLocalize.getLocales()[0].languageCode as Locale;
