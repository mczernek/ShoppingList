import { createStore, combineReducers } from 'redux';
import listsDataReducer from 'lists/data/ListsDataReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import navigationReducer from 'hierarchy/navigation/NavigationReducer';

const middlewares = {};
const reducers = combineReducers({
  nav: navigationReducer,
  lists: listsDataReducer,
});

export default composeWithDevTools(middlewares)(createStore)(reducers);
