import vehiclesRu from '../assets/vehicle-data-ru.json';
import vehiclesEn from '../assets/vehicle-data-en.json';

export type TCategory = 'cargo' | 'passenger' | 'specialTransport';

export type TAllCategories = {
  id: TCategory;
};

export const allCategories: TAllCategories[] = [
  { id: 'cargo' },
  { id: 'passenger' },
  { id: 'specialTransport' },
];

export const VEHICLES_DATA_LOCALE_PATH = {
  en: vehiclesEn,
  ru: vehiclesRu,
};

export const API_KEY = 'AIzaSyA7koO9sc-X6xEqyk8vwBRygHquc-BVUzU';
