const express = require('express');
const Article = require('../models/article');

const getAddArticle = ('/add-article', (req, res) => {
    res.render('Add-article', {
    title: 'Add article',
    isAddArticlePage: true 
    });
});

const postAddArticle = ('/add-article', async (req, res) => {

    const article = new Article(req.body.title, req.body.time, req.body.image, req.body.text);

    article.save();

    res.redirect('/article')

});

module.exports = {
    getAddArticle,
    postAddArticle
};