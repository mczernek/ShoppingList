import { NavigationActions } from 'react-navigation';
import Stack from 'hierarchy/AppStackNavigator';

const initialState = Stack.router.getStateForAction(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'Lists',
    }),
  ],
}));

export default (state = initialState, action) => {
  const nextState = Stack.router.getStateForAction(action, state);
  return nextState || state;
};
