/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from "react-redux";
import Store from './Store/configureStore';
const store = Store()
import HelloHeadler from "./Pages/HelloHandler";
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

const App = () => {
  return (
      
    <Provider store={store}>
        <HelloHeadler />
      </Provider>
  );
};

export default App;
