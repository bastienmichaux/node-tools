/**
 * @file convert text file to array of strings, one element per line
 */

const fs = require('fs');

module.exports = (file) => {
  if (fs.existsSync(file)) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      return data.toString().split('\n');
    });
  } else {
   console.error('file does not exist');
  }
};
