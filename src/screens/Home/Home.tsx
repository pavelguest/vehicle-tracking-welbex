import { StatusBar, View } from 'react-native';
import { useStyles } from './Home.styles';
import { THomeProps } from './Home.types';
import { memo } from 'react';

const Home: React.FC<THomeProps> = () => {
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

export default memo(Home);
