const express = require('express');
const router = express.Router();
const allocationController = require('../../Controller/allocationController');

router.post('/allocations',allocationController.allocateUser);


module.exports = router;
