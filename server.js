const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set Header content type 

    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            res.write(data);
            res.end();
        }
    })

});

server.listen(8990, 'localhost', () => {
    console.log('listening for resquest on port 8990')
});

