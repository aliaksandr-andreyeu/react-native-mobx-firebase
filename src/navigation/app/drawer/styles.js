import { StyleSheet } from 'react-native';
import { theme } from '@constants';

const { colors } = theme;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: colors.white(),
    width: 240
  }
});

export default styles;
