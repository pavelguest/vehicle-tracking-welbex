import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationParams } from '../../navigation/Navigation.types';
import { TCategory } from '../../core/constants';

export type THomeProps = NativeStackScreenProps<NavigationParams, 'Home'>;

export type TVehicle = {
  id: string;
  location: {
    lat: number;
    lng: number;
  };
  category: TCategory;
  driverName: string;
  driverContact: string;
  carBrand: string;
};
