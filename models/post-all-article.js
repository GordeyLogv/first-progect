const path = require('path');
const fs = require('fs/promises');

const pathDB = path.join(__dirname, '..', 'localDataBase', 'article.json')

const postAllArticle = async (data, res) => {
    await fs.writeFile(pathDB, JSON.stringify(data, null, 2))
            .then(() => res.redirect('/article'))
            .catch(() => {
              res.status(500);
              res.send('Error to writeFile')        
        })
}

module.exports = postAllArticle;