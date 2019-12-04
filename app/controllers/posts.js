const Post = require('../models/post');

class Posts {
  constructor() {
    this.model = new Post();
  }

  async getAllPosts() {
    try {
      const message = 'stub_ok';
      return { message };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Posts;
