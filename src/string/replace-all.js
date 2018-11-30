/**
 * @file replace all occurrences of a substring
 */

const isString = require('./is-string');

/**
 * @function pre-process special characters
 */
const escapeRegExp = str => {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

module.exports = (str, find, replace) => {
  if (!isString(str)) throw new TypeError();
  if (!isString(find)) throw new TypeError();
  if (!isString(replace)) throw new TypeError();
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
};
