const getArticleHandler = ('/article', (req, res) => {
    res.render('Article', {
        title: 'Article',
        isArticlePage: true
    });
});

const postArticleHandler = ('/article', (req, res) => {
    res.render('Article', {
        title: 'Article',
        isArticlePage: true
    });
});

const deleteArticleHandler = ('/article/:id', (req, res) => {
    res.render('Article', {
        title: 'Article',
        isArticlePage: true
    });
});

module.exports = {
    getArticleHandler,
    postArticleHandler,
    deleteArticleHandler
};