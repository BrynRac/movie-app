import { SEARCH_MOVIE, FETCH_MOVIES } from './types';
import axios from 'axios';
import { APIKEY } from '../APIKey';

export const searchMovie = (text) => (dispatch) => {
  return dispatch({ type: SEARCH_MOVIE, payload: text });
};

export const fetchMovies = (text) => async (dispatch) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?s=${text}&apikey=${APIKEY}`
  );
  try {
    return dispatch({ type: FETCH_MOVIES, payload: response.data });
  } catch (error) {
    alert('error in fetchMovies function: searchActions.js');
  }
};
