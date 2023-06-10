import React, { memo } from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { useHeaderWithBackConfig } from './headerConfig';
import { NavigationParams } from './Navigation.types';
import NavigationTab from './NavigationTab';
import { VehicleDetails } from '../screens/VehicleDetails';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator<NavigationParams>();

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',
};

const NavigationRoot = () => {
  const headerWithBackConfig = useHeaderWithBackConfig();
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={defaultOptions}
      initialRouteName={'NavigationTab'}>
      <Stack.Screen
        name="NavigationTab"
        component={NavigationTab}
        options={() => ({
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="VehicleDetails"
        component={VehicleDetails}
        options={() => ({
          title: t('vehicleDetails.pageTitle'),
          ...headerWithBackConfig,
        })}
      />
    </Stack.Navigator>
  );
};

export default memo(NavigationRoot);
