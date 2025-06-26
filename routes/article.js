const express = require('express');
const {
    getArticleHandler,
    postArticleHandler,
    deleteArticleHandler
} = require('../controllers/article');

const router = express.Router();

router.get('/', getArticleHandler);
router.post('/', postArticleHandler);
router.delete('/:id', deleteArticleHandler);

module.exports = router;