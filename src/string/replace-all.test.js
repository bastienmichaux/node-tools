const assert = require('assert');
const replaceAll = require('./replace-all.js');

describe('replace-all', () => {
  it('works', () => {
    const actual = replaceAll('lol lol lol mdr', 'lol', 'kik');
    const expected = 'kik kik kik mdr';
    assert.equal(actual, expected);
  });
});
