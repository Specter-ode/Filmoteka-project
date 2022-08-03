import { refs } from './refs';
import { alertNoEmptySearch, alertNoFilmsFound } from './alerts';
import { MovieApi } from './fetchFilms';
import { renderCards } from './renderCards';
import { debounce } from 'debounce';
import {
  paginationTui,
  paginationStart,
  popularPagination,
  searchPagination,
  filterPagination,
  microphonePagination,
} from './pagination';

const DEBOUNCE_DELAY = 500;
const movieApi = new MovieApi();

const renderPopularFilms = async () => {
  paginationTui.off('afterMove', filterPagination);
  paginationTui.off('afterMove', searchPagination);
  paginationTui.off('afterMove', microphonePagination);
  paginationTui.off('afterMove', popularPagination);
  paginationTui.movePageTo(1);
  try {
    const { data } = await movieApi.fetchPopularFilms();
    paginationStart(data);
    refs.galleryEl.innerHTML = renderCards(data.results);
    paginationTui.on('afterMove', popularPagination);
  } catch (err) {
    console.log(err);
  }
};
renderPopularFilms();

const onSearchInput = async e => {
  e.preventDefault();
  paginationTui.off('afterMove', popularPagination);
  paginationTui.off('afterMove', filterPagination);
  paginationTui.off('afterMove', microphonePagination);
  paginationTui.off('afterMove', searchPagination);
  movieApi.query = e.target.value.toLowerCase();
  movieApi.page = 1;
  paginationTui.reset();

  try {
    if (movieApi.query === '') {
      alertNoEmptySearch();
      refs.galleryEl.innerHTML = '';
      refs.paginationWrap.classList.add('tui-pagination', 'hidden');
      return;
    }
    const { data } = await movieApi.fetchFilmsByInput();
    if (data.total_pages < 2) {
      refs.paginationWrap.classList.add('tui-pagination', 'hidden');
    } else refs.paginationWrap.classList.remove('tui-pagination', 'hidden');
    if (data.total_results === 0) {
      alertNoFilmsFound();
      refs.paginationWrap.classList.add('tui-pagination', 'hidden');
      refs.galleryEl.innerHTML = '';
      return;
    } else {
      refs.galleryEl.innerHTML = renderCards(data.results);
    }
    paginationTui.on('afterMove', searchPagination);
    paginationTui.reset(data.total_results);
  } catch (err) {
    refs.galleryEl.innerHTML = '';
    console.log(err.message);
  }
};

refs.searchInputEl.addEventListener(
  'input',
  debounce(onSearchInput, DEBOUNCE_DELAY)
);
