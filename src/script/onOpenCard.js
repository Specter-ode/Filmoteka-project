import { MovieApi } from './fetchFilms';
import { refs } from './refs';
import { movieCard } from './movieCard';
import { alertNoTrailer } from './alerts';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const movieApi = new MovieApi();
let youtubeKey = '';

const createMarkup = async id => {
  refs.loader.classList.remove('is-hidden');
  clearCard();
  movieApi.id = id;
  try {
    const { data } = await movieApi.fetchMovieById();
    refs.modalContainer.insertAdjacentHTML('beforeend', movieCard(data));
    refs.closeModalFilmBtn.addEventListener('click', closeModal);
    setTimeout(() => {
      const btnOpenTrailer = document.querySelector('.js-trailer');
      btnOpenTrailer.addEventListener('click', onOpenTrailerModal);
    }, 0);
  } catch (err) {
    console.log(err);
  }

  refs.modal.classList.remove('is-hidden');
  refs.loader.classList.add('is-hidden');
};

const onGalleryContainerClick = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-is-open');
  createMarkup(e.target.id);
};

function createYoutubeUrl(data) {
  const { results } = data;
  results.forEach(obj => {
    if (obj.name.includes('Official Trailer')) {
      youtubeKey = obj.key;
    }
  });
}
const onOpenTrailerModal = async () => {
  try {
    const { data } = await movieApi.fetchMovieByIdForTrailer();
    createYoutubeUrl(data);
    if (!youtubeKey) {
      alertNoTrailer();
      return;
    }
  } catch (err) {
    console.log(err);
  }

  const openTrailer = basicLightbox.create(`
        <iframe src='https://www.youtube.com/embed/${youtubeKey}'frameborder="0" allowfullscreen class="trailer_video" width="80%" height="80%"></iframe>`);
  openTrailer.show();
};

function clearCard() {
  refs.modalContainer.innerHTML = '';
}

function onClickBackdrop(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}
function onClickEsc(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-is-open');
  refs.modalContainer.innerHTML = '';
  youtubeKey = '';
  refs.closeModalFilmBtn.removeEventListener('click', closeModal);
}

refs.backdrop.addEventListener('click', onClickBackdrop);
document.addEventListener('keydown', onClickEsc);
refs.galleryEl.addEventListener('click', onGalleryContainerClick);
