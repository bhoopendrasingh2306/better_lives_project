const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/geo/cities', controller.listCities);

module.exports = router;