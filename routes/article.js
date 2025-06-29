const express = require('express');
const {
    getArticleHandler,
    getArticleToIdHandler,
    getArticleToEditHandler,
    postArticleToEditHandler
} = require('../controllers/article');

const router = express.Router();

router.get('/', getArticleHandler);
router.get('/:id', getArticleToIdHandler);
router.get('/:id/edit', getArticleToEditHandler);
router.post('/edit', postArticleToEditHandler);

module.exports = router;