const express = require('express');

const morgan = require('morgan');

const mongoose = require('mongoose')

const Blog = require('./models/blog');
const { result } = require('lodash');
const { render } = require('express/lib/response');


//create app 

const app = express();


//connect to mongoDB 
const dbURI = 'mongodb+srv://brakoose:DoBetter$$$2022@cluster0.giein.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => app.listen(7676, () => {
    //listen for req after MONGODB connected 
    console.log('MongoDB conneted - listening on port 127.0.0.1:7676')
}))
    .catch((err) => console.log(err));


//register view engine
app.set('view engine', 'ejs');






//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'))



app.use((req, res, next) => {
    console.log('new resquest mode');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('Method:', req.method);
    next();
});




app.get('/', (req, res) => {
    //  res.send('<p>Home Page</p>')

    res.redirect('/blogs')

});

//redirects 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.get('/about', (req, res) => {
    //  res.send('<p>Home Page</p>')
    res.render('about', { title: 'About' })

});

app.get('/blogs', (req, res) => {

    Blog.find()
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err)
        })
});


app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err)
        })

});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            console.log(err)
        });
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a Blog' });
});



//404 Pages ablways at the bottom of the routing 
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })

});