import { refs } from './refs';
import { MovieApi } from './fetchFilms';
import { choosenList } from './galleryInLibrary';
import { renderCardsInLibrary } from './renderCardsInLibrary';
import { loadFromStorage } from './localStorage';
const movieApi = new MovieApi();
const renderMoviesInLibraryOnClickInCards = async e => {
  const dataAction = e.target.dataset.action;
  console.log(choosenList);
  console.log('e.target.dataset.action: ', e.target.dataset.action);
  if (dataAction !== choosenList) {
    return;
  }
  const AddedList = loadFromStorage(dataAction) || [];
  console.log(AddedList);
  if (AddedList.length === 0) {
    refs.galleryLibrary.innerHTML = '';
    return;
  }
  try {
    const loadAllMoviesByIdInLocalStorage = await fetchCardsForLibrary(
      AddedList
    );
    console.log(loadAllMoviesByIdInLocalStorage);
    const allLibraryMovies = loadAllMoviesByIdInLocalStorage.map(
      card => card.data
    );
    console.log(allLibraryMovies);
    refs.galleryLibrary.innerHTML = renderCardsInLibrary(allLibraryMovies);
  } catch (err) {
    console.log(err.message);
  }
};

async function fetchCardsForLibrary(AddedList) {
  const arrayOfPromises = AddedList.map(async id => {
    movieApi.id = id;
    const response = await movieApi.fetchMovieById();
    return response;
  });
  console.log(arrayOfPromises);
  return await Promise.all(arrayOfPromises);
}

refs.modalContainer.addEventListener(
  'click',
  renderMoviesInLibraryOnClickInCards
);
