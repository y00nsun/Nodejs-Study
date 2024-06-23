const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello node.js');
    res.end();
});

server.listen(3000, () => {
    console.log('Sever is listening on port 3000')
});