import React, { memo } from 'react';

import Animated, {
  createAnimatedPropAdapter,
  interpolateColor,
  useAnimatedProps,
} from 'react-native-reanimated';
import { Path } from 'react-native-svg';

import { TBackgroundProps } from './Background.types';

const AnimationColor = Animated.createAnimatedComponent(Path);

const adapter = createAnimatedPropAdapter(
  props => {
    if (Object.keys(props).includes('fill')) {
      props.fill = {
        type: 0,
        payload: props.fill,
      };
    }

    if (Object.keys(props).includes('stroke')) {
      props.stroke = {
        type: 0,
        payload: props.stroke,
      };
    }
  },
  ['fill', 'stroke'],
);

const AnimatedColor = memo<TBackgroundProps>(
  ({
    progress,
    unCheckedBorderColor,
    checkedBorderColor,
    unCheckedBackgroundColor,
    checkedBackgroundColor,
  }) => {
    const animation = useAnimatedProps(
      () => {
        const fill = interpolateColor(
          progress.value,
          [0, 1],
          [unCheckedBackgroundColor, checkedBackgroundColor],
          'RGB',
        );

        const stroke = interpolateColor(
          progress.value,
          [0, 1],
          [unCheckedBorderColor, checkedBorderColor],
          'RGB',
        );

        return { stroke, fill };
      },
      [],
      adapter,
    );

    return (
      <AnimationColor
        animatedProps={animation}
        d="M2 16C2 8.26801 8.26801 2 16 2H33C40.732 2 47 8.26801 47 16V33C47 40.732 40.732 47 33 47H16C8.26801 47 2 40.732 2 33V16Z"
        strokeWidth={2}
      />
    );
  },
);

export default AnimatedColor;
