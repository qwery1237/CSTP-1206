const http = require('http');
const PORT = 3000;

// Create a server
const server = http.createServer((request, response) => {
  response.setHeader('Content-type', 'text/html');

  if (request.url === '/') {
    response.write('<h1>Assignment!</h1>');
    response.end();
  }

  if (request.url === '/dogs') {
    response.write(
      '<img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dog">'
    );
    response.end();
  }

  if (request.url === '/cats') {
    response.write(
      '<img src="https://spca.bc.ca/wp-content/uploads/white-cat-on-plaid-pillow-825x549.jpg" alt="cat">'
    );
    response.end();
  }
});

server.listen(PORT, () => {
  console.log('My Server is running on port', PORT);
});
