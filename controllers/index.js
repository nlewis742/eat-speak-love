const router = require('express').Router();

const mockViews = require('./mockViews');


router.use('/mockViews', mockViews);

module.exports = router;
