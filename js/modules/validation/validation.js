
const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  return isValid;
});

