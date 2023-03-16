/**
 * @param {KeyboardEvent} event
 */
const onDocumentKeydown = (event) => {

  if (event.key.startsWith('Esc')) {
    /**
     * @type {HTMLButtonElement}
     */
    const closePopup = document.querySelector('.overlay:not(.hidden) .cancel');

    closePopup.click();
  }
};

/**
 * A function that is called when the user clicks on the cancel button.
 * @param {MouseEvent & {target: Element}} event
 * @returns {void}
 */
const onclosePopupClick = (event) => {
  const popup = event.target.closest('.overlay');

  popup.classList.add('hidden');

  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onclosePopupClick);
};

/**
 * @param {Element} popup
 */
const openPopup = (popup) => {
  const closePopup = popup.querySelector('.cancel');

  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  closePopup.addEventListener('click', onclosePopupClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

export default openPopup;
