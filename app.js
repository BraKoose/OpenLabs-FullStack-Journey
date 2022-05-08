const express = require('express')

//create app 

const app = express();

//register view engine
app.set('view engine', 'ejs');


//listen for req

app.listen(7676);

app.get('/', (req, res) => {
    //  res.send('<p>Home Page</p>')
    res.render('index')

});

app.get('/about', (req, res) => {
    //  res.send('<p>Home Page</p>')
    res.render('about')

});

//redirects 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});


//404 Pages ablways at the bottom of the routing 
app.use((req, res) => {
    res.status(404).render('404')

});