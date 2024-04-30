console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data) console.log('Your name is:', data.toString());
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
