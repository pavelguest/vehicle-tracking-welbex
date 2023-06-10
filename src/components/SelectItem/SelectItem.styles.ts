import { makeUseStyles } from 'react-native-stylex';
import { CONTENT_PADDING_H } from '../../core/styling/env/constants';

export const useStyles = makeUseStyles(({ palette, typography }) => ({
  container: {
    paddingVertical: 10,
    paddingHorizontal: CONTENT_PADDING_H,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    ...typography.body2,
    color: palette.text.primary,
  },
  icon: {
    color: palette.text.primary,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: palette.border.primary,
  },
}));
