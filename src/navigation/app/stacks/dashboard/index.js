import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '@containers';
import { stackNames } from '@constants';

const Stack = createStackNavigator();

const DashboardStackNavigator = ({ route, navigation }) => {
  console.log('DashboardNavigator:', route, navigation);

  return (
    <Stack.Navigator initialRouteName={stackNames.app.dashboard}>
      <Stack.Screen name={stackNames.app.dashboard} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default DashboardStackNavigator;
