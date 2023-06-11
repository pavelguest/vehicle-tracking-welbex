import React, { memo, useRef, useState } from 'react';

import Animated, { useAnimatedProps } from 'react-native-reanimated';
import { Path } from 'react-native-svg';

import type { TCheckMarkPathProps } from './CheckMarkPath.types';

const CONFIG = {
  sm: {
    path: 'M 15 24.4068 L 21.6667 29.9999 L 33.5 20.1667',
    stroke: 2,
  },
  lg: {
    path: 'M 12 24.4068 L 20.6667 32.9999 L 36.5 17.1667',
    stroke: 3,
  },
};

const CheckMarkPath = memo<TCheckMarkPathProps>(props => {
  const { progress, checkMarkColor, checkmarkSize } = props;
  const [length, setLength] = useState(0);
  const pathRef = useRef<Path>(null);
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const checkMarkAnimation = useAnimatedProps(() => {
    const strokeDashoffset = length - length * progress.value;
    const opacity = progress.value;
    return { strokeDashoffset, opacity };
  });
  return (
    <AnimatedPath
      animatedProps={checkMarkAnimation}
      onLayout={() => setLength(pathRef.current?.getTotalLength() || 0)}
      ref={pathRef}
      d={CONFIG[checkmarkSize].path}
      stroke={checkMarkColor}
      strokeWidth={CONFIG[checkmarkSize].stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={length}
    />
  );
});

export default CheckMarkPath;
