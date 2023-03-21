/**
 * @param {KeyboardEvent & {target: Element}} event
 */
const onDocumentKeydown = (event) => {

  const isEscapeKey = event.key.startsWith('Esc');
  const isTextField = event.target.matches('input[type="text"], textarea');

  if (isEscapeKey && !isTextField) {
    /**
     * @type {HTMLButtonElement}
     */
    const closePopupButton = document.querySelector('.overlay:not(.hidden) .cancel');

    closePopupButton.click();
  }
};

/**
 * A function that is called when the user clicks on the cancel button.
 * @param {MouseEvent & {target: Element}} event
 */
const onClosePopupButtonClick = (event) => {
  const popup = event.target.closest('.overlay');

  popup.classList.add('hidden');

  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

/**
 * @param {Element} popup
 */
const openPopup = (popup) => {
  const closePopupButton = popup.querySelector('.cancel');

  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  closePopupButton.addEventListener('click', onClosePopupButtonClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

export default openPopup;
