import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UsersIcon, DashboardIcon, ProfileIcon } from '@images';
import { DashboardStackNavigator, UsersStackNavigator, ProfileStackNavigator } from '../stacks';
import { tabNames, tabBarLabels } from '@constants';
import { theme } from '@constants';

import styles from './styles';

const { colors } = theme;

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarActiveTintColor: colors.primaryDark,
  tabBarInactiveTintColor: colors.secondaryDarkText,
  tabBarLabelPosition: 'below-icon',
  unmountOnBlur: true,
  headerShown: false,
  tabBarBadgeStyle: styles.tabBarBadgeStyle,
  tabBarItemStyle: styles.tabBarItemStyle,
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarStyle: styles.tabBarStyle
};

const TabNavigator = () => (
  <Tab.Navigator initialRouteName={tabNames.dashboard} screenOptions={screenOptions}>
    <Tab.Screen
      name={tabNames.dashboard}
      component={DashboardStackNavigator}
      options={{
        tabBarLabel: tabBarLabels.dashboard,
        tabBarIcon: ({ color }) => <DashboardIcon width={24} height={24} color={color} />,
        tabBarBadge: 2
      }}
    />
    <Tab.Screen
      name={tabNames.users}
      component={UsersStackNavigator}
      options={{
        tabBarLabel: tabBarLabels.users,
        tabBarIcon: ({ color }) => <UsersIcon width={24} height={24} color={color} />,
        tabBarBadge: 42
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
