import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View styles={styles.screen}>
        <Text>Dashboard Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
