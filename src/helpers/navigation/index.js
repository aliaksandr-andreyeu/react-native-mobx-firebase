export const getActiveRouteName = (props) => {
  if (props === undefined) {
    return '';
  }
  const state = props.state || {};
  const route = state.routes ? state.routes[state.index] : {};
  return route.state ? getActiveRouteName(route) : route.name ? route.name : '';
};
