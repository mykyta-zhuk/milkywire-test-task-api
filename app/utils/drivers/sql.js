const knex = require('knex');

const connection = require('../../knexfile');

module.exports = knex({
  client: 'pg',
  connection,
});
