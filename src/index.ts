/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from '../app.json';
import { withThemeProvider } from './core/styling';
import { initializeI18N } from './core/i18n';

initializeI18N();

const EnhancedApp = withThemeProvider(App);

AppRegistry.registerComponent(appName, () => EnhancedApp);
