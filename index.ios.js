'use strict';

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { AppRegistry } from 'react-native';

import AppContainer from './app/containers/AppContainer/';
import reducers from './app/store/reducers/';

const store = createStore(
  reducers
)

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
export default App;

AppRegistry.registerComponent('Recipe', () => App);
