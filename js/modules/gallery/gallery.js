import updatePreview from '../gallery-preview/gallery-preview.js';
import openPopup from '../popup/popup.js';

/**
 * @type { HTMLElement }
 */
const gallery = document.querySelector('.pictures');

/**
 * @type {HTMLTemplateElement}
 */
const pictureTemplate = document.querySelector('#picture');
const popup = document.querySelector('.big__picture');

/**
 * *создаем копию карточки из template
 * @param {PictureState} data
 * @return {HTMLAnchorElement};
 */
const createPicture = (data) => {

  const picture =
  /**
   * @type {HTMLAnchorElement}
   */
  (pictureTemplate.content.querySelector('.picture').cloneNode(true));

  picture.querySelector('.picture__img').setAttribute('src', data.url);
  picture.querySelector('.picture__comments').textContent = String(data.comments.length);
  picture.querySelector('.picture__likes').textContent = String(data.likes);

  picture.addEventListener('click', () => {
    updatePreview(data);
  });

  return picture;
};

/**
 * @param {PictureState[]} data
 */
const renderPictures = (data) => {

  const pictures = gallery.querySelectorAll('.picture');
  const newPictures = data.map(createPicture);

  pictures.forEach((picture) => picture.remove());
  gallery.append(...newPictures);
};

/**
 * @param {PictureState[]} data
 */
const initGallery = (data) => {
  //  TODO Сортировка

  renderPictures(data);
  updatePreview(data[5]);
  openPopup(popup);

};


export default initGallery;
