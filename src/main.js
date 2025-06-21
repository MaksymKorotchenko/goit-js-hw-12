import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  hideLoader,
  showLoader,
  clearGallery,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const userQuery = event.target.elements['search-text'].value.trim();
  if (userQuery === '') {
    iziToast.error({
      message: 'Please, fill in the field',
      color: '#ef4040',
      messageColor: '#fff',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(userQuery)
    .then(response => {
      if (response.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: '#ef4040',
          messageColor: '#fff',
          position: 'topRight',
        });
        return;
      }
      createGallery(response.hits);
    })
    .catch(error =>
      iziToast.error({
        message: `${error}`,
      })
    )
    .finally(() => hideLoader());
});
