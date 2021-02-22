const router = require('express').Router();

router.get('/', function(req, res) {
    res.send('Hello from root route.')
});

router.use('/api/v1', require('../controllers/api_v1'));
router.use('/api/v2', require('../controllers/api_v2'));

module.exports = router;
