import { StyleSheet } from 'react-native';
import { theme } from '@constants';

const { colors, fonts } = theme;

const styles = StyleSheet.create({
  icon: {
    marginLeft: 8
  },
  logoContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.dividerLight,
    backgroundColor: colors.dividerLighter
  },
  logoNameContainer: {
    marginLeft: 16
  },
  logoName: {
    color: colors.primary,
    fontFamily: fonts.titleSemiBold,
    fontSize: 20,
    lineHeight: 26
  },
  labelContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    flex: 1,
    paddingVertical: 4
  },
  label: {
    fontFamily: fonts.titleMedium,
    fontSize: 16,
    lineHeight: 24
  },
  labelText: {
    color: colors.secondaryDarkText
  },
  labelTextFocused: {
    color: colors.white()
  },
  drawerContentScrollContainer: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  drawerContentScroll: {
    flex: 1
  },
  drawerItem: {
    borderBottomWidth: 1,
    borderBottomColor: colors.dividerLight,
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 0
  },
  drawerItemLast: {
    borderBottomWidth: 0,
    borderBottomColor: 'transparent'
  }
});

export default styles;
