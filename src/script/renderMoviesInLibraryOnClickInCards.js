import { refs } from './refs';
import { MovieApi } from './fetchFilms';
import { choosenList } from './galleryInLibrary';
import { renderCardsInLibrary } from './renderCardsInLibrary';
import { loadFromStorage } from './localStorage';
const movieApi = new MovieApi();
const renderMoviesInLibraryOnClickInCards = async e => {
  const dataAction = e.target.dataset.action;
  if (dataAction !== choosenList) {
    return;
  }
  const AddedList = loadFromStorage(dataAction) || [];
  if (AddedList.length === 0) {
    refs.galleryLibrary.innerHTML = '';
    return;
  }
  try {
    const loadAllMoviesByIdInLocalStorage = await fetchCardsForLibrary(
      AddedList
    );
    const allLibraryMovies = loadAllMoviesByIdInLocalStorage.map(
      card => card.data
    );
    refs.galleryLibrary.innerHTML = renderCardsInLibrary(allLibraryMovies);
  } catch (err) {
    console.log(err.message);
  }
};

function fetchCardsForLibrary(AddedList) {
  const arrayOfPromises = AddedList.map(async id => {
    movieApi.id = id;
    return await movieApi.fetchMovieById();
  });
  return Promise.all(arrayOfPromises);
}

refs.modalContainer.addEventListener(
  'click',
  renderMoviesInLibraryOnClickInCards
);
