
/**
 * Проверка строки по длине
 * @param {string} target
 * @param {number} stringLength
 * @returns
 */
const validateStringLength = (target, stringLength) => {
  const targetLength = target.length;
  return targetLength <= stringLength;
};

validateStringLength('person', 10);

/**
 * Проверка строки на предмет является ли палиндромом
 * @param {string|number} target
 * @returns
 */
const isPalindrome = (target) => {
  target = target.toString().toLowerCase().replaceAll(' ', '');
  const reversed = target.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
  return reversed === target;
};

isPalindrome(343);


/**
 *Извлекает только цифры из принятого аргумента
 * @param {number} target
 * @returns
 */
const parseDigits = (target) => {

  const digits = target.toString().replace(/[^0-9]/g, '');
  return (digits) ? Number(digits) : NaN;

};

parseDigits('1 car takes 25 gallons');

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

  return `${start}${target}`.slice(-length);

};

padStart('34', 3, 'length');
