import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from 'store/store'
import App from './App';

const ApplicationModule = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('ShoppingList', () => ApplicationModule);
