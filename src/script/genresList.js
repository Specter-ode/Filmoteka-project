import { alertNoDataGenresQuery, alertNoDataGenresLocalStrg } from './alerts';
import { MovieApi } from './fetchFilms';
import {
  saveOnLocalStorag,
  getOnLocalStorage,
  removeOnLocalStorage,
} from './localStorage';

const movieApi = new MovieApi();

const genresListObj = async () => {
  try {
    const { data } = await movieApi.fetchMovieGenres();
    saveOnLocalStorag(localStorageKeyGenres, data.genres);
    console.log(genresArr.push(...data.genres));
    return genresArr.push(...data.genres);
  } catch (err) {
    console.log(err);
  }
};

const localStorageKeyGenres = 'genres-kod';
const genresArr = getOnLocalStorage(localStorageKeyGenres) || [];

if (genresArr.length === 0) {
  genresListObj();
}

export const finalGanresString = function (genre_ids) {
  const positiveGenres = genresArr.filter(({ id }) => {
    return genre_ids.includes(id);
  });
  const genresArrLengtn = positiveGenres.length;
  if (genresArrLengtn === 0) {
    return;
  }
  if (genresArrLengtn < 3) {
    return positiveGenres.map(genreObj => genreObj.name).join(', ');
  } else {
    return (
      positiveGenres
        .map(genreObj => genreObj.name)
        .slice(0, 2)
        .join(', ') + ' ...'
    );
  }
};
