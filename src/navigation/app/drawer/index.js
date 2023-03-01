import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen from './screen';
import TabNavigator from '../tabs';
import { drawerNames } from '@constants';

import styles from './styles';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName={drawerNames.main}
    drawerContent={(props) => <DrawerScreen {...props} />}
    screenOptions={{
      drawerStyle: styles.drawer,
      headerShown: false,
      drawerType: 'slide'
    }}
  >
    <Drawer.Screen name={drawerNames.main} component={TabNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
