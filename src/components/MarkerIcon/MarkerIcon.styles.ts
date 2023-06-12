import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => ({
  icon: {
    color: palette.background.mapIcon,
  },
}));
