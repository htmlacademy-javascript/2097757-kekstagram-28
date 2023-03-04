import {
  pickIntegerInRange,
  pickItemFromList
} from '../utility/util.js';

//*массив описаний
const descriptions = [
  'description1',
  'description2',
  'description3'
];

//*массив сообщений
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
];

//*массив имен
const names = [
  'Игорь',
  'Анна',
  'Борис',
];

/**
 * @param {number} id
 * @return {CommentState}
 */
const createCommentState = (id) => {
  const avatar = `img/avatar-${pickIntegerInRange(1, 6)}.svg`;
  const message = pickItemFromList(messages);
  const name = pickItemFromList(names);

  return {id, avatar, message, name};
};

/**
 *
 * @param {number} length
 * @return {CommentState[]}
 */
const createCommentStateList = (length) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createCommentState(start + index));
};

/**
 * *создает объект ImageState
 * @param {number} id
 * @return {ImageState}
 */
const createImageState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromList(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comments = createCommentStateList(pickIntegerInRange(1, 10));

  return { id, url, description, likes, comments };
};


/**
 * *возвращает список объектов Image State
 * @param {number} length
 * @return {ImageState[]}
 */
const createImageStateList = (length = 25) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createImageState(start + index));
};

export default createImageStateList;
