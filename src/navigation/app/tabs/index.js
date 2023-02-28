import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UsersIcon, DashboardIcon, ProfileIcon } from '@images';
import { DashboardStackNavigator, UsersStackNavigator, ProfileStackNavigator } from '../stacks';
import { tabNames, tabBarLabels } from '@constants';

import styles from './styles';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: '#0D911D',
  tabBarInactiveTintColor: '#3d403e',
  tabBarLabelPosition: 'below-icon',
  unmountOnBlur: true,
  ...styles.tabBarBadgeStyle,
  ...styles.tabBarItemStyle,
  ...styles.tabBarLabelStyle,
  ...styles.tabBarStyle
};

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName={tabNames.dashboard}
    // backBehavior={'history'}
    screenOptions={screenOptions}
  >
    <Tab.Screen
      name={tabNames.dashboard}
      component={DashboardStackNavigator}
      options={{
        tabBarLabel: tabBarLabels.dashboard,
        tabBarIcon: ({ color }) => <DashboardIcon width={24} height={24} color={color} />
      }}
    />
    <Tab.Screen
      name={tabNames.users}
      component={UsersStackNavigator}
      options={{
        tabBarLabel: tabBarLabels.users,
        tabBarIcon: ({ color }) => <UsersIcon width={24} height={24} color={color} />
      }}
    />
    <Tab.Screen
      name={tabNames.profile}
      component={ProfileStackNavigator}
      options={{
        tabBarLabel: tabBarLabels.profile,
        tabBarIcon: ({ color }) => <ProfileIcon width={24} height={24} color={color} />
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
