const router = require('express').Router();
const controller = require('./counter.controller');

router.get('/add', controller.addCounter);
router.get('/subtract', controller.subtractCounter);
router.get('/reset', controller.resetCounter);

module.exports = router;