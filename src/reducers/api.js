import { HELLO_WORLD } from '../actions/api';

export function helloWorld(state = '', action) {
  if (action.type === HELLO_WORLD) {
    return console.log('Hello World');
  }
  return state;
}
