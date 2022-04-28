var http = require('http');


var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("Hello");
    } else if (req.url === '/blog') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("Blog Money");
        } else if (req.method === 'POST') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("Blog Wirter");
        }
    }

});

server.listen(9090,
    () => console.log('Server running ...... 0n port 9090'));