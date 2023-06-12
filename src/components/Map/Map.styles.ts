import { StyleSheet } from 'react-native';
import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(() => ({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
}));
