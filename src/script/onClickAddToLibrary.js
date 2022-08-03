import { refs } from './refs';
import {
  loadFromStorage,
  addToEmptyStorage,
  addToStorage,
  removeFromStorage,
} from './localStorage';

const keyQueue = 'queue';
const keyWatched = 'watched';

function onClickAddTo(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = Number(e.target.dataset.id);
  const name = e.target.name;
  if (name === 'trailer') {
    return;
  }
  activeButtonStyle(name, e);
  changeTextContent(name, e);
  if (name === 'queue') {
    onClickQueue(id);
  } else if (name === 'watched') {
    onClickWatched(id);
  }
}

function onClickQueue(id) {
  console.log('Нажатие на кнопку QUEUE, ID это карточки - ', id);
  console.log(localStorage.getItem(keyQueue));
  console.log(localStorage.getItem(keyQueue) === null);
  if (!localStorage.getItem(keyQueue)) {
    addToEmptyStorage(`queue`, id);
  } else if (localStorage.getItem(keyQueue).includes(id)) {
    removeFromStorage(keyQueue, id);
  } else {
    addToStorage(keyQueue, id);
  }
}
function onClickWatched(id) {
  if (!localStorage.getItem(keyWatched)) {
    addToEmptyStorage(keyWatched, id);
  } else if (localStorage.getItem(keyWatched).includes(id)) {
    removeFromStorage(keyWatched, id);
  } else {
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
  if (e.target.textContent === `Add to ${name}`) {
    return (e.target.textContent = `Remove from ${name}`);
  }
  return (e.target.textContent = `Add to ${name}`);
}

refs.modalContainer.addEventListener('click', onClickAddTo);

export { renderBtnQueueFromLocalStorage, renderBtnWatchedFromLocalStorage };
