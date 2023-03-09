import { StyleSheet } from 'react-native';
import { theme, config } from '@constants';

const { colors, fonts } = theme;

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    backgroundColor: colors.primaryDark,
    height: config.header.height,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%'
  },
  btnBox: {
    minWidth: config.header.height
  },
  btn: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleBox: {
    justifyContent: 'center'
  },
  title: {
    color: colors.white(),
    fontFamily: fonts.titleMedium,
    fontSize: 18,
    lineHeight: 28
  }
});

export default styles;
