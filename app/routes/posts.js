const express = require('express');
const wrapper = require('../middlewares/routeWrapper');
const Controller = require('../controllers/posts');

const PostController = new Controller();

const router = express.Router();

router.get('/', wrapper(PostController.getPosts.bind(PostController)));
router.post('/update', wrapper(PostController.updatePost.bind(PostController)));
router.post('/delete', wrapper(PostController.deletePost.bind(PostController)));
module.exports = router;
