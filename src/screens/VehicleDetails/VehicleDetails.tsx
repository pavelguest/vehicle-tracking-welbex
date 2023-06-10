import React, { memo } from 'react';
import { StatusBar, View } from 'react-native';
import { useStyles } from './VehicleDetails.styles';
import { TVehicleDetailsProps } from './VehicleDetails.types';

const VehicleDetails: React.FC<TVehicleDetailsProps> = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        hidden={false}
        backgroundColor="transparent"
      />
    </View>
  );
};

export default memo(VehicleDetails);
