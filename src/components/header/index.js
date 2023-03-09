import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { BackburgerIcon, MenuIcon } from '@images';
import { useDrawerStatus } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { config, theme } from '@constants';

import styles from './styles';

const { colors } = theme;

const Header = ({ navigation, route }) => {
  const title = getHeaderTitle({}, route.name);

  const isDrawerOpen = useDrawerStatus() === 'open';

  const getLeftIcon = (Icon, size, color) => <Icon width={size} height={size} color={color} />;

  const leftIcon = getLeftIcon(isDrawerOpen ? BackburgerIcon : MenuIcon, 30, colors.white());

  const leftBtnPress = () => navigation.toggleDrawer();

  const rightBtnPress = () => {};

  return (
    <View style={styles.screen}>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.btn} activeOpacity={config.buttons.activeOpacity} onPress={leftBtnPress}>
          {leftIcon}
        </TouchableOpacity>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.btn} activeOpacity={config.buttons.activeOpacity} onPress={rightBtnPress} />
      </View>
    </View>
  );
};

export default Header;
