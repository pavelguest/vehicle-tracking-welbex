import React, { memo } from 'react';

import { View } from 'react-native';

import { useStyles } from './SelectItem.styles';
import { SelectItemProps } from './SelectItem.types';
import { Touchable } from '../Touchable';
import { Text } from '../Text';
import ChevronDownSelectedIcon from '../Icons/ChevronDownSelectedIcon';

const SelectItem: React.FC<SelectItemProps> = ({
  label,
  handlePress,
  isSelected,
  containerStyle,
  labelStyle,
}) => {
  const styles = useStyles();
  return (
    <>
      <Touchable
        style={[styles.container, containerStyle]}
        onPress={handlePress}
        hitSlop={0}>
        <Text style={[styles.name, labelStyle]}>{label}</Text>
        {isSelected && <ChevronDownSelectedIcon color={styles.icon.color} />}
      </Touchable>
      <View style={styles.separator} />
    </>
  );
};

export default memo(SelectItem);
