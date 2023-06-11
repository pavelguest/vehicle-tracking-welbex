import { makeAutoObservable } from 'mobx';
import { VEHICLES_DATA_LOCALE_PATH } from '../core/constants';
import { Locale } from '../core/i18n/types';
import { TVehicle } from '../screens/Home/Home.types';
import { TFilters } from './types';

export class VehiclesStore {
  items: TVehicle[] = [];
  filters: TFilters = {
    cargo: false,
    passenger: false,
    specialTransport: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  getVehicles(locale: string) {
    this.items = [...VEHICLES_DATA_LOCALE_PATH[locale as Locale]];
  }

  updateFilters(currentFilters: TFilters) {
    this.filters = { ...currentFilters };
  }

  clearFilters() {
    this.filters = {
      cargo: false,
      passenger: false,
      specialTransport: false,
    };
  }
}
