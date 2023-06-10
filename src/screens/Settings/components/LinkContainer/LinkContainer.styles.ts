import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => ({
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  iconColor: {
    color: palette.text.primary,
  },
  separator: {
    marginTop: 16,
    height: 1,
    backgroundColor: palette.border.primary,
  },
}));
