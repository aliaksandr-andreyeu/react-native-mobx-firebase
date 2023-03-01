const alpha = (a) => {
  return a !== undefined && typeof a === 'number' && a >= 0 && a <= 1 ? a : 1;
};

const theme = {
  colors: {
    black: (a) => {
      return `rgba(0, 0, 0, ${alpha(a)})`;
    },
    white: (a) => {
      return `rgba(255, 255, 255, ${alpha(a)})`;
    },
    primary: '#3f51b5',
    primaryDark: '#303f9f',
    secondaryDarkText: '#616161',
    dividerLight: '#e6e6e6',
    dividerLighter: '#f5f5f5'
  },
  fonts: {
    titleMedium: 'Poppins-Medium',
    titleSemiBold: 'Poppins-SemiBold'
  }
};

export default theme;
