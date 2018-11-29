// @flow
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './src/App';
import store from './src/redux/store';

const AppWithStore = () => <Provider store={store}><App /></Provider>

AppRegistry.registerComponent('sparklemobile', () => AppWithStore);
