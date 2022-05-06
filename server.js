const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');
});

server.listen(8990, 'localhost', () => {
    console.log('listening for resquest on port 8990')
});

