var http = require("http");

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'html'});
   
res.end('This is the example of node.js web-based application \n');


}).listen(9090,
    ()=>console.log('Server running at http://127.0.0.1:9090/'));