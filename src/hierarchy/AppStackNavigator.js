import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import ListsScreen from 'lists/ListsScreen';
import { connect } from 'react-redux';
import Resources from 'Resources';
import TemplatesScreen from 'templates/TemplatesScreen';

const { colors } = Resources;

const StackNavigatorConfig = {
  Lists: {
    screen: ListsScreen,
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.headerColor,
        elevation: 4,
      },
      headerTintColor: colors.headerTextColor,
    },
  },
  Templates: {
    screen: TemplatesScreen,
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.headerColor,
        elevation: 4,
      },
      headerTintColor: colors.headerTextColor,
    },
  },
};

const Stack = StackNavigator(StackNavigatorConfig, { initialRouteName: 'ListsScreen' });

const AppStackNavigator = props => (
  <Stack
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
);

const mapStateToProps = state => ({ nav: state.nav });

AppStackNavigator.router = Stack.router;

export default connect(mapStateToProps)(AppStackNavigator);
