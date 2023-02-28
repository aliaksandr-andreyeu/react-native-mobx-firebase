import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Users } from '@containers';
import { stackNames } from '@constants';

const Stack = createStackNavigator();

const UsersStackNavigator = ({ route, navigation }) => {
  console.log('UsersNavigator:', route, navigation);

  return (
    <Stack.Navigator initialRouteName={stackNames.app.users}>
      <Stack.Screen name={stackNames.app.users} component={Users} />
    </Stack.Navigator>
  );
};

export default UsersStackNavigator;
