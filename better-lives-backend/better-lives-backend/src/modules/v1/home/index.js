const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/home-config', controller.homeConfigController);

module.exports = router;