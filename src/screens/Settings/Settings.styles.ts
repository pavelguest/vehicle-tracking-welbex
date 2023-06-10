import { makeUseStyles } from 'react-native-stylex';
import { CONTENT_PADDING_H } from '../../core/styling/env/constants';

export const useStyles = makeUseStyles(({ palette, typography }) => ({
  container: {
    flex: 1,
    backgroundColor: palette.background.primary,
    paddingHorizontal: CONTENT_PADDING_H,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.border.primary,
  },
  iconColor: {
    color: palette.text.primary,
  },
  linkContainer: {
    flexDirection: 'row',
  },
  link: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  linkTitle: {
    ...typography.h3,
    fontWeight: '600',
  },
  hint: {
    ...typography.body,
    color: palette.text.primary,
  },
  hintAbsolute: {
    position: 'absolute',
    right: 32,
  },
}));
