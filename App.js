/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'mobx-react';
import observableStore from './store';
import AppContainer from './AppContainer';
const App = () => {
  return (
    <Provider observableStore={observableStore}>
      <AppContainer/>
    </Provider>
  );
};
export default App;
