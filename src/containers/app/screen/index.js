import 'react-native-gesture-handler';

import React from 'react';
import PropTypes from 'prop-types';
import { AppNavigation, AuthNavigation } from '@navigation';

const AppScreen = ({ isSigned }) => {
  return isSigned ? <AppNavigation /> : <AuthNavigation />;
};

AppScreen.propTypes = {
  isSigned: PropTypes.bool
};

AppScreen.defaultProps = {
  isSigned: false
};

export default AppScreen;
