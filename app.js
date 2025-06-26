const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

const PORT = 3000;

const app = express();

morgan('dev');

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/article', (req, res) => {
    res.send('Article page');
});

app.post('/article', (req, res) => {
    res.send('Article page');
});

app.delete('/article/:id', (req, res) => {
    res.send('Article page');
});

app.listen(PORT, () => {
    console.log('Server running')
})



