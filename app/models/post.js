const Base = require('./baseSql');

class Post extends Base {
  constructor() {
    super('posts');
  }

  getAllPosts() {
    return this.connection.select();
  }
  getAllPostsByImpacterId(impacterId) {
    const where = {
      impacter_id: impacterId,
    };
    return this.connection.select().where(where);
  }
  updatePost(id, payload) {
    return this.connection.update(payload).where({
      id,
    });
  }

  deletePost(id) {
    return this.connection.del().where({
      id,
    });
  }
}

module.exports = Post;
