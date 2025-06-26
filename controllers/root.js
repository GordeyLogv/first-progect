const getRootHandler = ('/', (req, res) => {
    res.render('Home-page', {
        title: 'Home page'
    });
});

module.exports = getRootHandler;
