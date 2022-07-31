import { MovieApi } from './fetchFilms';
import { saveInStorage, loadFromStorage } from './localStorage';
const LOCALSTORAGE_KEY = 'genres';
const genresArr = loadFromStorage(LOCALSTORAGE_KEY) || [];
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
// if (window.location.pathname === '/index.html') {
getGenres();
// }

export const finalGenresString = function (genre_ids) {
  const genresList = genresArr.filter(({ id }) => {
    return genre_ids.includes(id);
  });
  if (genresList.length === 0) {
    return;
  } else if (genresList.length < 3) {
    return genresList.map(genreObj => genreObj.name).join(', ');
  } else {
    return (
      genresList
        .map(genreObj => genreObj.name)
        .slice(0, 2)
        .join(', ') + '...'
    );
  }
};
export const finalGenresForLibrary = function (genres) {
  if (genres.length === 0) {
    return;
  } else if (genres.length < 3) {
    return genres.map(genre => genre.name).join(', ');
  }
  return (
    genres
      .map(genre => genre.name)
      .slice(0, 2)
      .join(', ') + '...'
  );
};

function renderGenreMenu(options) {
  return options.map(option => {
    return (options = `<option value="${option.id}">${option.name}</option>`);
  });
}
