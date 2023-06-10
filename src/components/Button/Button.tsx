import React, { memo } from 'react';

import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './Button.styles';
import type { IButtonProps } from './Button.types';

const Button: React.FC<IButtonProps> = ({
  children,
  kind = 'primary',
  containerStyle,
  text,
  textStyle,
  loading,
  disabled,
  ...buttonProps
}) => {
  const containerStyles = StyleSheet.compose(styles.container, [
    styles[kind],
    containerStyle,
  ]);
  const textStyles = StyleSheet.flatten<TextStyle>([
    styles[`text_${kind}`],
    textStyle,
  ]);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={disabled || loading}
      {...buttonProps}>
      <View style={containerStyles}>
        {text && <Text style={textStyles}>{text}</Text>}
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default memo(Button);
