import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '@containers';
import { stackNames } from '@constants';
import { Header } from '@components';

const Stack = createStackNavigator();

const options = (props) => ({
  header: () => <Header {...props} />
});

const ProfileStackNavigator = ({ route, navigation }) => (
  <Stack.Navigator initialRouteName={stackNames.app.profile}>
    <Stack.Screen name={stackNames.app.profile} component={Profile} options={options} />
  </Stack.Navigator>
);

export default ProfileStackNavigator;
