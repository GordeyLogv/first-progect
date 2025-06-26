const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const router = require('./routes/index')

const PORT = 3000;

const app = express();

app.use(morgan('dev'));

app.use(router);

app.listen(PORT, () => {
    console.log('Server running')
})



