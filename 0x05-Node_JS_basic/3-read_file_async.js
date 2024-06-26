/* eslint-disable guard-for-in */
const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift();
    const dictionary = {};
    let count = 0;
    lines.forEach((line) => {
      const temp = line.trim().split(',');
      count += 1;
      const firstName = temp[0];
      const field = temp[3];
      if (dictionary[field]) {
        dictionary[field].push(firstName);
      } else {
        dictionary[field] = [firstName];
      }
    });
    console.log(`Number of students: ${count}`);
    for (const key in dictionary) {
      console.log(`Number of students in ${key}: ${dictionary[key].length}. List: ${dictionary[key].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
