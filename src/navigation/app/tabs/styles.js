import { StyleSheet } from 'react-native';
import { theme, config } from '@constants';

const { colors, fonts } = theme;

const styles = StyleSheet.create({
  tabBarBadgeStyle: {
    backgroundColor: colors.accent,
    color: colors.white(),
    fontFamily: fonts.titleMedium,
    fontSize: 10,
    lineHeight: 18,
    height: 16,
    minWidth: 16,
    borderRadius: 8,
    paddingHorizontal: 4,
    position: 'absolute',
    top: -4
  },
  tabBarItemStyle: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 6,
    paddingTop: 6
  },
  tabBarLabelStyle: {
    marginTop: 2,
    fontFamily: fonts.titleMedium,
    fontSize: 12,
    lineHeight: 18
  },
  tabBarStyle: {
    backgroundColor: colors.white(),
    display: 'flex',
    minHeight: config.bottomBar.height
  }
});

export default styles;
