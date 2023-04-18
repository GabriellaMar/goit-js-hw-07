import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery')

function createGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
 </li>
 `
    }).join('');
}

 const galleryMarkup = createGalleryItem(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', onGaleryItemsClick);


function onGaleryItemsClick(e) {
    const { target } = e;
    if (target.className !== "gallery__link") {
         return
     }
      e.preventDefault()
 }

 const gallery = new SimpleLightbox('a.gallery__link', {
    captions: true,
    captionsData: 'alt',
    fadeSpeed: 250,
  });

