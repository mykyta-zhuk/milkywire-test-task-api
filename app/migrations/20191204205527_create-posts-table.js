exports.up = async (knex) => {
  await knex.schema.createTable('posts', (table) => {
    table.increments('id');
    table.string('description', 512);
    table.enum('type', ['IMAGES', 'TEXT', 'VIDEOS', 'STORY']).notNullable();
    table
      .enum('status', ['VISIBLE', 'HIDDEN', 'DELETED'])
      .defaultTo('VISIBLE')
      .notNullable();
    table.jsonb('data').notNullable();
    table
      .integer('reaction_count')
      .unsigned()
      .defaultTo(0)
      .notNullable();
    table
      .integer('impacter_id')
      .unsigned()
      .notNullable();
    table.foreign('impacter_id').references('impacters.id');

    table.timestamp('published_at');
    table.timestamps(true, true);
    table.index('impacter_id');
    table.index('published_at');
  });
};

exports.down = knex => knex.schema.dropTableIfExists('posts');
