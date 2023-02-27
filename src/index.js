import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'mobx-react';
import { App } from '@containers';

import stores from '@stores';

const Application = () => {
  return (
    <SafeAreaProvider>
      <Provider {...stores}>
        <App />
      </Provider>
    </SafeAreaProvider>
  );
};

export default Application;
