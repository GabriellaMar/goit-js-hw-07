import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery')

function createGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
    </li>`
    }).join('');
}
const galeryMarkup = createGalleryItem(galleryItems)

galleryList.insertAdjacentHTML('beforeend', galeryMarkup)

galleryList.addEventListener('click', onGaleryItemsClick);

let openImg;

function onGaleryItemsClick(e) {
    const { target } = e;

    if (!target.dataset.source) {
        return
    }
    e.preventDefault()
    const image = e.target;
    const imgSource = image.dataset.source;

    if (openImg) {
        openImg.close()
    }
    openImg = basicLightbox.create(`
    <img src="${imgSource}">`)
    openImg.show()

}


window.addEventListener('keydown', closeImgOnESC);

function closeImgOnESC(e) {

    if (e.code === 'Escape') {
        openImg.close();
    }
}


