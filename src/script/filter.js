import { MovieApi } from './fetchFilms';
import { refs } from './refs';
import { renderCards } from './renderCards';
import {
  paginationTui,
  paginationStart,
  popularPagination,
  searchPagination,
  microphonePagination,
} from './pagination';
const movieApi = new MovieApi();
const yearChoice = document.querySelector('#year_choice');

yearMenu();

const onFilterChoice = async e => {
  e.preventDefault();
  paginationTui.off('afterMove', popularPagination);
  paginationTui.off('afterMove', searchPagination);
  paginationTui.off('afterMove', microphonePagination);
  paginationTui.off('afterMove', filterPagination);
  paginationTui.movePageTo(1);
  refs.searchInputEl.value = '';
  movieApi[e.target.name] = e.target.value;

  try {
    let promise;
    movieApi.page = 1;
    movieApi.genre
      ? (promise = await movieApi.fetchMovieFilterWithGenres())
      : (promise = await movieApi.fetchMovieFilterWithoutGenres());

    if (promise.data.total_pages < 2) {
      refs.paginationWrap.classList.add('tui-pagination', 'hidden');
    }
    if (promise.data.results.length === 0) {
      refs.paginationWrap.classList.add('tui-pagination', 'hidden');
    }
    paginationStart(promise.data);
    refs.galleryEl.innerHTML = renderCards(promise.data.results);
    paginationTui.on('afterMove', filterPagination);
  } catch (err) {
    console.log(message.err);
  }
};
async function filterPagination(eventData) {
  movieApi.page = eventData.page;
  let promise;
  movieApi.genre
    ? (promise = await movieApi.fetchMovieFilterWithGenres())
    : (promise = await movieApi.fetchMovieFilterWithoutGenres());

  refs.galleryEl.innerHTML = renderCards(promise.data.results);
}
function yearMenu() {
  let startYear = 1969;
  let realYear = new Date().getFullYear();
  let years = [];

  yearChoice.insertAdjacentHTML(
    'beforeend',
    '<option value="">Choose year</option>'
  );
  for (let i = realYear; i > startYear; i -= 1) {
    years.push(`<option value="${i}">${i}</option>`);
  }
  yearChoice.insertAdjacentHTML('beforeend', years);
}

refs.filterInput.forEach(item =>
  item.addEventListener('change', onFilterChoice)
);
