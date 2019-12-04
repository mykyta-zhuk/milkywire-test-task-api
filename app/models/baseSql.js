const provider = require('../utils/drivers/sql');

class BaseSQL {
  constructor(table) {
    this.table = table;
  }

  get connection() {
    return provider(this.table);
  }
}

module.exports = BaseSQL;
