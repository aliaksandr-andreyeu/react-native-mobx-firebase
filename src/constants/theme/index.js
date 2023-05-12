const alpha = (a) => {
  return a !== undefined && typeof a === 'number' && a >= 0 && a <= 1 ? a : 1;
};

const theme = {
  dimensions: {
    base: 8
  },
  colors: {
    black: (a) => {
      return `rgba(0, 0, 0, ${alpha(a)})`;
    },
    white: (a) => {
      return `rgba(255, 255, 255, ${alpha(a)})`;
    },
    accent: '#ff5252',
    accentAlpha: (a) => {
      return `rgba(255, 82, 82, ${alpha(a)})`;
    },
    primary: '#3f51b5',
    primaryAlpha: (a) => {
      return `rgba(63, 81, 181, ${alpha(a)})`;
    },
    primaryDark: '#303f9f',
    primaryText: '#212121',
    secondaryDarkText: '#616161',
    secondaryLightText: '#9e9e9e',
    dividerLight: '#e6e6e6',
    dividerLighter: '#f5f5f5'
  },
  fonts: {
    titleSemiBold: 'Poppins-SemiBold',
    titleMedium: 'Poppins-Medium',
    textSemiBold: 'OpenSans-SemiBold',
    textMedium: 'OpenSans-Medium',
    textRegular: 'OpenSans-Regular'
  }
};

export default theme;
