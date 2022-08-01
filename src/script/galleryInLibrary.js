import { refs } from './refs';
import { MovieApi } from './fetchFilms';
import { renderCardsInLibrary } from './renderCardsInLibrary';
import { loadFromStorage } from './localStorage';
export let choosenList = 'queue';
// const keyQueue = 'queue';
const movieApi = new MovieApi();
const watchedBtn = document.querySelector('[data-action="watched"]');
const queueBtn = document.querySelector('[data-action="queue"]');

const renderMoviesInLibrary = async () => {
  const AddedList = loadFromStorage('queue') || [];
  console.log(AddedList);
  if (AddedList.length === 0) {
    refs.galleryLibrary.innerHTML = `<img src='https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg' alt="Sorry, you don't add movies at this list" loading="lazy" class="movie-card__img"/>`;
    return;
  }
  try {
    const loadAllMoviesByIdInLocalStorage = await fetchCardsForLibrary(
      AddedList
    );
    const allLibraryMovies = loadAllMoviesByIdInLocalStorage.map(
      card => card.data
    );
    console.log(allLibraryMovies);
    refs.galleryLibrary.innerHTML = renderCardsInLibrary(allLibraryMovies);
  } catch (err) {
    console.log(err.message);
  }
};
renderMoviesInLibrary();

const renderMoviesInLibraryOnClickBtnInHeader = async e => {
  choosenList = e.target.dataset.action;
  activeButtonStyle(choosenList, e);
  console.log('choosenList: ', choosenList);
  const AddedList = loadFromStorage(choosenList) || [];
  console.log(AddedList);
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
    console.log(allLibraryMovies);
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

function activeButtonStyle(choosenList, e) {
  if (choosenList === 'watched') {
    e.target.classList.add('active');
    e.target.previousElementSibling.classList.remove('active');
  } else {
    e.target.classList.add('active');
    e.target.nextElementSibling.classList.remove('active');
  }
}

queueBtn.addEventListener('click', renderMoviesInLibraryOnClickBtnInHeader);
watchedBtn.addEventListener('click', renderMoviesInLibraryOnClickBtnInHeader);

export { renderMoviesInLibraryOnClickBtnInHeader };
