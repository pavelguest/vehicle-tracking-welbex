import { PressableProps } from 'react-native';

import { TCheckMarkPathProps } from './CheckMarkPath';

export interface TCheckboxProps extends PressableProps {
  checked: boolean;
  checkMarkColor: string;
  checkedBorderColor: string;
  unCheckedBorderColor: string;
  checkedBackgroundColor: string;
  unCheckedBackgroundColor: string;
  height: number;
  width: number;
  checkmarkSize?: TCheckMarkPathProps['checkmarkSize'];
}
