import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItem =>
      `<div class="gallery__item">
        <a class="gallery__item" href="${galleryItem.original}">
          <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
        </a>
      </div>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 300,
});
