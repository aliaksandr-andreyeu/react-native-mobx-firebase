import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '@containers';
import { stackNames } from '@constants';
import { Header } from '@components';

const Stack = createStackNavigator();

const options = (props) => ({
  header: () => <Header {...props} />
});

const DashboardStackNavigator = ({ route, navigation }) => (
  <Stack.Navigator initialRouteName={stackNames.app.dashboard}>
    <Stack.Screen name={stackNames.app.dashboard} component={Dashboard} options={options} />
  </Stack.Navigator>
);

export default DashboardStackNavigator;
