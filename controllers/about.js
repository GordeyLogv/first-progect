const getAboutHandler = ('/about', (req, res) => {
    res.render('About', {
    title: 'About',
    isAboutPage: true 
    });
});

module.exports = getAboutHandler;