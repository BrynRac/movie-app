import APIKEY from '../APIKey';
import axios from 'axios';

export async function getMovies(query) {
  const response = await axios(
    `http://www.omdbapi.com/?apikey=${APIKEY}&t={${query}}`
  );
  return response;
}
