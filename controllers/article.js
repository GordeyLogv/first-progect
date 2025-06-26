const getArticleHandler = ('/article', (req, res) => {
    res.render('Article', {
    title: 'Article'
    });
});

const postArticleHandler = ('/article', (req, res) => {
    res.render('Article', {
    title: 'Article'
    });
});

const deleteArticleHandler = ('/article/:id', (req, res) => {
    res.render('Article', {
    title: 'Article'
    });
});

module.exports = {
    getArticleHandler,
    postArticleHandler,
    deleteArticleHandler
};