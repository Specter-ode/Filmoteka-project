import { refs } from './refs';
import { youtubeKey } from './onOpenCard';

refs.backdrop.addEventListener('click', onClickBackdrop);
document.addEventListener('keydown', onClickEsc);
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

export function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-is-open');
  refs.modalContainer.innerHTML = '';
  youtubeKey = '';
  refs.closeModalFilmBtn.removeEventListener('click', closeModal);
}
