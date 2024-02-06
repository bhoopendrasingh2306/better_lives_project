const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/tourism/list-sites', controller.getTourismInfo);

module.exports = router;