const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/weather/info', controller.getWeatherInfo);

module.exports = router;