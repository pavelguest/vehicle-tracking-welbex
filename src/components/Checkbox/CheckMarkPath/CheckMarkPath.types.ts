import type { ColorValue } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

export type TCheckMarkPathProps = {
  progress: SharedValue<0 | 1>;
  checkMarkColor: ColorValue;
  checkmarkSize: 'sm' | 'lg';
};
