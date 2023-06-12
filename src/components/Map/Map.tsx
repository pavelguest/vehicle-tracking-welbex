import React, { useCallback, useMemo } from 'react';

import { Platform, StyleSheet, View } from 'react-native';
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';

import { useStyles } from './Map.styles';
import { IMapProps } from './Map.types';
import MarkerIcon from '../MarkerIcon/MarkerIcon';
import { useNavigation } from '../../navigation/navigation';

const Map: React.FC<IMapProps> = ({
  vehicleData,
  containerStyle,
  multiple,
  vehiclesData,
}) => {
  const styles = useStyles();
  const navigation = useNavigation();

  const combinedContainerStyles = StyleSheet.compose(
    styles.container,
    containerStyle,
  );

  const region = useMemo(() => {
    if (vehicleData)
      return {
        latitude: vehicleData.location.lat,
        longitude: vehicleData.location.lng,
        latitudeDelta: 0.055,
        longitudeDelta: 0.0121,
      };

    if (vehiclesData?.length)
      return {
        latitude: vehiclesData[0].location.lat,
        longitude: vehiclesData[0].location.lng,
        latitudeDelta: 1.615,
        longitudeDelta: 1.5121,
      };
    return undefined;
  }, [vehicleData, vehiclesData]);

  const handleNavigateToVehicleDetails = useCallback((id: string) => {
    navigation.navigate('VehicleDetails', { id: id });
  }, []);

  return (
    <View style={combinedContainerStyles}>
      <MapView
        provider={
          Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
        }
        style={styles.map}
        region={region}>
        {multiple && vehiclesData
          ? vehiclesData.map(vehicle => (
              <Marker
                key={vehicle.id}
                coordinate={{
                  latitude: vehicle.location.lat,
                  longitude: vehicle.location.lng,
                }}
                onPress={() => handleNavigateToVehicleDetails(vehicle.id)}>
                <MarkerIcon typeIcon={vehicle.category} />
              </Marker>
            ))
          : vehicleData && (
              <Marker
                coordinate={{
                  latitude: vehicleData.location.lat,
                  longitude: vehicleData.location.lng,
                }}
                title={vehicleData.carBrand}
                description={`${vehicleData.driverName} ${vehicleData.driverContact}`}>
                <MarkerIcon typeIcon={vehicleData.category} />
              </Marker>
            )}
      </MapView>
    </View>
  );
};

export default Map;
