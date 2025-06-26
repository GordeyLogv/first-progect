const express = require('express');
const {
    getAddArticle,
    postAddArticle
} = require('../controllers/add-article');

const router = express.Router();

router.get('/', getAddArticle);
router.post('/', postAddArticle);

module.exports = router;