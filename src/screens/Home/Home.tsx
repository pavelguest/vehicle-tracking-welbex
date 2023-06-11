import React from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { useStyles } from './Home.styles';
import { THomeProps, TVehicle } from './Home.types';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { VehicleFilter } from './components/VehicleFilter';
import { useTranslation } from 'react-i18next';
import { Touchable } from '../../components/Touchable';
import LocationIcon from '../../components/Icons/LocationIcon';
import { SelectVehicleCategories } from '../../modals/SelectVehicleCategories';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { VehicleCard } from './components/VehicleCard';
import { useStore } from '../../store';
import i18next from 'i18next';
import { observer } from 'mobx-react-lite';
import { Text } from '../../components/Text';

const itemKeyExtractor = (item: TVehicle) => item.id;

const Home: React.FC<THomeProps> = observer(() => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { vehiclesStore } = useStore();

  const chosenFilters = Object.values(vehiclesStore.filters).includes(true);

  const interfaceLangId = i18next.language;

  useEffect(() => {
    vehiclesStore.getVehicles(interfaceLangId);
  }, [interfaceLangId, vehiclesStore]);

  const selectVehicleCategoriesModalRef = useRef<BottomSheetModal>(null);

  const filteredVehiclesData: TVehicle[] = useMemo(() => {
    if (!chosenFilters) return vehiclesStore.items;

    return vehiclesStore.items.filter(
      (item: TVehicle) => vehiclesStore.filters[item.category],
    );
  }, [chosenFilters, vehiclesStore.items, vehiclesStore.filters]);

  const renderVehicle = useCallback(({ item }: { item: TVehicle }) => {
    return <VehicleCard key={item.id} vehicle={item} />;
  }, []);

  const onPressChangeVehicleCategories = useCallback(() => {
    selectVehicleCategoriesModalRef.current?.dismiss();
  }, []);

  const handleNavigateToSelectVehicleCategories = useCallback(() => {
    selectVehicleCategoriesModalRef.current?.present();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        hidden={false}
        backgroundColor="transparent"
      />
      <View style={styles.filterContainer}>
        <VehicleFilter
          title={t('home.filter')}
          chosen={!!chosenFilters}
          handlePress={handleNavigateToSelectVehicleCategories}
        />
        <Touchable style={styles.mapIconContainer}>
          <Text style={styles.mapIconTitle}>{t('home.map')}</Text>
          <LocationIcon color={styles.iconColor.color} />
        </Touchable>
      </View>
      <FlatList
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        data={filteredVehiclesData}
        renderItem={renderVehicle}
        keyExtractor={itemKeyExtractor}
      />
      <SelectVehicleCategories
        title={t('selectVehicleCategories.modalTitle')}
        modalRef={selectVehicleCategoriesModalRef}
        onPressButton={onPressChangeVehicleCategories}
      />
    </View>
  );
});

export default memo(Home);
