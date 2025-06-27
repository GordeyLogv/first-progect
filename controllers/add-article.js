const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const getAddArticle = ('/add-article', (req, res) => {
    res.render('Add-article', {
    title: 'Add article',
    isAddArticlePage: true 
    });
});

const postAddArticle = ('/add-article', (req, res) => {

    const newData = req.body;

    const pathFileDataBase = path.join(__dirname, '..', 'localDataBase', 'article.json');

    fs.readFile(pathFileDataBase, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            let jsonArr = [];

            try {
                jsonArr = JSON.parse(data);
            } catch (error) {
                res.status(500);
            };

            jsonArr.push(newData);

            fs.writeFile(pathFileDataBase, JSON.stringify(jsonArr, null, 2), (err) => {
                if (err) {
                    res.status(500);
                }
            res.redirect('/article');
            });
        };
    });

});

module.exports = {
    getAddArticle,
    postAddArticle
};