/* eslint-disable guard-for-in */
const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift();
    const dictionary = {};
    lines.forEach((line) => {
      const temp = line.trim().split(',');
      const firstName = temp[0];
      const field = temp[3];
      if (dictionary[field]) {
        dictionary[field].push(firstName);
      } else dictionary[field] = [firstName];
    });

    for (const key in dictionary) {
      console.log(`Number of students in ${key}: ${dictionary[key].length}. List: ${dictionary[key].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
