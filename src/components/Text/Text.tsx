import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyleSheet, Text as RNText, TextProps } from 'react-native';

interface Props extends TextProps {
  children: React.ReactNode;
}

export function Text({ children, style, ...textProps }: Props) {
  const { i18n } = useTranslation();

  const isRtl = i18n.dir() === 'rtl';

  return (
    <RNText {...textProps} style={isRtl ? [styles.rtl, style] : style}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  rtl: {
    textAlign: 'right',
  },
});
