import { SharedValue } from 'react-native-reanimated';

export type TBackgroundProps = {
  progress: SharedValue<0 | 1>;
  unCheckedBorderColor: string;
  checkedBorderColor: string;
  unCheckedBackgroundColor: string;
  checkedBackgroundColor: string;
};
