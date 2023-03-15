/**
 * @param {HTMLElement} preview
 */
const preview = document.querySelector('.big-picture__preview');

/**
 * @type {HTMLUListElement} discussion
 */
const discussion = preview.querySelector('.social__comments');

/**
 * @type {HTMLElement}
 */
const commentTemplate = discussion.querySelector('.social__comment');

/**
 * @param {CommentState} data
 * @return {HTMLElement}
 */
const createComment = (data) => {
  const comment =
    /**
     * @type {HTMLElement}
     */
    (commentTemplate.cloneNode(true));
  comment.querySelector('.social__picture').setAttribute('src', data.avatar);
  comment.querySelector('.social__picture').setAttribute('alt', data.name);
  comment.querySelector('.social__text').textContent = data.message;

  return comment;

};

/**
 * @param{PictureState} data
 */
const updatePreview = (data) => {
  preview.querySelector('.big-picture__img img').setAttribute('src', data.url);
  preview.querySelector('.social__caption').textContent = data.description;
  preview.querySelector('.likes__count').textContent = String(data.likes);

  discussion.replaceChildren(...data.comments.map(createComment));
};

export default updatePreview;
