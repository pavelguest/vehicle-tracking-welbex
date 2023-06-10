import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette, typography }) => ({
  container: {
    flex: 1,
    backgroundColor: palette.background.primary,
  },
}));
