var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'Text/plain' });

    res.end("Hello");
});

server.listen(9090,
    () => console.log('Server running ...... 0n port 9090'));