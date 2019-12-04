const config = require('./utils/config');

module.exports = Object.assign({
  client: 'postgres',
}, config.database);
