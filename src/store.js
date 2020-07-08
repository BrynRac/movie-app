import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ComposeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {};

export const store = createStore(rootReducer);
