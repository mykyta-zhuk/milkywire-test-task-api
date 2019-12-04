
exports.up = async (knex) => {
  await knex.schema.createTable('impacters', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.text('bio');
    table.string('profileImage');
    table.string('image');
    table.enum('status', ['ONBOARDING', 'ACTIVE', 'INACTIVE', 'DELETED'])
      .defaultTo('ONBOARDING')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = knex => knex.schema.dropTableIfExists('impacters');
