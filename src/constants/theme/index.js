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
    }
  }
};

export default theme;
