import type {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface IButtonProps extends TouchableOpacityProps {
  kind?:
    | 'primary'
    | 'secondary'
    | 'primaryLight'
    | 'secondaryLight'
    | 'underlined';
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}
