import { StyleSheet } from 'react-native';
import { theme } from '@constants';

const { colors } = theme;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: colors.white(),
    flexGrow: 1
  },
  screen: {
    backgroundColor: colors.white(),
    flexGrow: 1,
    position: 'relative'
  }
});

export default styles;
