import { MovieApi } from './fetchFilms';
import { saveInStorage } from './localStorage';
const LOCALSTORAGE_KEY = 'genres';
const movieApi = new MovieApi();
const genreChoice = document.querySelector('#genre_choice');

const getGenres = async () => {
  try {
    const { data } = await movieApi.fetchMovieGenres();
    saveInStorage(LOCALSTORAGE_KEY, data.genres);
    genreChoice.insertAdjacentHTML('beforeend', renderGenreMenu(data.genres));
  } catch (err) {
    console.log(err);
  }
};
getGenres();

function renderGenreMenu(options) {
  return options.map(option => {
    return (options = `<option value="${option.id}">${option.name}</option>`);
  });
}
