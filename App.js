/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import AppStackNavigator from 'hierarchy/AppStackNavigator';

export class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}

App.router = AppStackNavigator.router;

export default App;
