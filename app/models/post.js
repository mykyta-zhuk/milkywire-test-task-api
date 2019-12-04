const Base = require('./baseSql');

class Post extends Base {
  constructor() {
    super('posts');
  }

  buildQueryFilters(filters) {
    const query = { ...filters };
    return query;
  }

  getPosts(filters) {
    return {};
  }

  updatePost(filters) {

  }

  deletePost(filters) {

  }
}

module.exports = Post;
