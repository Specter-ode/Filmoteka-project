import Pagination from 'tui-pagination';
import { refs } from './refs';
import { MovieApi } from './fetchFilms';
import { makeMarkup } from './cardMarkup';

const movieApi = new MovieApi();
const options = {
  totalItems: '',
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
};
export let paginationTui = new Pagination('pagination', options);
export function paginationStart(data) {
  if (data.total_results > 10000) {
    data.total_results = 10000;
  }
  options.totalItems = data.total_results;
  paginationTui = new Pagination('pagination', options);
  return paginationTui;
}

export async function filterPagination(eventData) {
  movieApi.page = eventData.page;
  let promise;
  movieApi.genre
    ? (promise = await movieApi.fetchMovieFilterWithGenres())
    : (promise = await movieApi.fetchMovieFilterWithoutGenres());

  refs.galleryEl.innerHTML = makeMarkup(promise.data.results);
}

export async function searchPagination(eventData) {
  movieApi.page = eventData.page;
  movieApi.query = refs.searchInputEl.value;
  const { data } = await movieApi.fetchFilmsByInput();
  refs.galleryEl.innerHTML = makeMarkup(data.results);
}

export async function popularPagination(eventData) {
  movieApi.page = eventData.page;
  const { data } = await movieApi.fetchPopularFilms();
  refs.galleryEl.innerHTML = makeMarkup(data.results);
}

export async function microphonePagination(eventData) {
  movieApi.page = eventData.page;
  movieApi.query = refs.searchInputEl.value;
  const { data } = await movieApi.fetchFilmsByInput();

  refs.galleryEl.innerHTML = makeMarkup(data.results);
}
