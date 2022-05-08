const express = require('express')

//create app 

const app = express();

//listen for req

app.listen(7676);

app.get('/', (req, res) => {
    //  res.send('<p>Home Page</p>')
    res.sendFile('./views/index.html', { root: __dirname })

});

app.get('/about', (req, res) => {
    //  res.send('<p>Home Page</p>')
    res.sendFile('./views/about.html', { root: __dirname })

});

//redirects 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});


//404 Pages ablways at the bottom of the routing 
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })

});