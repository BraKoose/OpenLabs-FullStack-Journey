const http = require('http');
const fs = require('fs')
const _ = require('lodash');

const server = http.createServer((req, res) => {

    //lodash

    const num = _.random(0, 23);
    console.log(num)

    const greet = _.once(() => {
        console.log('hello Koose')
    });

    greet()

    //set Header content type 

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        case '/hello':
            res.statusCode = 301;
            res.setHeader('Location', '/index');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;

            break
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            res.write(data);
            res.end();
        }
    })

});

server.listen(7878, 'localhost', () => {
    console.log('listening for resquest on port 7878')
});

