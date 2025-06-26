const getRootHandler = ('/', (req, res) => {
    res.render('Home-page', {
        title: 'Home page',
        isHomePage: true
    });
});

module.exports = getRootHandler;
