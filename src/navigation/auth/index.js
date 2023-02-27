import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, ResetPassword, SignUp } from '@containers';
import { stackNames } from '@constants';

const Stack = createStackNavigator();

const AuthNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={stackNames.signIn}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={stackNames.signIn} component={SignIn} />
      <Stack.Screen name={stackNames.signUp} component={SignUp} />
      <Stack.Screen name={stackNames.resetPassword} component={ResetPassword} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigation;
