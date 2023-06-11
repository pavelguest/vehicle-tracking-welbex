import React, { memo, useCallback } from 'react';

import { StyleSheet, View } from 'react-native';

import { useStyles } from './InterfaceLang.styles';
import { TInterfaceLangProps } from './InterfaceLang.types';
import { Modal } from '../../components/Modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Locale } from '../../core/i18n/types';
import { CONTENT_PADDING_BOTTOM } from '../../core/styling/env/constants';
import { SUPPORTED_LOCALES } from '../../core/i18n/constants';
import { SelectItem } from '../../components/SelectItem';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from '../../core/i18n';

const InterfaceLang: React.FC<TInterfaceLangProps> = ({
  title,
  modalRef,
  onPress,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();

  const combinedContainerStyles = StyleSheet.compose(styles.container, {
    paddingBottom: bottom + CONTENT_PADDING_BOTTOM,
  });

  const { currentLanguage, changeLanguage } = useChangeLanguage();

  const handleChange = useCallback(
    (lang: Locale) => {
      changeLanguage(lang);
      onPress();
    },
    [changeLanguage, onPress],
  );

  return (
    <Modal ref={modalRef} setHeader title={title}>
      <View style={combinedContainerStyles}>
        {SUPPORTED_LOCALES.map((lang, index) => (
          <SelectItem
            key={index}
            label={t(`interfaceLanguage.${lang}`)}
            handlePress={() => handleChange(lang)}
            isSelected={lang === currentLanguage}
          />
        ))}
      </View>
    </Modal>
  );
};

export default memo(InterfaceLang);
