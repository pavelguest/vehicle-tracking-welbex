import { createContext, useContext } from 'react';
import { VehiclesStore } from './VehiclesStore';

export class RootStore {
  vehiclesStore: VehiclesStore;

  constructor() {
    this.vehiclesStore = new VehiclesStore();
  }
}

export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);

export const StoreProvider = StoreContext.Provider;

export const useStore = () => useContext(StoreContext);
