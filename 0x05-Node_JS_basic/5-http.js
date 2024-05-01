/* eslint-disable guard-for-in */
const http = require('http');
const fs = require('fs').promises;

const port = 1245;
const path = process.argv[2];

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

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      res.write('This is the list of our students\n');
      const studentList = await countStudents(path);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(studentList.trimEnd());
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  }
});

app.listen(port);
module.exports = app;
