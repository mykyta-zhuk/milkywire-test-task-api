const Post = require('../models/post');
const { PlainError } = require('../utils/errors');
const responses = require('../responses/responses');

class Posts {
  constructor() {
    this.model = new Post();
  }

  async getPosts(req) {
    try {
      const getter = req.query.impacterId
        ? this.model.getAllPostsByImpacterId(req.query.impacterId)
        : this.model.getAllPosts();
      const payload = await getter;
      return { ...responses.GET_POSTS_OK, payload };
    } catch (error) {
      throw new PlainError(responses.GET_POSTS_FAIL);
    }
  }

  async updatePost(req) {
    try {
      const { id } = req.body;
      await this.model.updatePost(id, req.body);
    } catch (error) {
      throw new PlainError(responses.UPDATE_POST_FAIL);
    }
  }
}

module.exports = Posts;
