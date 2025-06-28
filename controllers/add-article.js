const fs = require('fs/promises');
const path = require('path');


const getAddArticle = ('/add-article', async (req, res) => {
    
    res.render('Add-article', {
        title: 'Add article',
        isAddArticlePage: true,
    });
});

const pathToLocalDataBase = path.join(__dirname, '..', 'localDataBase', 'article.json')

const postAddArticle = ('/add-article', async (req, res) => {
    
    const data = await fs.readFile(pathToLocalDataBase, 'utf-8')
      .then(data => JSON.parse(data))
      .catch(() => { });
    if (!data) { 
        res.status(500);
        res.send('Error to readFile')
    }
    
    const id = data.reduce((max, article) => {
      return article.id && article.id > max ? article.id : max;
    }, 0);

    const newArrArticle = {
      id: id + 1,
      ...req.body
    }

    data.push(newArrArticle);

    await fs.writeFile(pathToLocalDataBase, JSON.stringify(data, null, 2))
      .then(() => res.redirect('/article'))
      .catch(() => {
        res.status(500);
        res.send('Error to writeFile')        
      })
});

module.exports = {
    getAddArticle,
    postAddArticle
};