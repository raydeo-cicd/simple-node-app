const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = new express();
const mongoose = require('mongoose');

const port = 3030;

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true,  useUnifiedTopology: true });


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/post',  function(req, res) {
    res.render('post');
});

app.listen(port, ()=> {
    console.log(`listing on port ${port}`)
});
