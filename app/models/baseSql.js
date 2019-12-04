const connection = require('../utils/drivers/sql');

class BaseSqlModel {
  constructor(table) {
    this.table = table;
    this.connection = connection(table);
  }
}

module.exports = BaseSqlModel;
