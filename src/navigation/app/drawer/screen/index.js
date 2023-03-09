import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { UsersIcon, DashboardIcon, ProfileIcon, LogoIcon } from '@images';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { drawerNames, stackNames, tabNames } from '@constants';
import { getActiveRouteName } from '@helpers';
import { theme } from '@constants';

import styles from './styles';

const { colors } = theme;

const DrawerScreen = (props) => {
  const currentRouteName = getActiveRouteName(props);

  const getLabel = (label, focused) => (
    <View style={styles.labelContainer}>
      <Text style={[styles.label, focused ? styles.labelTextFocused : styles.labelText]}>{label}</Text>
    </View>
  );

  const getIcon = (Icon, color, size) => (
    <View style={styles.icon}>
      <Icon width={size} height={size} color={color} />
    </View>
  );

  const drawerItems = [
    {
      label: ({ focused }) => getLabel(stackNames.app.dashboard, focused),
      icon: ({ color }) => getIcon(DashboardIcon, color, 24),
      focused: Boolean(currentRouteName === tabNames.dashboard || currentRouteName === drawerNames.main),
      onPress: () => props.navigation.navigate(tabNames.dashboard)
    },
    {
      label: ({ focused }) => getLabel(stackNames.app.users, focused),
      icon: ({ color }) => getIcon(UsersIcon, color, 24),
      focused: Boolean(currentRouteName === tabNames.users),
      onPress: () => props.navigation.navigate(tabNames.users)
    },
    {
      label: ({ focused }) => getLabel(stackNames.app.profile, focused),
      icon: ({ color }) => getIcon(ProfileIcon, color, 24),
      focused: Boolean(currentRouteName === tabNames.profile),
      onPress: () => props.navigation.navigate(tabNames.profile)
    }
  ];

  return (
    <Fragment>
      <View style={styles.logoContainer}>
        <LogoIcon width={40} height={40} />
        <View style={styles.logoNameContainer}>
          <Text style={styles.logoName}>Company</Text>
        </View>
      </View>
      <DrawerContentScrollView
        contentContainerStyle={styles.drawerContentScrollContainer}
        style={styles.drawerContentScroll}
        {...props}
      >
        {drawerItems.map((item, key) => {
          return (
            <DrawerItem
              key={key}
              label={item.label}
              icon={item.icon}
              focused={item.focused}
              onPress={item.onPress}
              activeTintColor={colors.white()}
              inactiveTintColor={colors.secondaryDarkText}
              activeBackgroundColor={colors.primaryDark}
              style={[styles.drawerItem, key === drawerItems.length - 1 && styles.drawerItemLast]}
            />
          );
        })}
      </DrawerContentScrollView>
    </Fragment>
  );
};

export default DrawerScreen;
