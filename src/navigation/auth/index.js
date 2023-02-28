import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, ResetPassword, SignUp } from '@containers';
import { stackNames } from '@constants';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false
};

const AuthNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={stackNames.auth.signIn} screenOptions={screenOptions}>
      <Stack.Screen name={stackNames.auth.signIn} component={SignIn} />
      <Stack.Screen name={stackNames.auth.signUp} component={SignUp} />
      <Stack.Screen name={stackNames.auth.resetPassword} component={ResetPassword} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigation;
