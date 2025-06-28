const express = require('express');
const {
    getArticleHandler,
    deleteArticleHandler
} = require('../controllers/article');

const router = express.Router();

router.get('/', getArticleHandler);
router.delete('/:id', deleteArticleHandler);

module.exports = router;