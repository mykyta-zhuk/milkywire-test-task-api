const config = require('./utils/config');

module.exports = {
  client: 'pg',
  connection: config.database,
  migrations: {
    tableName: 'migrations',
  },
};
