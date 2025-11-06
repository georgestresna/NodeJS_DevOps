const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://192.168.1.9:${PORT}/`);
});