import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Users } from '@containers';
import { stackNames } from '@constants';
import { Header } from '@components';

const Stack = createStackNavigator();

const options = (props) => ({
  header: () => <Header {...props} />
});

const UsersStackNavigator = ({ route, navigation }) => (
  <Stack.Navigator initialRouteName={stackNames.app.users}>
    <Stack.Screen name={stackNames.app.users} component={Users} options={options} />
  </Stack.Navigator>
);

export default UsersStackNavigator;
