const express = require('express');
const {
    getArticleHandler,
    getArticleToIdHandler,
} = require('../controllers/article');

const router = express.Router();

router.get('/', getArticleHandler);
router.get('/:id', getArticleToIdHandler)

module.exports = router;