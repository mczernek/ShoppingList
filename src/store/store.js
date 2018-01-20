import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import navigationReducer from 'hierarchy/navigation/NavigationReducer';

const middlewares = {};
const reducers = combineReducers({
  nav: navigationReducer,
});

export default composeWithDevTools(middlewares)(createStore)(reducers);
