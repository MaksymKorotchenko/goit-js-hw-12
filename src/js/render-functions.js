import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const createMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        const imageTags = tags.split(',').slice(0, 3).join(',');

        return `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    alt="${imageTags}"/>
            </a>
            <div class="info-wrapper">
                <div class="attr-wrapper">
                    <span class="title">Likes</span>
                    <span class="text">${likes}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Views</span>
                    <span class="text">${views}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Comments</span>
                    <span class="text">${comments}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Downloads</span>
                    <span class="text">${downloads}</span>
                </div>
            </div>        
        </li>`;
      }
    )

    .join('');
  gallery.insertAdjacentHTML('afterbegin', createMarkup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}
