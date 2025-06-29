const path = require('path');
const fs = require('fs/promises');

const pathDB = path.join(__dirname, '..', 'localDataBase', 'article.json')

const getAllArticle = async () => {
    const data = await fs.readFile(pathDB, 'utf-8')
          .then(data => JSON.parse(data))
          .catch(() => { });

    if (!data) { 
        res.status(500);
        res.send('Error to readFile');
    };

    return data;

    
}

module.exports = getAllArticle;