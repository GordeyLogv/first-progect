const getRootHandler = ('/', (req, res) => {
    res.send('Home page');
});

module.exports = getRootHandler;
