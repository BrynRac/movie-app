import { APIKEY } from '../APIKey';
import axios from 'axios';
import { SEARCH_MOVIE } from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: [],
};

export async function getMovies(query) {
  const response = await axios(
    `http://www.omdbapi.com/?apikey=${APIKEY}&t={${query}}`
  );
  return response;
}

export default function searchReducer(state = initialState, action) {
  if (action.type === SEARCH_MOVIE) {
    return {
      ...state,
      text: action.payload,
      loading: false,
    };
  }
  return state;
}
