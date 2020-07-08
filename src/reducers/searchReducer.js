import { SEARCH_MOVIE, FETCH_MOVIES } from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: [],
};


export default function searchReducer(state = initialState, action) {
  if (action.type === SEARCH_MOVIE) {
    return {
      ...state,
      text: action.payload,
      loading: false,
    };
  }
  if (action.type === FETCH_MOVIES) {
    return {
      ...state,
      movies: action.payload.Search,
    };
  }
  return state;
}
