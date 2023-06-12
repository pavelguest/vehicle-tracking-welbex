import { makeUseStyles } from 'react-native-stylex';
import {
  CONTENT_PADDING_BOTTOM,
  CONTENT_PADDING_H,
  CONTENT_WIDTH,
} from '../../core/styling/env/constants';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../core/device-info';

export const useStyles = makeUseStyles(({ palette, typography }) => ({
  container: {
    flex: 1,
    backgroundColor: palette.background.primary,
  },
  mapContainer: {
    height: WINDOW_HEIGHT * 0.4,
  },
  map: {
    width: WINDOW_WIDTH,
    height: '100%',
  },
  infoContainer: {
    marginTop: 8,
    rowGap: 10,
    paddingHorizontal: CONTENT_PADDING_H,
    flex: 1,
  },
  buttonsContainer: {
    marginTop: CONTENT_PADDING_H,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  itemTitle: {
    ...typography.body2,
    lineHeight: 19,
    marginTop: 3,
    marginBottom: 2,
    color: palette.text.primary,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.border.primary,
  },
  iconColor: {
    color: palette.text.primary,
  },
  buttonSubmit: {
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
