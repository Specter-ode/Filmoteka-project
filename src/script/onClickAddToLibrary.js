import { MovieApi } from './fetchFilms';
import { refs } from './refs';
import { saveInStorage, loadFromStorage } from './localStorage';
const movieApi = new MovieApi();
let id;
let markup = '';
const ADD_TO_WATCHED = 'Add to watched';
const ADD_TO_QUEUE = 'Add to queue';
const REMOVE_FROM_WATCHED = 'Remove from watched';
const REMOVE_FROM_QUEUE = 'Remove from queue';

// setTimeout(() => {
//   const btnAddToQueue = document.querySelector('.queue-js');
//   const btnAddToWatched = document.querySelector('.watched-js');
//   console.log(btnAddToQueue);
//   btnAddToQueue.addEventListener('click', addToQueue());
//   btnAddToWatched.addEventListener('click', addToWatched());
// }, 0);
refs.modalContainer.addEventListener('click', onClickAddTo);
function onClickAddTo(e) {
  console.log(e.target.nodeName);
  console.log(e.target.dataset.id);
  console.log(e.target.name);
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = Number(e.target.dataset.id);
  const name = e.target.name;
  changeTextContent(name, e);
  activeButtonStyle(name, e);
  addToLocalStorage(id);
}

function addToLocalStorage(id) {}

function changeTextContent(name, e) {
  if (e.target.textContent === `ADD TO ${name}`) {
    return (e.target.textContent = `DELETE FROM ${name}`);
  }
  return (e.target.textContent = `ADD TO ${name}`);
}

function activeButtonStyle(name, e) {
  if (name === 'WATCHED') {
    e.target.classList.add('film-modal__button--active');
    e.target.previousElementSibling.classList.remove(
      'film-modal__button--active'
    );
  } else {
    e.target.classList.add('film-modal__button--active');
    e.target.nextElementSibling.classList.remove('film-modal__button--active');
  }
}
