import React, { memo, useCallback, useMemo } from 'react';
import { StatusBar, View } from 'react-native';
import { useStyles } from './VehicleDetails.styles';
import { TVehicleDetailsProps } from './VehicleDetails.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { useStore } from '../../store';
import { callNumber } from '../../core/utils/callNumber';
import { Map } from '../../components/Map';

const VehicleDetails: React.FC<TVehicleDetailsProps> = ({ route }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const vehicleId = route.params.id;

  const { vehiclesStore } = useStore();

  const vehicle = useMemo(
    () => vehiclesStore.items.find(item => item.id === vehicleId),
    [vehicleId, vehiclesStore.items],
  );

  const handleToCall = useCallback(() => {
    vehicle?.driverContact && callNumber(vehicle.driverContact);
  }, [vehicle?.driverContact]);

  const handleToSendMessage = useCallback(() => {}, []);

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        hidden={false}
        backgroundColor="transparent"
      />
      {vehicle?.location && (
        <View style={styles.mapContainer}>
          <Map containerStyle={styles.map} vehicleData={vehicle} />
        </View>
      )}
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.itemTitle}>
            {`${t('vehicleDetails.vehicleCategory')}: ${t(
              `selectVehicleCategories.${vehicle?.category}`,
            )}`}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.itemTitle}>
            {`${t('vehicleDetails.driverName')}: ${vehicle?.driverName}`}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.itemTitle}>
            {`${t('vehicleDetails.driverPhoneNumber')}: ${
              vehicle?.driverContact
            }`}
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button containerStyle={styles.buttonSubmit} onPress={handleToCall}>
          <Text style={styles.buttonSubmitText}>
            {t('vehicleDetails.call')}
          </Text>
        </Button>
        <Button
          containerStyle={styles.buttonSubmit}
          onPress={handleToSendMessage}>
          <Text style={styles.buttonSubmitText}>
            {t('vehicleDetails.write')}
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default memo(VehicleDetails);
