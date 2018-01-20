import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const middlewares = {};
const reducers = () => {};

export default composeWithDevTools(middlewares)(createStore)(reducers);