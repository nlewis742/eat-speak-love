const router = require('express').Router();

<<<<<<< HEAD
const mockViews = require('./mockViews');


router.use('/mockViews', mockViews);

=======
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

>>>>>>> 1211e1fe599b90111269d07558cb76af04eefb47
module.exports = router;
