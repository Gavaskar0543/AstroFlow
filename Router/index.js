const express = require('express');
const router = express.Router();

router.use('/users',require('./users'));
router.use('/astrologers',require('./astrologers'));
router.use('/allocation',require('./allocation'));

module.exports = router;
