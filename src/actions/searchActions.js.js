import { SEARCH_MOVIE } from './types';

export const searchMovie = (text) => (dispatch) => {
  return dispatch({ type: SEARCH_MOVIE, payload: text });
};
