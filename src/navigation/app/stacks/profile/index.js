import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '@containers';
import { stackNames } from '@constants';

const Stack = createStackNavigator();

export const ProfileStackNavigator = ({ route, navigation }) => {
  console.log('ProfileNavigator:', route, navigation);

  return (
    <Stack.Navigator initialRouteName={stackNames.app.profile}>
      <Stack.Screen name={stackNames.app.profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
