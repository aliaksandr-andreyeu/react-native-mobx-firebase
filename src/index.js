import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'mobx-react';
import { App, ErrorBoundary } from '@containers';
import stores from '@stores';

const Application = () => (
  <SafeAreaProvider>
    <ErrorBoundary>
      <Provider {...stores}>
        <App />
      </Provider>
    </ErrorBoundary>
  </SafeAreaProvider>
);

export default Application;
