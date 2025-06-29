const getAllArticle = require('../models/get-all-article');
const findById = require('../models/find-by-id');
const postAllArticle = require('../models/post-all-article');

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

const getArticleToEditHandler = ('/article/:id/edit', async (req, res) => {
    
    let id = req.params.id;

    let allArticle = await getAllArticle();
    
    const article = await findById(allArticle, id);
    
    if (!req.query.allow) {
        res.redirect('/article');
    };

    res.render('Article-edit', {
        title: `Редактировать: ${article.title}`,
        article
    })
})

const postArticleToEditHandler = ('/edit', async (req, res) => {
    
    let id = req.params.id
    const { title, text, time, img } = req.body
    
    let allArticle = await getAllArticle();
    
    const article = await findById(allArticle, id);

    const index = allArticle.findIndex(article => allArticle.id === allArticle.id);

    allArticle[index] = {
        ...allArticle[index],
        title,
        text,
        time,
        img
    }

    await postAllArticle(allArticle, res);

    res.redirect('/article')
})

module.exports = {
    getArticleHandler,
    getArticleToIdHandler,
    getArticleToEditHandler,
    postArticleToEditHandler
};