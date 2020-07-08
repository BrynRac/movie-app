import { APIKEY } from '../APIKey';
import axios from 'axios';
import { SEARCH_MOVIE } from '../actions/actions';

const initialStates = {
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

export default function searchReducer(state = [], action) {
  if (action.type === SEARCH_MOVIE) {
    return console.log('searchhhh');
  }
  return state;
}
