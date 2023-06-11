import React from 'react';
import { StatusBar, View } from 'react-native';
import { useStyles } from './Settings.styles';
import { TSettingsProps } from './Settings.types';
import { memo, useCallback, useRef } from 'react';
import { LinkContainer } from './components/LinkContainer';
import { Text } from '../../components/Text';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LanguageIcon from '../../components/Icons/LanguageIcon';
import { InterfaceLang } from '../../modals/InterfaceLang';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const Settings: React.FC<TSettingsProps> = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const interfaceLangModalRef = useRef<BottomSheetModal>(null);

  const interfaceLangId = i18next.language;

  const handleNavigateToInterfaceLanguage = useCallback(() => {
    interfaceLangModalRef.current?.present();
  }, []);

  const onPressChangeInterfaceLang = useCallback(() => {
    interfaceLangModalRef.current?.dismiss();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        hidden={false}
        backgroundColor="transparent"
      />
      <LinkContainer
        isSeparator={true}
        handleOnPress={handleNavigateToInterfaceLanguage}>
        <View style={styles.linkContainer}>
          <View style={styles.icon}>
            <LanguageIcon color={styles.iconColor.color} />
          </View>
          <View style={styles.link}>
            <Text style={styles.linkTitle}>
              {t('settings.interfaceLanguage')}
            </Text>
          </View>
        </View>
        <Text style={[styles.hint, styles.hintAbsolute]}>
          {t(`interfaceLanguage.${interfaceLangId}`)}
        </Text>
      </LinkContainer>
      <InterfaceLang
        title={t('interfaceLanguage.modalTitle')}
        modalRef={interfaceLangModalRef}
        onPress={onPressChangeInterfaceLang}
      />
    </View>
  );
};

export default memo(Settings);
