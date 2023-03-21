import openPopup from '../popup/popup.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');

/**
 * @type {HTMLDivElement}
 */
const popup = form.querySelector('.img-upload__overlay');

// @ts-ignore
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',

});

/**
 * @param {string} message
 * @param {(tags: string[]) => boolean} validate
 */
const addHashTagsValidator = (message, validate) => {

  pristine.addValidator(form.hashtags, (value) => {
    const tags = value.toLowerCase().split(' ').filter(Boolean);

    return validate(tags);
  }, message, 1, true);
};

/**
 * @param {string} message
 * @param {(description: string) => boolean} validate
 */
const addDescriptionValidator = (message, validate) => {
  pristine.addValidator(form.description, validate, message);
};

/**
 * @param {Event} event
 */
const onFormChange = (event) => {

  if (event.target === form.filename) {
    //TODO изображение
    openPopup(popup);
  }
};

const onFormReset = () => {
  pristine.reset();
};

/**
 * @param {SubmitEvent} event
 */
const onFormSubmit = (event) => {
  event.preventDefault();

  pristine.validate();
};

addHashTagsValidator(
  'хэш-теги должны начинаться с символа(#) решетка',
  (tags) => tags.every((tag) => tag.startsWith('#'))
);

addHashTagsValidator(
  'после решетки(#) буквы, цифры',
  (tags) => tags.every((tag) => /^#[a-zа-яё0-9]+$/.test(tag))
);

addHashTagsValidator(
  'максимальная дина(#) хэш-тега 20 символов',
  (tags) => tags.every((tag) => tag.length <= 20)
);

addHashTagsValidator(
  'не более 5 хэш-тегов',
  (tags) => tags.length <= 5
);

addHashTagsValidator(
  'хэш-теги не должны повторяться',
  (tags) => tags.length === new Set(tags).size
);

addDescriptionValidator(
  'длина описания не должна превышать 140 символов',
  (description) => description.length <= 140
);


form.addEventListener('change', onFormChange);
form.addEventListener('reset', onFormReset);
form.addEventListener('submit', onFormSubmit);

