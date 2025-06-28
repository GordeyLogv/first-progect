const express = require('express');
const {
    getArticleHandler,
    getArticleTitleHandler,
    // deleteArticleHandler
} = require('../controllers/article');

const router = express.Router();

router.get('/', getArticleHandler);
router.get('/:id', getArticleTitleHandler)
// router.delete('/:id', deleteArticleHandler);

module.exports = router;