const express = require('express');
const rootRouter = require('./root')
const aboutRouter = require('./about');
const articleRouter = require('./article');

const router = express.Router();

router.use('/', rootRouter);
router.use('/about', aboutRouter);
router.use('/article', articleRouter);


module.exports = router;