import React, { memo, useCallback, useEffect, useState } from 'react';

import { GestureResponderEvent, View } from 'react-native';

import { useStyles } from './CheckboxField.styles';
import { ICheckboxFieldProps } from './CheckboxField.types';
import Checkbox from '../Checkbox/Checkbox';
import { Text } from '../Text';

/** Creates a checkbox field with two labels: left one (label) and right one close to the checkbox (sublabel).
 * It's a controlled component which receive value to shown and onPress function to handle press event.
 *
 * @param label Text to show at the left side
 * @param labelStyle Style of the left text
 * @param sublabel Text to show at the right side
 * @param sublabelStyle Style of the right text
 * @param containerStyle style of the whole checkbox wrapper
 * @param value boolean value of the checkbox state (true = checked)
 * @param onPress function to handle press event (usually changes value)
 */
const CheckboxField = memo<ICheckboxFieldProps>(
  ({
    label,
    sublabel,
    onPress,
    labelStyle,
    sublabelStyle,
    containerStyle,
    value: initialValue = false,
  }: ICheckboxFieldProps) => {
    const styles = useStyles();
    const [value, setValue] = useState(initialValue);

    const handleOnPress = useCallback(
      (event: GestureResponderEvent) => {
        onPress(event);
      },
      [onPress],
    );

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const _style = useCallback(
      ({ pressed }: { pressed: boolean }) => ({
        opacity: pressed ? 0.4 : 1,
      }),
      [],
    );

    const checkboxText = (
      <View>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        {sublabel && (
          <Text style={[styles.sublabel, sublabelStyle]}>{sublabel}</Text>
        )}
      </View>
    );

    return (
      <View style={[styles.container, containerStyle]}>
        <Checkbox
          testID="checkboxItem"
          style={_style}
          width={24}
          height={24}
          onPress={handleOnPress}
          checked={value}
          checkmarkSize="lg"
          checkMarkColor={styles.checkmark.color}
          checkedBorderColor={styles.checkedBorder.color}
          unCheckedBorderColor={styles.checkboxBorder.color}
          checkedBackgroundColor={styles.lightBackground.color}
          unCheckedBackgroundColor={styles.lightBackground.color}
          hitSlop={10}
          children={checkboxText}
        />
      </View>
    );
  },
);

export default CheckboxField;
