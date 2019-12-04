const builder = require('../utils/drivers/sql');

class Post {
  constructor() {
    this.table = 'posts';
  }
  getAllPosts() {
    return builder(this.table).select();
  }
  getAllPostsByImpacterId(impacterId) {
    const where = {
      impacter_id: impacterId,
    };
    return builder(this.table).select().where(where);
  }
  updatePost(id, payload) {
    return builder(this.table).update(payload).where({
      id,
    });
  }

  deletePost(id) {
    return builder(this.table).del().where({
      id,
    });
  }
}

module.exports = Post;
