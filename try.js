var http = require("http");
var fileS = require("fs");



http.createServer(function (req, res) {
    fileS.readFile('data.html', (err, data) => {
        console.log(data);

        res.writeHead(200, { 'Content-Type': 'html' });

        res.write(data)
    })




    return res.end



}).listen(9090,
    () => console.log('Server running ...... 0n port 9090'));