const express = require('express');
const router = express.Router();
const userController = require('../../Controller/userController');

router.post('/addusers',userController.addUser);


module.exports = router;
