const express = require('express');
const router = express.Router();
const astrologerController = require('../../Controller/astrologerController');

router.post('/astrologer',astrologerController.addAstrologer);
module.exports = router;
