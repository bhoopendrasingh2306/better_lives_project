const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/employment/state-wise', controller.getEmploymentInfo);

module.exports = router;