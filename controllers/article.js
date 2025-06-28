const fs = require('fs/promises');
const path = require('path');

const pathToLocalDataBase = path.join(__dirname, '..', 'localDataBase', 'article.json')

const getArticleHandler = ('/article', async (req, res) => {
    
    let allArticle = await fs.readFile(pathToLocalDataBase, 'utf-8')
      .then(allArticle => JSON.parse(allArticle))
      .catch(() => { })
    
    res.render('Article', {
        title: 'Article',
        isArticlePage: true,
        allArticle
    });

});

const getArticleTitleHandler = ('/:id', async (req, res) => {

    // let allArticle = await fs.readFile(pathToLocalDataBase, 'utf-8')
    //   .then(allArticle => JSON.parse(allArticle))
    //   .catch(() => { })

    // let serchTitle = JSON.stringify(req.params.title);



    // console.log(serchTitle);
    
    res.render('ArticleID')
})

// const deleteArticleHandler = ('/article/:id', (req, res) => {
//     res.render('Article', {
//         title: 'Article',
//         isArticlePage: true
//     });
// });

module.exports = {
    getArticleHandler,
    getArticleTitleHandler,
    // deleteArticleHandler
};