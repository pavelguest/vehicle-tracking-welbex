import React, { MutableRefObject, useCallback, useRef } from 'react';
import { useTheme } from 'react-native-stylex';
import { navigationRef } from './navigation/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRoot from './navigation/NavigationRoot';
import { StatusBar } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StoreProvider, rootStore } from './store';

function App() {
  const theme = useTheme();
  const routeNameRef: MutableRefObject<string | undefined> = useRef();
  const styleFlex = {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
  };

  const handleStateChange = useCallback(async () => {
    if (!navigationRef.current) {
      return;
    }
    const currentRouteName = navigationRef.current.getCurrentRoute()?.name;

    routeNameRef.current = currentRouteName;
  }, []);

  return (
    <GestureHandlerRootView style={styleFlex}>
      <StoreProvider value={rootStore}>
        <BottomSheetModalProvider>
          <SafeAreaProvider>
            <NavigationContainer
              ref={navigationRef}
              onReady={() => {
                routeNameRef.current =
                  navigationRef?.current?.getCurrentRoute()?.name;
              }}
              onStateChange={handleStateChange}>
              <StatusBar
                barStyle="dark-content"
                translucent={true}
                hidden={false}
                backgroundColor="transparent"
              />
              <NavigationRoot />
            </NavigationContainer>
          </SafeAreaProvider>
        </BottomSheetModalProvider>
      </StoreProvider>
    </GestureHandlerRootView>
  );
}

export default App;
