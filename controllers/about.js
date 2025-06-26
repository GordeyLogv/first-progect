const getAboutHandler = ('/about', (req, res) => {
    res.send('About page');
});

module.exports = getAboutHandler;