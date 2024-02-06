const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/population/city-wise', controller.getPopulationInfo);

module.exports = router;