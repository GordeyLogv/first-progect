const fs = require('fs/promises');
const path = require('path');
const getAllArticle = require('../models/get-all-article');
const postAllArticle = require('../models/post-all-article');

const getAddArticle = ('/add-article', async (req, res) => {
    
    res.render('Add-article', {
        title: 'Add article',
        isAddArticlePage: true,
    });

});

const postAddArticle = ('/add-article', async (req, res) => {
    
    try {
        const data = await getAllArticle();
    
        const id = data.reduce((max, article) => {
          return article.id && article.id > max ? article.id : max;
        }, 0);

        const newArrArticle = {
          id: id + 1,
          ...req.body
        }

        data.push(newArrArticle);

        await postAllArticle(data, res);
    } catch (error) {
        res.status(500);
        res.send(`Ошибка на сервере: ${error}`)
    }
});

module.exports = {
    getAddArticle,
    postAddArticle
};