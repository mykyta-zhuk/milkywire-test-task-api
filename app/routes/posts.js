const express = require('express');
const wrapper = require('../middlewares/routeWrapper');
const Controller = require('../controllers/posts');

const PostController = new Controller();

const router = express.Router();

router.get('/', wrapper(PostController.getAllPosts));
module.exports = router;
