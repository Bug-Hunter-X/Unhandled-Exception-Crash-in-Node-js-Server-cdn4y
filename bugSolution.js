const http = require('http');

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/error') {
      throw new Error('Something went wrong!');
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (err) {
    console.error('Caught error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

// Additional uncaughtException handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  // Perform cleanup or logging here
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});