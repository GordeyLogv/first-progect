// const {v4: uuidv4} = require('uuid');
// const fs = require('fs');
// const path = require('path');

// class Article {
//     constructor(title, time, image, text) {
//         this.title = title;
//         this.time = time;
//         this.image = image;
//         this.text = text
//         this.id = uuidv4();
//     }

//     toJSON() {
//         return JSON.stringify({
//             title: this.title,
//             time: this.time,
//             image: this.image,
//             text: this.text
//         })
//     }

//     async save() {
//         const article = await Article.getAll();

//         console.log(article);
//     }

//     static getAll() {
//         return new Promise((resolve, reject) => {
//             fs.writeFile(
//                 path.join(__dirname, '..', 'localDataBase', 'article.json'),
//                 'utf-8',
//                 (err, content) => {
//                     if (err) {
//                         reject(err);
//                     } else {
//                         resolve(JSON.parse(content))
//                     }

//                 }   
//             )   
//         })
        
//     }
// }

// module.exports = Article;