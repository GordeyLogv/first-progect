const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes/index');

const PORT = 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router);

app.listen(PORT, () => {
    console.log('Server running')
})



