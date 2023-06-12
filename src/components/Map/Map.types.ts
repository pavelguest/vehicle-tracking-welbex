import { StyleProp, ViewStyle } from 'react-native';
import { TVehicle } from '../../screens/Home/Home.types';

export interface IMapProps {
  vehicleData?: TVehicle;
  containerStyle?: StyleProp<ViewStyle>;
  multiple?: boolean;
  vehiclesData?: TVehicle[];
}
