const getAboutHandler = ('/about', (req, res) => {
    res.render('About', {
    title: 'About'
    });
});

module.exports = getAboutHandler;