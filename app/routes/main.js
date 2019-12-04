const express = require('express');
const wrapper = require('../middlewares/routeWrapper');

const router = express.Router();

router.get('/', wrapper(async () => ({ message: 'OK' })));
module.exports = router;
