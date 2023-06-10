import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface SelectItemProps {
  label: string;
  handlePress: () => void;
  isSelected?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}
