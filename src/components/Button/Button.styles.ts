import { StyleSheet } from 'react-native';
import { IS_IOS } from '../../core/device-info';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: 'black',
    textAlign: 'center',
  },
  primaryLight: {
    backgroundColor: 'white',
  },
  secondary: {
    backgroundColor: 'transparent',
  },
  secondaryLight: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  underlined: {
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    paddingBottom: 10,
  },
  text_primary: {
    fontSize: 12,
    lineHeight: 15,
    color: '#ffffff',
  },
  text_primaryLight: {
    fontSize: 12,
    lineHeight: 15,
    color: '#000000',
  },
  text_secondary: {
    fontSize: 12,
    lineHeight: 15,
    color: '#000000',
  },
  text_secondaryLight: {
    fontSize: 12,
    lineHeight: 15,
    color: '#ffffff',
  },
  text_underlined: {
    fontSize: 16,
    lineHeight: 22,
    color: '#ffffff',
  },
  activityIndicator: {
    position: 'absolute',
    right: 10,
    transform: [{ scale: IS_IOS ? 0.6 : 1 }],
  },
});
