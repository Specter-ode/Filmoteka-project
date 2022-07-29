import { MovieApi } from './fetchFilms';
import { refs } from './refs';
import { makeMarkup } from './cardMarkup';
import {
  paginationTui,
  paginationStart,
  popularPagination,
  searchPagination,
  filterPagination,
  microphonePagination,
} from './pagination';
const movieApi = new MovieApi();

const genreChoice = document.querySelector('#genre_choice');
const yearChoice = document.querySelector('#year_choice');
const sortChoice = document.querySelector('#sort_choice');

yearMenu();
genreMenu();
const onFilterChoice = async e => {
  e.preventDefault();
  paginationTui.off('afterMove', popularPagination);
  paginationTui.off('afterMove', searchPagination);
  paginationTui.off('afterMove', microphonePagination);
  paginationTui.off('afterMove', filterPagination);

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
    refs.galleryEl.innerHTML = makeMarkup(promise.data.results);
    paginationTui.on('afterMove', filterPagination);
  } catch (err) {
    refs.galleryEl.innerHTML = '';
  }
};

function renderGenreMenu(options) {
  return options.map(option => {
    return (options = `<option value="${option.id}">${option.name}</option>`);
  });
}

async function genreMenu() {
  try {
    const { data } = await movieApi.fetchMovieGenres();
    genreChoice.insertAdjacentHTML('beforeend', renderGenreMenu(data.genres));
  } catch (err) {
    console.log(err);
  }
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