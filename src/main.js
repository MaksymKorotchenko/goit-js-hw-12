import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  hideLoader,
  showLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form'),
  loadMore = document.querySelector('.load-button'),
  input = document.querySelector('.input'),
  button = document.querySelector('.button');

let currentPage = 1;
let totalPages = 0;
let userQuery = '';
let hits = 0;

function getTotalPages(data) {
  return Math.ceil(data.totalHits / data.hits.length);
}

hideLoadMoreButton();

form.addEventListener('submit', async event => {
  event.preventDefault();
  userQuery = input.value.trim();

  if (userQuery === '') {
    iziToast.error({
      message: 'Please, fill in the field',
      color: '#ef4040',
      messageColor: '#fff',
      position: 'topRight',
    });
    return;
  }

  currentPage = 1;
  button.disabled = true;
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(userQuery, currentPage);
    totalPages = getTotalPages(data);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: '#ef4040',
        messageColor: '#fff',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: `${error}`,
    });
  } finally {
    hideLoader();
    button.disabled = false;
  }
});

loadMore.addEventListener('click', handleClick);

async function handleClick() {
  currentPage += 1;
  loadMore.disabled = true;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(userQuery, currentPage);

    createGallery(data.hits);

    const item = document.querySelector('.gallery-item');
    const itemSize = item.getBoundingClientRect();

    window.scrollBy({
      top: itemSize.height * 2,
      behavior: 'smooth',
    });

    loadMore.disabled = false;

    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: '#fff',
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: `${error}`,
    });
  } finally {
    hideLoader();
  }
}
