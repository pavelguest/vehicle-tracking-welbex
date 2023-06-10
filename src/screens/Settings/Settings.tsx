import { StatusBar, View } from 'react-native';
import { useStyles } from './Settings.styles';
import { TSettingsProps } from './Settings.types';
import { memo } from 'react';

const Settings: React.FC<TSettingsProps> = () => {
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

export default memo(Settings);
