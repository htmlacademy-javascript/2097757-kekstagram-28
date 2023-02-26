
/**
 * Проверка строки по длине
 * @param {string} target
 * @param {number} stringLength
 * @returns
 */
const validateStringLength = (target, stringLength) => {
  return (target.length <= stringLength) ? true : false;
};

/**
 * Проверка строки на предмет является ли палиндромом
 * @param {string|number} target
 * @returns
 */
const isPalindrome = (target) => {
  target = target.toString().toLowerCase().replaceAll(' ', '');
  let reversed = target.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
  return reversed === target;
};


/**
 *Извлекает только цифры из принятого аргумента
 * @param {number} target
 * @returns
 */
const parseDigits = (target) => {

  let digits = target.toString().replace(/[^0-9]/g, '');
  return (digits) ? Number(digits) : NaN;

};

/**
 *Добавит в начало строки символы другой строки.
 *В рультате исходная строка будет заданой длины
 * @param {string} target
 * @param {number} length
 * @param {string} pad
 * @return {string}
 */
const padStart = (target, length, pad) => {

  const start = pad.repeat(length);
  console.log(start);

  return `${start}${target}`.slice(-length);

};
