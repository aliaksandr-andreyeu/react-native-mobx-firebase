import { StyleSheet } from 'react-native';
import { theme } from '@constants';

const {
  colors: { white, accent, primary, secondaryDarkText },
  fonts: { textRegular, textMedium, textSemiBold },
  dimensions: { base }
} = theme;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1
  },
  withLabel: {
    paddingTop: base * 1.25
  },
  labelContainer: {
    backgroundColor: white(),
    borderRadius: base * 0.25,
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: base,
    paddingHorizontal: base * 0.5
  },
  label: {
    color: primary,
    fontFamily: textMedium,
    fontSize: base * 1.5,
    fontWeight: '500',
    lineHeight: base * 2.25,
    textAlignVertical: 'center'
  },
  labelFocused: {
    fontFamily: textSemiBold,
    fontWeight: '600'
  },
  inputContainer: {
    backgroundColor: white(),
    borderWidth: base * 0.125,
    borderColor: primary,
    borderRadius: base * 0.5,
    alignItems: 'center',
    zIndex: 1,
    flexDirection: 'row',
    height: base * 6,
    width: '100%',
    paddingHorizontal: base * 1.5,
    paddingVertical: 0
  },
  withSecure: {
    paddingRight: base * 0.75
  },
  input: {
    flexShrink: 1,
    fontFamily: textRegular,
    color: secondaryDarkText,
    fontSize: base * 1.75,
    fontWeight: '400',
    lineHeight: base * 2.5,
    height: base * 5,
    margin: 0,
    padding: 0,
    textAlignVertical: 'center',
    width: '100%'
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: base,
    height: base * 4,
    justifyContent: 'center',
    marginLeft: base * 0.75,
    width: base * 4
  },
  errorContainer: {
    marginTop: base * 0.75
  },
  error: {
    color: accent,
    fontFamily: textRegular,
    fontSize: base * 1.5,
    fontWeight: '400',
    lineHeight: base * 2.25,
    textAlignVertical: 'center'
  }
});

export default styles;
