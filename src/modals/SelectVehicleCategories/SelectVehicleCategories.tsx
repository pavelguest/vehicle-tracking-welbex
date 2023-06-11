import React, { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StyleSheet, View } from 'react-native';
import { useStyles } from './SelectVehicleCategories.styles';
import { TSelectVehicleCategoriesProps } from './SelectVehicleCategories.types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { CONTENT_PADDING_BOTTOM } from '../../core/styling/env/constants';
import { CheckboxField } from '../../components/CheckboxField';
import { TCategory, allCategories } from '../../core/constants';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { TFilters } from '../../store/types';

const SelectVehicleCategories: React.FC<TSelectVehicleCategoriesProps> =
  observer(({ title, modalRef, onPressButton }) => {
    const styles = useStyles();
    const { t } = useTranslation();
    const { bottom } = useSafeAreaInsets();

    const { vehiclesStore } = useStore();

    const [checkedItems, setCheckedItems] = useState<TFilters>(
      vehiclesStore.filters,
    );

    const combinedContainerStyles = StyleSheet.compose(styles.container, {
      paddingBottom: bottom + CONTENT_PADDING_BOTTOM,
    });

    const handleClearState = useCallback(() => {
      setCheckedItems(vehiclesStore.filters);
    }, [setCheckedItems, vehiclesStore]);

    const handleChange = useCallback(
      (id: TCategory) => {
        setCheckedItems({ ...checkedItems, [id]: !checkedItems[id] });
      },
      [checkedItems],
    );

    const handleSubmit = useCallback(() => {
      vehiclesStore.updateFilters(checkedItems);
      onPressButton();
    }, [onPressButton, checkedItems, vehiclesStore]);

    useEffect(() => {
      setCheckedItems(vehiclesStore.filters);
    }, [vehiclesStore.filters]);

    return (
      <Modal
        ref={modalRef}
        setHeader
        title={title}
        clearState={handleClearState}>
        <View style={combinedContainerStyles}>
          <View style={styles.containerMultiple}>
            {allCategories.map(category => {
              return (
                <CheckboxField
                  key={category.id}
                  label={t(`selectVehicleCategories.${category.id}`)}
                  value={!!checkedItems[category.id]}
                  onPress={() => handleChange(category.id)}
                />
              );
            })}
          </View>
          <Button containerStyle={styles.buttonSubmit} onPress={handleSubmit}>
            <Text style={styles.buttonSubmitText}>{t('common.apply')}</Text>
          </Button>
        </View>
      </Modal>
    );
  });

export default memo(SelectVehicleCategories);
