const http = require('http');
const fs = require('fs').promises;

const port = 1245;
const path = process.argv[2];

const countStudents = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
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
      if (dictionary.hasOwnProperty(key)) {
        output += `Number of students in ${key}: ${dictionary[key].length}. List: ${dictionary[key].join(', ')}\n`;
      }
    }

    return output.trimEnd();
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
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');
      const studentList = await countStudents(path);
      res.end(studentList);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${error.message}`);
    }
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
