import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE } from './types';
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
    alert('error in fetchMovies function: searchActions.js', error);
  }
};

export const fetchMovie = (id) => async (dispatch) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?i=${id}&apikey=${APIKEY}`
  );
  try {
    return dispatch({ type: FETCH_MOVIE, payload: response.data });
  } catch (error) {
    alert('error in fetchMovie function: searchActions.js', error);
  }
};
