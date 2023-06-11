import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette, typography }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  labelContainer: {
    flex: 1,
    height: 'auto',
  },
  label: {
    paddingLeft: 20,
    ...typography.h5,
    color: palette.text.primary,
  },
  sublabel: {
    ...typography.body,
    color: palette.text.primary,
  },
  checkmark: {
    color: palette.text.primary,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBorder: {
    color: palette.text.primary,
  },
  checkedBorder: {
    color: palette.text.primary,
  },
  lightBackground: {
    color: palette.background.primary,
  },
}));
