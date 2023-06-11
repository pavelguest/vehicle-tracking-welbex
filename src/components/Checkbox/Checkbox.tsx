import React, { memo } from 'react';

import { Pressable } from 'react-native';
import { useDerivedValue, withTiming } from 'react-native-reanimated';
import Svg from 'react-native-svg';

import { Background } from './Background';
import type { TCheckboxProps } from './Checkbox.types';
import { CheckMarkPath } from './CheckMarkPath';
import { useStyles } from './Checkbox.styles';

const Checkbox: React.FC<React.PropsWithChildren<TCheckboxProps>> = ({
  checked,
  checkMarkColor,
  checkedBorderColor,
  unCheckedBorderColor,
  checkedBackgroundColor,
  unCheckedBackgroundColor,
  height,
  width,
  checkmarkSize = 'lg',
  children,
  ...pressableProps
}) => {
  const styles = useStyles();
  const progress = useDerivedValue(() => {
    return withTiming(checked ? 1 : 0);
  });

  return (
    <Pressable {...pressableProps} style={styles.container}>
      <Svg width={width} height={height} viewBox="0 0 49 49">
        <Background
          progress={progress}
          checkedBorderColor={checkedBorderColor}
          unCheckedBorderColor={unCheckedBorderColor}
          checkedBackgroundColor={checkedBackgroundColor}
          unCheckedBackgroundColor={unCheckedBackgroundColor}
        />
        <CheckMarkPath
          checkmarkSize={checkmarkSize}
          progress={progress}
          checkMarkColor={checkMarkColor}
        />
      </Svg>
      {children}
    </Pressable>
  );
};

export default memo(Checkbox);
