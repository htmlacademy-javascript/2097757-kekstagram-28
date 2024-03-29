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
  'Какой-то человек',
  'Пять копеек',
];

/**
 * создает шаблон объекта для картинок
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
 * создает массив объектов из шаблона createCommentState
 * @param {number} length
 * @return {CommentState[]}
 */
const createCommentStateList = (length) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createCommentState(start + index));
};

/**
 * создает объект PictureState
 * @param {number} id
 * @return {PictureState}
 */
const createPictureState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromList(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comments = createCommentStateList(pickIntegerInRange(1, 10));

  return { id, url, description, likes, comments };
};


/**
 * возвращает список объектов PictureState
 * @param {number} length
 * @return {PictureState[]}
 */
const createPictureStateList = (length = 25) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createPictureState(start + index));
};

export default createPictureStateList;
