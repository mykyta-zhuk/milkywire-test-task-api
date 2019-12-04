const express = require('express');
const wrapper = require('../middlewares/routeWrapper');

const router = express.Router();

router.get('/', wrapper(() => ({ message: 'Watch test' })));
module.exports = router;
