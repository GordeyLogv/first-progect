const getAddArticle = ('/add-article', (req, res) => {
    res.render('Add-article', {
    title: 'Add article',
    isAddArticlePage: true 
    });
});

const postAddArticle = ('/add-article', (req, res) => {
    res.render('Article');
})

module.exports = {
    getAddArticle,
    postAddArticle
};