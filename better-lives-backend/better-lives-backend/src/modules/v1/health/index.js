const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/health/state-wise', controller.getHealthInfo);
router.get('/health/hospitals', controller.getHospitalInfo);

module.exports = router;