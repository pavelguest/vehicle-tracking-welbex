import React from 'react';
import { useStyles } from './MarkerIcon.styles';
import { IMarkerIconProps } from './MarkerIcon.types';
import PassengerIcon from '../Icons/Map/PassengerIcon';
import LocationIcon from '../Icons/LocationIcon';
import CargoIcon from '../Icons/Map/CargoIcon';
import SpecialTransportIcon from '../Icons/Map/SpecialTransportIcon';

const VEHICLE_ICONS = {
  cargo: <CargoIcon color={'#FF0000'} />,
  passenger: <PassengerIcon color={'#FF0000'} />,
  specialTransport: <SpecialTransportIcon />,
};

const MarkerIcon: React.FC<IMarkerIconProps> = ({ typeIcon }) => {
  const styles = useStyles();

  return !typeIcon ? (
    <LocationIcon color={styles.icon.color} />
  ) : (
    VEHICLE_ICONS[typeIcon]
  );
};

export default MarkerIcon;
