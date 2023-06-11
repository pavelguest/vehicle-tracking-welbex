import { makeUseStyles } from 'react-native-stylex';
import {
  CONTENT_PADDING_BOTTOM,
  CONTENT_PADDING_H,
  CONTENT_WIDTH,
} from '../../core/styling/env/constants';
import { WINDOW_HEIGHT } from '@gorhom/bottom-sheet';

export const useStyles = makeUseStyles(({ palette, typography }) => ({
  container: {
    backgroundColor: palette.background.primary,
    flex: 1,
    height: WINDOW_HEIGHT * 0.5,
    paddingTop: 16,
    paddingBottom: CONTENT_PADDING_BOTTOM,
  },
  containerMultiple: {
    gap: 16,
    flex: 1,
    paddingHorizontal: CONTENT_PADDING_H,
  },
  buttonSubmit: {
    marginTop: CONTENT_PADDING_H,
    marginBottom: CONTENT_PADDING_BOTTOM,
    backgroundColor: palette.background.activeIcon,
    width: CONTENT_WIDTH,
    height: 40,
    borderRadius: 40,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignSelf: 'center',
  },
  buttonSubmitText: {
    ...typography.button,
    color: palette.text.primary,
  },
}));
