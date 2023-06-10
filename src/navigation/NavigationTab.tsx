import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useHeaderConfig } from './headerConfig';
import { useStyles } from './navigation.styles';
import { NavigationParams } from './Navigation.types';
import SettingsIcon from '../components/Icons/SettingsIcon';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import HomeIcon from '../components/Icons/HomeIcon';

const getHomeIcon = (color: string) => <HomeIcon color={color} />;
const getSettingsIcon = (color: string) => <SettingsIcon color={color} />;

const TabMain = createBottomTabNavigator<NavigationParams>();

const NavigationTab = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();

  const headerConfig = useHeaderConfig();

  const combinedStyles = StyleSheet.compose(styles.tabBar, {
    height: 50 + bottom,
  });

  return (
    <TabMain.Navigator
      backBehavior="history"
      screenOptions={{
        tabBarStyle: combinedStyles,
        tabBarActiveTintColor: styles.headerTintLight.color,
        tabBarInactiveTintColor: styles.tintPrimary.color,
        headerShown: false,
        freezeOnBlur: true,
        tabBarShowLabel: false,
      }}>
      <TabMain.Screen
        options={() => ({
          ...headerConfig,
          title: t('home.pageTitle'),
          tabBarIcon: ({ color }) => getHomeIcon(color),
          tabBarTestID: 'tabHome',
        })}
        name="Home"
        component={Home}
      />

      <TabMain.Screen
        options={() => ({
          ...headerConfig,
          title: t('settings.pageTitle'),
          tabBarIcon: ({ color }) => getSettingsIcon(color),
          tabBarTestID: 'tabSettings',
        })}
        name="Settings"
        component={Settings}
      />
    </TabMain.Navigator>
  );
};

export default memo(NavigationTab);
