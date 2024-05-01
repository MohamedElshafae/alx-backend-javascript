/* eslint-disable guard-for-in */
const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

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
    let output = `Number of students: ${count}\n`;
    for (const key in dictionary) {
      output += `Number of students in ${key}: ${dictionary[key].length}. List: ${dictionary[key].join(', ')}\n`;
    }
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const filePath = process.argv[2];

  try {
    const studentData = await countStudents(filePath);
    res.type('text/plain');
    res.send(studentData.trimEnd());
  } catch (error) {
    res.type('text/plain');
    res.send(error.message);
  }
});

app.listen(port);
module.exports = app;
