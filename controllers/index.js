const router = require('express').Router();


// const mockViews = require('./mockViews');


// router.use('/mockViews', mockViews);


const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
