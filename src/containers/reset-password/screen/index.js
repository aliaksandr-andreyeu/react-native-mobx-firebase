import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const ResetPasswordScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View styles={styles.screen}>
        <Text>Reset Password Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
