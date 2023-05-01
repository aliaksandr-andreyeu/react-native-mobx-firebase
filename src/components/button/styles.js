import { StyleSheet } from 'react-native';
import { theme } from '@constants';

const {
  dimensions: { base },
  fonts: { textSemiBold },
  colors: { black, primaryText, white, accent, primary, accentAlpha, primaryAlpha, dividerLighter, secondaryLightText }
} = theme;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: base * 6,
    borderRadius: base * 0.5,
    backgroundColor: white(),
    shadowColor: black(),
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4
  },
  buttonContainerPrimary: {
    backgroundColor: primary
  },
  buttonContainerAccent: {
    backgroundColor: accent
  },
  buttonContainerDisabled: {
    backgroundColor: white()
  },
  buttonBoxDisabled: {
    backgroundColor: dividerLighter
  },
  buttonBoxDisabledPrimary: {
    backgroundColor: primaryAlpha(0.45)
  },
  buttonBoxDisabledAccent: {
    backgroundColor: accentAlpha(0.45)
  },
  buttonBox: {
    width: '100%',
    borderRadius: base * 0.5,
    backgroundColor: white(),
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonBoxPrimary: {
    backgroundColor: primary
  },
  buttonBoxAccent: {
    backgroundColor: accent
  },
  buttonDesc: {
    fontFamily: textSemiBold,
    color: primaryText,
    fontSize: base * 1.75,
    fontWeight: '600',
    lineHeight: base * 2.5
  },
  buttonDescColor: {
    color: white()
  },
  buttonDescDisabled: {
    color: secondaryLightText
  },
  buttonDescColorDisabled: {
    color: white()
  }
});

export default styles;
