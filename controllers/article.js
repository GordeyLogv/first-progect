const getAllArticle = require('../models/get-all-article');
const findById = require('../models/find-by-id');

const getArticleHandler = ('/article', async (req, res) => {
    
    let allArticle = await getAllArticle();
    
    res.render('Article', {
        title: 'Article',
        isArticlePage: true,
        allArticle
    });

});

const getArticleToIdHandler = ('/article/:id', async (req, res) => {

    let id = req.params.id

    let allArticle = await getAllArticle();

    let article = await findById(allArticle, id);

    res.render('ArticleID', {
        title: `Article: ${article.title}`,
        article
    });
})

module.exports = {
    getArticleHandler,
    getArticleToIdHandler,
};