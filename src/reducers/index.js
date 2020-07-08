import helloWorld from './helloWorld';
import searchReducer from './searchReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  helloWorld,
  searchReducer,
});
