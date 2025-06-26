const getArticleHandler = ('/article', (req, res) => {
    res.send('Article page');
});

const postArticleHandler = ('/article', (req, res) => {
    res.send('Article page');
});

const deleteArticleHandler = ('/article/:id', (req, res) => {
    res.send('Article page');
});

module.exports = {
    getArticleHandler,
    postArticleHandler,
    deleteArticleHandler
};