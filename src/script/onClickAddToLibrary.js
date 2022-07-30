import { refs } from './refs';
import { MovieApi } from './fetchFilms';
import {
  loadFromStorage,
  addToEmptyStorage,
  addToStorage,
  removeFromStorage,
} from './localStorage';
import { choosenList } from './galleryInLibrary';
import { renderCardsInLibrary } from './renderCardsInLibrary';
const keyQueue = 'queue';
const keyWatched = 'watched';
const movieApi = new MovieApi();

function onClickAddTo(e) {
  console.log(
    'window.location.pathname in onClickAddTo: ',
    window.location.pathname
  );
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = Number(e.target.dataset.id);
  const name = e.target.name;
  console.log('id: ', id);
  console.log('name: ', name);
  activeButtonStyle(name, e);
  changeTextContent(name, e);
  if (name === 'queue') {
    onClickQueue(id);
    return;
  }
  onClickWatched(id);
}

function onClickQueue(id) {
  console.log('Нажатие на кнопку QUEUE, ID это карточки - ', id);
  console.log(localStorage.getItem(keyQueue));
  console.log(localStorage.getItem(keyQueue) === null);
  if (!localStorage.getItem(keyQueue)) {
    console.log('addToEmptyStorage');
    addToEmptyStorage(`queue`, id);
  } else if (localStorage.getItem(keyQueue).includes(id)) {
    console.log('removeFromStorage');
    removeFromStorage(keyQueue, id);
  } else {
    console.log('addToStorage');
    addToStorage(keyQueue, id);
  }
}
function onClickWatched(id) {
  console.log('Ви натиснули на кнопку WATCHED, ID цієї картки - ', id);
  console.log(localStorage.getItem(keyWatched));
  console.log(localStorage.getItem(keyWatched) === null);
  if (!localStorage.getItem(keyWatched)) {
    console.log('addToEmptyStorage');
    addToEmptyStorage(keyWatched, id);
  } else if (localStorage.getItem(keyWatched).includes(id)) {
    console.log('removeFromStorage');
    removeFromStorage(keyWatched, id);
  } else {
    console.log('addToStorage');
    addToStorage(keyWatched, id);
  }
}

function renderBtnQueueFromLocalStorage(id) {
  const checkIdInLocalStorage = loadFromStorage(keyQueue) || [];
  if (checkIdInLocalStorage.includes(id)) {
    return `Remove from queue`;
  }
  return `Add to queue`;
}

function renderBtnWatchedFromLocalStorage(id) {
  const checkIdInLocalStorage = loadFromStorage(keyWatched) || [];
  if (checkIdInLocalStorage.includes(id)) {
    return `Remove from watched`;
  }
  return `Add to watched`;
}

function activeButtonStyle(name, e) {
  if (name === 'watched') {
    e.target.classList.add('film-modal__button--active');
    e.target.previousElementSibling.classList.remove(
      'film-modal__button--active'
    );
  } else {
    e.target.classList.add('film-modal__button--active');
    e.target.nextElementSibling.classList.remove('film-modal__button--active');
  }
}
function changeTextContent(name, e) {
  console.log(e.target.textContent);
  console.log(`Add to ${name}`);
  console.log(e.target.textContent === `Add to ${name}`);
  if (e.target.textContent === `Add to ${name}`) {
    return (e.target.textContent = `Remove from ${name}`);
  }
  return (e.target.textContent = `Add to ${name}`);
}

const renderMoviesInLibraryOnClickInCards = async e => {
  const name = e.target.name;
  console.log(choosenList);
  console.log(name);
  if (name !== choosenList) {
    return;
  }
  const AddedList = loadFromStorage(name) || [];
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

refs.modalContainer.addEventListener('click', onClickAddTo);
if (window.location.pathname === '/library.html') {
  console.log(
    'window.location.pathname in renderMoviesInLibraryOnClickInCards: ',
    window.location.pathname
  );
  refs.modalContainer.addEventListener(
    'click',
    renderMoviesInLibraryOnClickInCards
  );
}
async function fetchCardsForLibrary(AddedList) {
  const arrayOfPromises = AddedList.map(async id => {
    movieApi.id = id;
    const response = await movieApi.fetchMovieById();
    return response;
  });
  return await Promise.all(arrayOfPromises);
}

export { renderBtnQueueFromLocalStorage, renderBtnWatchedFromLocalStorage };
