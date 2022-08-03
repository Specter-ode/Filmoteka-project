import { MovieApi } from './fetchFilms';
import { refs } from './refs';
import { renderCards } from './renderCards';
import {
  paginationTui,
  popularPagination,
  searchPagination,
  filterPagination,
  microphonePagination,
} from './pagination';
import { alertNoEmptySearch, alertNoFilmsFound } from './alerts';
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const movieApi = new MovieApi();
const microphoneIcon = document.querySelector('.header-search__btn-mic');
const recordIcon = document.querySelector('.header-search__icon-record');
const recognition = new SpeechRecognition();

recognition.lang = 'en-EN';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

microphoneIcon.addEventListener('click', function () {
  refs.searchInputEl.value = '';
  startRecognition();
  console.log('Ready to receive a movieName command.');
});

recognition.onnomatch = function (e) {
  alert("I didn't recognise that movie.");
  recordIcon.classList.add('is-hidden');
  microphoneIcon.classList.remove('-active');
  recognition.stop();
};

recognition.onerror = function (e) {
  alert(`Error occurred in recognition: ${e.error}`);
  recordIcon.classList.add('is-hidden');
  microphoneIcon.classList.remove('-active');
  recognition.stop();
};

function listenSpeech(e) {
  const transcript = e.results[0][0].transcript;
  refs.searchInputEl.value = transcript;
  if (e.results[0].isFinal) {
    recognition.onspeechend = stopRecognition();
  }
  onSearchInputForMicrophone(transcript);
}

function startRecognition() {
  recognition.addEventListener('result', listenSpeech);
  recordIcon.classList.remove('is-hidden');
  microphoneIcon.classList.add('-active');
  recognition.start();
}
function stopRecognition() {
  console.log('Speech has stopped being detected');
  recognition.removeEventListener('result', listenSpeech);
  recordIcon.classList.add('is-hidden');
  microphoneIcon.classList.remove('-active');
  recognition.stop();
}

const onSearchInputForMicrophone = async movieName => {
  paginationTui.off('afterMove', popularPagination);
  paginationTui.off('afterMove', searchPagination);
  paginationTui.off('afterMove', filterPagination);
  paginationTui.off('afterMove', microphonePagination);
  paginationTui.movePageTo(1);
  movieApi.page = 1;
  movieApi.query = movieName;
  try {
    const { data } = await movieApi.fetchFilmsByInput();

    if (data.total_pages < 2) {
      refs.paginationWrap.classList.add('tui-pagination', 'hidden');
    } else refs.paginationWrap.classList.remove('tui-pagination', 'hidden');
    if (movieApi.query === '') {
      alertNoEmptySearch();
      return;
    } else if (data.total_results === 0) {
      alertNoFilmsFound();
      return;
    } else {
      refs.galleryEl.innerHTML = renderCards(data.results);
    }
    paginationTui.on('afterMove', microphonePagination);
    paginationTui.reset(data.total_results);
  } catch (err) {
    refs.galleryEl.innerHTML = '';
    console.log(err.message);
  }
};
